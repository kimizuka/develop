'use client';

import styled from 'styled-components';

export function ArticlePageTemplate({ text }: {
  text: string;
}) {
  return (
    <Wrapper>
      <h1>{ text }</h1>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  color: red;
`;