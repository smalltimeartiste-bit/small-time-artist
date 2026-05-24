import Heading from "../Heading/Heading";
import css from "./Blog.module.css";

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function Blog({ blog }) {
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

      <img className={css.cover} src={blog.coverImage} alt={blog.title} loading="lazy" />

      <div className={css.content}>
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default Blog;