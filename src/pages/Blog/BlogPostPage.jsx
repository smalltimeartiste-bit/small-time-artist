import Blog from "../../components/Blog/Blog";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Error from "../../components/Error/Error";
import { Helmet } from "react-helmet-async";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import blogData from "../../data/blogs/blogs.json";
import { useMemo } from "react";
import { useParams } from "react-router";

const SITE_URL = "https://www.smalltimeartiste.in";

function getIsoDate(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

function BlogPostPage() {
  const { slug } = useParams();

  const blog = useMemo(
    () => blogData.blogs.find((item) => item.slug === slug),
    [slug],
  );

  if (!blog) {
    return <Error message="Blog not found." />;
  }

  const blogUrl = `${SITE_URL}/blog/${blog.slug}`;
  const publishedIso = getIsoDate(blog.publishedAt);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
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
        <meta name="description" content={blog.excerpt} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Breadcrumbs />

      <Section label={blog.title}>
        <WrapperContainer>
          <Blog blog={blog} />
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default BlogPostPage;