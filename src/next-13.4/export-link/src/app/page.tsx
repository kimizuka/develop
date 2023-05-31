import { articles } from '@/scripts/articles';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <ul>
      { articles.map(({ label, href }) => (
        <li key={ label }>
          <Link href={ href }>{ label }</Link>
        </li>
      ))}
    </ul>
  );
}
