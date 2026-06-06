import { useEffect, useMemo, useState } from "react";

import Blog from "../../components/Blog/Blog";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Error from "../../components/Error/Error";
import { Helmet } from "react-helmet-async";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import blogData from "../../data/blogs/blogs.json";
import { useParams } from "react-router";

const SITE_URL = "https://www.smalltimeartiste.in";
const blogContentModules = import.meta.glob(
  "../../content/blogs/*.{md,mdx,html}",
  { query: "?raw", import: "default" },
);

function getIsoDate(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

function BlogPostPage() {
  const { slug } = useParams();
  const [blogContentMarkup, setBlogContentMarkup] = useState("");

  const blog = useMemo(
    () => blogData.blogs.find((item) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    let isActive = true;

    async function loadBlogContent() {
      if (!blog?.contentPath) {
        setBlogContentMarkup("");
        return;
      }

      const loader = blogContentModules[blog.contentPath];
      if (!loader) {
        setBlogContentMarkup("");
        return;
      }

      try {
        const rawContent = await loader();
        if (isActive) {
          setBlogContentMarkup(rawContent.trim().startsWith("<") ? rawContent : "");
        }
      } catch {
        if (isActive) {
          setBlogContentMarkup("");
        }
      }
    }

    loadBlogContent();

    return () => {
      isActive = false;
    };
  }, [blog]);

  if (!blog) {
    return <Error message="Blog not found." />;
  }

  const blogUrl = `${SITE_URL}/blog/${blog.slug}`;
  const blogMetaDescription = blog.metaDescription || blog.excerpt;
  const publishedIso = getIsoDate(blog.publishedAt);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blogMetaDescription,
    image: [blog.coverImage],
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Small Time Artiste",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    url: blogUrl,
    datePublished: publishedIso,
    dateModified: publishedIso,
    articleSection: blog.category,
    keywords: blog.tags.join(", "),
  };

  if (!publishedIso) {
    delete articleSchema.datePublished;
    delete articleSchema.dateModified;
  }

  return (
    <MainContainer>
      <Helmet>
        <title>{`${blog.title} - Small Time Artist`}</title>
        <meta name="description" content={blogMetaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Breadcrumbs />

      <Section label={blog.title}>
        <WrapperContainer>
          <Blog blog={blog} contentMarkup={blogContentMarkup} />
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default BlogPostPage;