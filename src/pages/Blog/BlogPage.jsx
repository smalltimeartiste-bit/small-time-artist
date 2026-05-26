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
        <title>
          Small Time Artiste Blog | Personalized Gift Ideas, Handmade Decor & Creative Stories
        </title>
        <meta
          name="description"
          content="Explore personalized gift ideas in India, customized phone covers, thoughtful corporate gifting guides, and handmade decor inspiration from Small Time Artiste."
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