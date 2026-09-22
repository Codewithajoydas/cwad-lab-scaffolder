import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Example route</p>
        <h1>Dashboard</h1>
        <p>This page verifies that the App Router is working correctly.</p>
        <Link className="button" href="/">
          Back home
        </Link>
      </section>
    </main>
  );
}