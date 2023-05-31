import Link from 'next/link';
import { articles } from '@/scripts/articles';

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
