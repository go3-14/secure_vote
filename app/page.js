import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Secure Electoral Roll System</h1>
      <p>
        A blockchain-backed system to prevent electoral roll manipulation
        while preserving voter privacy.
      </p>

      <div className="home-buttons">
        <Link href="/verify">
          <button className="btn-blue">Citizen Portal</button>
        </Link>

        <Link href="/authority">
          <button className="btn-green">Authority Portal</button>
        </Link>
      </div>
    </div>
  );
}
