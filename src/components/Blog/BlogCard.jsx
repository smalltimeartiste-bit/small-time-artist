import { Link } from "react-router";
import css from "./BlogCard.module.css";

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlogCard({ blog }) {
  return (
    <article className={css.card}>
      <Link className={css.imageLink} to={`/blog/${blog.slug}`}>
        <img src={blog.coverImage} alt={blog.title} loading="lazy" decoding="async" />
      </Link>

      <div className={css.content}>
        <p className={css.meta}>{blog.category}</p>
        <h3 className={css.title}>
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        <p className={css.excerpt}>{blog.excerpt}</p>
        <p className={css.author}>By {blog.author}</p>
        <div className={css.footer}>
          <span>{formatDate(blog.publishedAt)}</span>
          <Link to={`/blog/${blog.slug}`}>Read Story</Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;