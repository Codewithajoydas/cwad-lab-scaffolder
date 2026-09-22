import Link from "next/link";
import { StatusCard } from "@/components/ui/StatusCard";

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CWAD Next.js Template</p>
        <h1>Next.js + TypeScript</h1>
        <p>
          A professional App Router foundation with server rendering, route
          handlers, typed configuration and production-ready project structure.
        </p>

        <div className="grid">
          <StatusCard title="Framework" value="Next.js" />
          <StatusCard title="Router" value="App Router" />
          <StatusCard title="Language" value="TypeScript" />
        </div>

        <Link className="button" href="/dashboard">
          Open dashboard
        </Link>
      </section>
    </main>
  );
}