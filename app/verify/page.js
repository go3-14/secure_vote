"use client";

import { useState } from "react";
import Card from "../../components/card";
import { getContract } from "../../lib/contract";
import { generateVoterHash } from "../../lib/hash";

export default function VerifyPage() {
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hashChecked, setHashChecked] = useState("");

  async function checkEligibility() {
    try {
      setLoading(true);
      setResult(null);

      if (!aadhaar || !dob) {
        alert("Please enter Aadhaar and Date of Birth");
        setLoading(false);
        return;
      }

      const contract = await getContract();
      if (!contract) {
        setResult(false);
        setLoading(false);
        return;
      }

      // IMPORTANT: trim inputs to avoid hash mismatch
      const voterHash = generateVoterHash(
        aadhaar.trim(),
        dob.trim()
      );

      console.log("Checking voter hash:", voterHash);
      setHashChecked(voterHash);

      const verified = await contract.isVerified(voterHash);
      console.log("Verification result:", verified);

      setResult(verified);
    } catch (error) {
      console.error("Verification error:", error);
      setResult(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-center">
      <Card title="Voter Eligibility Verification">
        <label>Aadhaar Number</label>
        <input
          value={aadhaar}
          placeholder="Enter Aadhaar Number"
          onChange={(e) => setAadhaar(e.target.value)}
        />

        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button
          className="btn-blue"
          onClick={checkEligibility}
          disabled={loading}
        >
          {loading ? "Checking..." : "Verify Voter"}
        </button>

        {/* STATUS OUTPUT */}
        {result !== null && (
          <div
            className={`status ${result ? "success" : "error"}`}
          >
            {result ? "Verified Voter" : "Not Verified"}
          </div>
        )}

        {/* DEBUG INFO (VERY IMPORTANT FOR DEMO) */}
        {hashChecked && (
          <div
            style={{
              marginTop: "12px",
              fontSize: "11px",
              wordBreak: "break-all",
              color: "#4b5563",
            }}
          >
            Hash checked on blockchain:
            <br />
            <code>{hashChecked}</code>
          </div>
        )}
      </Card>
    </div>
  );
}
