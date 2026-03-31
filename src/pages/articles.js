import React, { useState, useMemo } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { blogPosts, getAllCategories } from "../data/blog-posts";
import { ArrowRight, Calendar, Time, ChevronDown } from "@carbon/icons-react";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["All", ...getAllCategories()];

  const sortedPosts = useMemo(() => {
    const filtered =
      selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
        );
      } else if (sortBy === "oldest") {
        return (
          new Date(a.publishedDate).getTime() -
          new Date(b.publishedDate).getTime()
        );
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [selectedCategory, sortBy]);

  return (
    <Layout>
      <SEO
        title="Articles"
        description="Read the latest articles from Kevlar Security Solutions, expert insights on physical security, alarm systems, patrols, and protecting Tasmanian businesses."
        slug="/articles"
      />

      <div className="min-h-screen bg-gradient-to-bl from-[#002034] to-black">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-4 pt-28 pb-12 sm:pt-36 md:pb-16">
          <div className="mb-10 max-w-3xl">
            <div className="h-1 mb-6 bg-white w-12" />
            <h1 className="text-white font-bold text-4xl sm:text-5xl uppercase tracking-tight mb-4">
              Articles
            </h1>
            <p className="text-kss-text-dark text-base sm:text-lg">
              Expert insights, operational updates and security guidance from
              the Kevlar team.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    selectedCategory === category
                      ? "bg-kss-blue border-kss-blue text-white"
                      : "bg-transparent border-white/20 text-kss-text-dark hover:border-white/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-white/5 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 pr-10 focus:outline-none focus:border-kss-blue transition-colors"
              >
                <option value="newest" className="bg-[#001a2f]">
                  Newest First
                </option>
                <option value="oldest" className="bg-[#001a2f]">
                  Oldest First
                </option>
                <option value="title" className="bg-[#001a2f]">
                  A–Z
                </option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
          </div>

          {/* Grid */}
          {sortedPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col bg-white/5 border border-white/10 hover:border-kss-blue/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <Link
                    to={`/articles/${post.slug}`}
                    className="relative block aspect-video overflow-hidden bg-black/40"
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-black text-white text-xs font-semibold px-3 py-1">
                        {post.category}
                      </span>
                    </div>
                    {/* Arrow on hover */}
                    <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-kss-blue p-2">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-kss-text-dark">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.publishedDate}>
                          {formatDate(post.publishedDate)}
                        </time>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Time className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="flex-1 mb-3">
                      <Link
                        to={`/articles/${post.slug}`}
                        className="text-white font-bold text-base sm:text-lg leading-snug hover:text-kss-blue transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="line-clamp-3 text-sm text-kss-text-dark mb-4">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="flex h-8 w-8 items-center justify-center bg-black text-white text-xs font-bold flex-shrink-0">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {post.author.name}
                        </p>
                        <p className="text-kss-text-dark text-xs">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-kss-text-dark text-lg mb-6">
                No articles found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="flex items-center gap-2 mx-auto bg-transparent border-2 border-white text-white text-sm font-semibold py-3 px-8 hover:bg-white hover:text-black transition"
              >
                View All Articles <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 mt-8">
          <div className="max-w-screen-2xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="h-1 mb-6 bg-white w-12" />
              <h2 className="text-white font-bold text-3xl sm:text-4xl uppercase tracking-tight mb-4">
                Need Security Advice?
              </h2>
              <p className="text-kss-text-dark text-base mb-8">
                Our team of Tasmanian security professionals are ready to assess
                your site and recommend the right solution for your needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent border border-white text-white text-sm font-semibold py-3 px-8 hover:bg-white hover:text-black transition"
              >
                Contact Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Articles;
