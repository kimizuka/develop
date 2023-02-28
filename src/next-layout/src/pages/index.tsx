import Link from 'next/link';

export default function IndexPage() {
  return (
    <ul>
      <li>
        <Link href="/a">
          <a>A</a>
        </Link>
      </li>
      <li>
        <Link href="/b">
          <a>B</a>
        </Link>
      </li>
    </ul>
  );
}