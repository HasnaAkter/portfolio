import About from "../HomePages/About";
import Banner from "../HomePages/Banner";
import MyRecentWork from "../HomePages/MyRecentWork";
import Services from "../HomePages/Services";


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
        </>
    );
};

export default Home;