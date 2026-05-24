import { Link } from "react-router";
import css from "./BlogCard.module.css";

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function BlogCard({ blog }) {
  return (
    <Link className={css.card} to={`/blog/${blog.slug}`}>
      <div className={css.imageLink}>
        <img src={blog.coverImage} alt={blog.title} loading="lazy" decoding="async" />
      </div>

      <div className={css.content}>
        <p className={css.meta}>{blog.category}</p>
        <h3 className={css.title}>{blog.title}</h3>
        <p className={css.excerpt}>{blog.excerpt}</p>
        <p className={css.author}>By {blog.author}</p>
        <div className={css.footer}>
          <span>{formatDate(blog.publishedAt)}</span>
          <span className={css.readStory}>Read Story</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;