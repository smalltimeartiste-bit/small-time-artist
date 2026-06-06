import Heading from "../Heading/Heading";
import css from "./Blog.module.css";

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function Blog({ blog, contentMarkup }) {
  return (
    <article className={css.root}>
      <p className={css.meta}>
        <span>{blog.category}</span>
        <span>{formatDate(blog.publishedAt)}</span>
        <span>{blog.readTime}</span>
      </p>

      <Heading level={1} className={css.title}>
        {blog.title}
      </Heading>

      <p className={css.author}>By {blog.author}</p>

      <img
        className={css.cover}
        src={blog.coverImage}
        alt={blog.title}
        loading="lazy"
      />

      {contentMarkup ? (
        <div
          className={css.richContent}
          dangerouslySetInnerHTML={{ __html: contentMarkup }}
        />
      ) : (
        <div className={css.content}>
          <p>Blog content is unavailable right now.</p>
        </div>
      )}
    </article>
  );
}

export default Blog;
