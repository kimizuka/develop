import Link from 'next/link';
import { ReactNode, useEffect, useRef } from 'react';
import Canvas from './Canvas';

export default function Layout({ children }: {
  children: ReactNode;
}) {

  return (
    <>
      <Canvas />
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
      { children }
    </>
  );
}