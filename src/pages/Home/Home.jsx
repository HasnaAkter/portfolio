import About from "../HomePages/About";
import Banner from "../HomePages/Banner";
import Blog from "../HomePages/Blog";
import MyRecentWork from "../HomePages/MyRecentWork";
import Services from "../HomePages/Services";
import Testimonials from "../HomePages/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>

      <br />
      <br />
      <About></About>
      <br />
      <br />
      <Services></Services>
      <br />
      <br />
      <MyRecentWork></MyRecentWork>
      <br />
      <br />
      <Blog></Blog>
      <br />
      <br />
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
