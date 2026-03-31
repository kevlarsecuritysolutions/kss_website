import React, { useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { getRecentPosts } from '../data/blog-posts';
import { ArrowRight, Calendar, Time, Share } from '@carbon/icons-react';
import { marked } from 'marked';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const BlogPost = ({ pageContext }) => {
  const { post } = pageContext;
  const [copied, setCopied] = useState(false);
  const htmlContent = marked.parse(post.content);
  const relatedPosts = getRecentPosts(4).filter((p) => p.id !== post.id).slice(0, 3);

  function handleShare() {
    if (typeof window === 'undefined') return;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        slug={`/articles/${post.slug}`}
      />

      <div className="min-h-screen bg-gradient-to-bl from-[#002034] to-black">
        <article>
          {/* Header */}
          <header className="max-w-screen-2xl mx-auto px-4 pt-28 pb-8 sm:pt-36 md:pb-12">
            <div className="max-w-4xl mx-auto">
              {/* Category */}
              <div className="mb-5">
                <span className="bg-black text-white text-xs font-semibold px-3 py-1">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight mb-8">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-kss-text-dark mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
                </span>
                <span className="flex items-center gap-2">
                  <Time className="h-4 w-4" />
                  {post.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  aria-label="Share article"
                >
                  <Share className="h-4 w-4" />
                  {copied ? 'Link copied!' : 'Share'}
                </button>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="flex h-10 w-10 items-center justify-center bg-black text-white text-sm font-bold flex-shrink-0">
                  {post.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{post.author.name}</p>
                  <p className="text-kss-text-dark text-xs">{post.author.role}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured image */}
          <div className="px-4 pb-10 sm:pb-14">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-screen-2xl mx-auto px-4 pb-14 sm:pb-20">
            <div className="max-w-5xl mx-auto">
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="border-t border-white/10 px-4 py-8 sm:py-10">
              <div className="max-w-screen-2xl mx-auto">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2">
                  <span className="text-kss-text-dark text-xs font-semibold uppercase tracking-wider mr-1">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-kss-text-dark text-xs px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-white/10 px-4 py-14 sm:py-20">
            <div className="max-w-screen-2xl mx-auto">
              <div className="h-1 mb-6 bg-white w-12" />
              <h2 className="text-white font-bold text-2xl sm:text-3xl uppercase tracking-tight mb-10">
                More Articles
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <article
                    key={related.id}
                    className="group flex flex-col bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                  >
                    <Link
                      to={`/articles/${related.slug}`}
                      className="relative block aspect-video overflow-hidden bg-black/40"
                    >
                      <img
                        src={related.featuredImage}
                        alt={related.title}
                        className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-black text-white text-xs font-semibold px-3 py-1">
                          {related.category}
                        </span>
                      </div>
                    </Link>

                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-2 text-xs text-kss-text-dark mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={related.publishedDate}>{formatDate(related.publishedDate)}</time>
                      </div>
                      <h3 className="flex-1 mb-3">
                        <Link
                          to={`/articles/${related.slug}`}
                          className="text-white font-bold text-base leading-snug hover:text-kss-blue transition-colors"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="line-clamp-2 text-sm text-kss-text-dark">
                        {related.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-2 bg-transparent border border-white text-white text-sm font-semibold py-3 px-8 hover:bg-white hover:text-black transition"
                >
                  View All Articles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="max-w-screen-2xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="h-1 mb-6 bg-kss-blue w-12" />
              <h2 className="text-white font-bold text-3xl sm:text-4xl uppercase tracking-tight mb-4">
                Protect Your Business
              </h2>
              <p className="text-kss-text-dark text-base mb-8">
                Talk to our team about a tailored security solution for your Tasmanian site.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent border border-white text-white text-sm font-semibold py-3 px-8 hover:bg-white hover:text-black transition"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPost;
