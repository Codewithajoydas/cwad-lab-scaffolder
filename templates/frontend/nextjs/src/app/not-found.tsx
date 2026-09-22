import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell">
      <section className="hero">
        <h1>404</h1>
        <p>The requested page could not be found.</p>
        <Link className="button" href="/">
          Back home
        </Link>
      </section>
    </main>
  );
}