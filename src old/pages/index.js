//example.com/
import Link from "next/link";
// if we use ahref, we loose spa effect(states and context are getting lost)
export default function Home() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/news/createNews">Create News</Link>
        </li>
        <li>
          <Link href="/news/1">News 1</Link>
        </li>
      </ul>
    </nav>
      <h1>Home</h1>
    </>
  );
}
