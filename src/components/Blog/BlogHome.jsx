import BlogCard from "./BlogCard";
import Heading from "../Heading/Heading";
import { Link } from "react-router";
import css from "./BlogHome.module.css";

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function BlogHome({ pageTitle, pageSubtitle, blogs }) {
  const featured = blogs.find((item) => item.isFeatured) || blogs[0];
  const feed = blogs.filter((item) => item.slug !== featured.slug);
  const titleParts = pageTitle.split(" ");
  const titleLead = titleParts.slice(0, -1).join(" ");
  const titleAccent = titleParts[titleParts.length - 1] || "";

  return (
    <div className={css.root}>
      <div className={css.header}>
        <Heading level={1} className={css.title}>
          {titleLead} <span>{titleAccent}</span>
        </Heading>
        <p>{pageSubtitle}</p>
      </div>

      <article className={css.featuredCard}>
        <Link to={`/blog/${featured.slug}`} className={css.featuredImage}>
          <img src={featured.coverImage} alt={featured.title} loading="lazy" decoding="async" />
        </Link>

        <div className={css.featuredContent}>
          <p className={css.badge}>{featured.category}</p>
          <Heading level={2} className={css.featuredTitle}>
            {featured.title}
          </Heading>
          <p className={css.featuredExcerpt}>{featured.excerpt}</p>
          <p className={css.featuredAuthor}>By {featured.author}</p>
          <div className={css.featuredFooter}>
            <span>{formatDate(featured.publishedAt)}</span>
            <Link to={`/blog/${featured.slug}`}>Read Story</Link>
          </div>
        </div>
      </article>

      <div className={css.grid}>
        {feed.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogHome;