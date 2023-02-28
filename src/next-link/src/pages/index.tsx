import Link from 'next/link';

export default function IndexPage() {
  return (
    <ul>
      <li>
        <Link href="https://kimizuka.fm">with text node</Link>
      </li>
      <li>
        <Link href="https://kimizuka.fm">
          <a>with a tag</a>
        </Link>
      </li>
      <li>
        <Link href="https://kimizuka.fm">
          <span>with span tag</span>
        </Link>
      </li>
      <li>
        <Link href="https://kimizuka.fm">
          <a>
            <span>with a and span tag</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://kimizuka.fm">
          <a href="https://kimizuka.org">with a and href</a>
        </Link>
      </li>
      <li>
        <Link href="https://kimizuka.fm" passHref>
          <a href="https://kimizuka.org">with a and passHref</a>
        </Link>
      </li>
    </ul>
  );
}