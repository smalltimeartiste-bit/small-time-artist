import BlogHome from "../../components/Blog/BlogHome";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet-async";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import blogData from "../../data/blogs/blogs.json";

function BlogPage() {
  return (
    <MainContainer>
      <Helmet>
        <title>Blog - Small Time Artist</title>
        <meta
          name="description"
          content="Studio notes, creative process stories, and new arrivals from Small Time Artist."
        />
      </Helmet>

      <Breadcrumbs />

      <Section label="Blog Home">
        <WrapperContainer>
          <BlogHome
            pageTitle={blogData.pageTitle}
            pageSubtitle={blogData.pageSubtitle}
            blogs={blogData.blogs}
          />
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default BlogPage;