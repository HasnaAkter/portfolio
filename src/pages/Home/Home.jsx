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
          <br />
          <About></About>
          <br />
          <br />
          <br />
          <Services></Services>
          <br />
          <br />
          <br />
          <MyRecentWork></MyRecentWork>
          <br />
          <br />
          <br />
          <Blog></Blog>
          <br />
          <br />
          <br />
          <Testimonials></Testimonials>
          
        </>
    );
};

export default Home;