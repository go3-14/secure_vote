"use client";

import { useState } from "react";
import Card from "../../components/card";
import { getContract } from "../../lib/contract";
import { generateVoterHash } from "../../lib/hash";

export default function AuthorityPage() {
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [txHash, setTxHash] = useState("");
  const [hashUsed, setHashUsed] = useState("");

  async function approve() {
    try {
      const contract = await getContract();

      const voterHash = generateVoterHash(aadhaar.trim(), dob.trim());
      console.log("Approving hash:", voterHash);

      setHashUsed(voterHash);

      const tx = await contract.approveVoter(voterHash);
      await tx.wait();

      setTxHash(tx.hash);
    } catch (err) {
      console.error("Approval failed:", err);
      alert("Approval failed. Check console.");
    }
  }

  return (
    <div className="page-center">
      <Card title="Election Authority Approval">
        <label>Aadhaar Number</label>
        <input
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
        />

        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button className="btn-green" onClick={approve}>
          Approve Voter
        </button>

        {hashUsed && (
          <div className="status success">
            Approved Hash:
            <br />
            <code style={{ fontSize: "11px" }}>{hashUsed}</code>
          </div>
        )}

        {txHash && (
          <div className="status success">
            Tx Confirmed on Blockchain
          </div>
        )}
      </Card>
    </div>
  );
}
