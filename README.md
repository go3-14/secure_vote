# 🗳️ Secure Electoral Roll using Blockchain

A blockchain-based system to make **electoral roll management tamper-proof, auditable, and privacy-preserving**, without storing votes or sensitive personal data on-chain.

---

## 📌 Problem

In India, most election manipulation allegations involve **electoral roll tampering**, not EVMs:
- Fake or duplicate voters
- Silent deletions
- Last-minute unauthorized changes

Current systems lack a **publicly verifiable, immutable audit trail** for voter-list updates.

---

## 💡 Solution

This project uses **blockchain only to secure the electoral roll**, not voting.

- Each voter is represented by a **cryptographic hash**
- Voter eligibility requires **approval from multiple authorities**
- All approvals are **immutable and publicly auditable**
- **No Aadhaar or personal data is stored on-chain**

---

## 🔐 Privacy Design

Voter identity is never stored directly.


- Hashing happens locally in the browser
- Blockchain stores only hashes and approval counts
- Identity cannot be reverse-engineered

---

## 🏛️ Authority Model

Two independent authorities approve voters:
- **Election Commission**
- **State Election Authority**

Rules enforced by the smart contract:
- Same authority cannot approve twice
- Single authority cannot verify a voter alone
- Voter becomes eligible only after **2 approvals**

---

## 🧱 Tech Stack

- **Solidity** (Smart Contracts)
- **Ganache** (Local Ethereum network)
- **MetaMask**
- **Remix IDE**
- **Next.js (JavaScript)**
- **ethers.js**
- **Pure CSS**

---

## 🖥️ Application Pages

- **Citizen Portal** – Verify voter eligibility using Aadhaar + DOB (hashed locally)
- **Authority Portal** – Approve voters using MetaMask (simulates officials)

---

## 🧪 Demo Flow

1. Citizen checks eligibility → ❌ Not Verified  
2. Election Commission approves voter  
3. State Authority approves voter  
4. Citizen checks again → ✅ Verified  

All actions are recorded immutably on-chain.

---

## 🚀 Local Setup (Demo)

```bash
git clone https://github.com/<your-username>/secure-electoral-roll.git
cd secure-electoral-roll
npm install
npm run dev
