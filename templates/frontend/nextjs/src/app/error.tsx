"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="shell">
      <section className="hero">
        <h1>Something went wrong</h1>
        <button className="button" type="button" onClick={() => reset()}>
          Try again
        </button>
      </section>
    </main>
  );
}