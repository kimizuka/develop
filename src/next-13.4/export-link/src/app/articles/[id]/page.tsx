import { notFound } from 'next/navigation';
import { articles } from '@/scripts/articles';

export default async function ArticlePage({
  params
}: {
  params: { id: string };
}) {
  (() => {
    let isSuccess = false;

    for (let i = 0; i < articles.length; ++i) {
      isSuccess = isSuccess || articles[i].label === params.id;

      if (isSuccess) {
        break;
      }
    }

    if (!isSuccess) {
      notFound();
    }
  })();

  return (
    <article>
      <h1>{ params.id }</h1>
    </article>
  );
}

export async function generateStaticParams() {
  return articles.map(({ label }) => ({
    id: label
  }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  return {
    title: id,
  };
}
