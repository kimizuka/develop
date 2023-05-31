'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { typeArticle } from '@/scripts/articles';

export function IndexPageTemplate({
  links = []
}: {
  links?: typeArticle[];
}) {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/develop">develop</Link>
        </li>
        {links.map(({
          label,
          href
        }, i) => {
          return (
            <li key={ i }>
              <Link href={ href }>{ label }</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div``;