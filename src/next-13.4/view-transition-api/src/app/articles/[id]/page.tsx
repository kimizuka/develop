import { notFound } from 'next/navigation';
import { ArticlePageTemplate } from '@/components/templates/ArticlePageTemplate';

export default async function ArticlePage({ params }: {
  params: {
    id: string
  }
}) {
  if (params.id !== 'counterattack-of-the-timer') {
    notFound();
  }

  return (
    <ArticlePageTemplate />
  );
}

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string };
}) {
  return {
    title: 'counterattack-of-the-timer'
  };
}

export async function generateStaticParams() {
  return [{
    id: 'counterattack-of-the-timer'
  }];
}