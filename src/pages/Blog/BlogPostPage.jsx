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

function BlogPostPage() {
  const { slug } = useParams();

  const blog = useMemo(
    () => blogData.blogs.find((item) => item.slug === slug),
    [slug],
  );

  if (!blog) {
    return <Error message="Blog not found." />;
  }

  return (
    <MainContainer>
      <Helmet>
        <title>{`${blog.title} - Small Time Artist`}</title>
        <meta name="description" content={blog.excerpt} />
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