import Link from "next/link";

export default function NotFound() {
  return (
    <section className="glow-wrap">
      <div className="rays" />
      <div className="stars" />
      <div className="nf">
        <div>
          <div className="code">404</div>
          <h1>That page isn&rsquo;t connected to the grid yet.</h1>
          <p>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
          <Link href="/" className="btn">
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
