import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getArticleById } from '@/data/articles';

interface BlogDetailPageProps {
  params: { id: string };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const numericId = Number(params.id);
  if (Number.isNaN(numericId)) notFound();
  const article = getArticleById(numericId);
  if (!article) notFound();

  const dateLabel = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: '2-digit'
  });

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article>
          <header className="mb-10">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Article</p>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4 text-gray-900">{article.title}</h1>
            <time className="text-sm text-gray-500">{dateLabel}</time>
          </header>
          <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden rounded-md bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
          </div>
          <div className="prose prose-neutral max-w-none">
            <p>{article.excerpt}</p>
            <hr />
            <p>{article.content}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
