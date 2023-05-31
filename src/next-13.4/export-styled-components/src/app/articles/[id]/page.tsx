import { notFound } from 'next/navigation';
import { articles } from '@/scripts/articles';
import { ArticlePageTemplate } from '@/components/templates/ArticlePageTemplate';

export default async function ArticlePage({ params }: {
  params: {
    id: string
  }
}) {
  let body = '';

  (() => {
    let isSuccess = false;

    for (let i = 0; i < articles.length; ++i) {
      isSuccess = isSuccess || articles[i].label === params.id;

      if (isSuccess) {
        body = articles[i].label;
        break;
      }
    }

    if (!isSuccess) {
      notFound();
    }
  })();

  return (
    <ArticlePageTemplate text={ body } />
  );
}

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string };
}) {
  let title = '';

  articles.forEach(({ label }) => {
    if (id === label) {
      title = label;
    }
  });

  return {
    title
  };
}

export async function generateStaticParams() {
  return articles.map(({ label }) => ({
    id: label
  }));
}