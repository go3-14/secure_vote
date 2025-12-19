import { keccak256, toUtf8Bytes } from "ethers";

const SALT = "secure-electoral-roll-demo";

export function generateVoterHash(aadhaar, dob) {
  const input = `${aadhaar}-${dob}-${SALT}`;
  return keccak256(toUtf8Bytes(input));
}
