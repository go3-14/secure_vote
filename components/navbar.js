import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <strong>Secure Electoral Roll</strong>
      <div>
        <Link href="/">Home</Link>
        <Link href="/verify">Citizen</Link>
        <Link href="/authority">Authority</Link>
      </div>
    </div>
  );
}
