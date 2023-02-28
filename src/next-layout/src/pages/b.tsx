import { ReactNode } from 'react';
import Layout from '../components/Layout';
import Canvas from '../components/Canvas';
import Link from 'next/link';

export default function B() {
  return (
    <>
      {/* <Canvas />
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
      </ul> */}
      <p>B</p>
    </>
  );
}

B.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>{ page }</Layout>
  );
}