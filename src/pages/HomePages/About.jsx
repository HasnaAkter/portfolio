import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col items-center h-full p-10 ">
      <h3 className="font-bold text-4xl text-center my-3 capitalize">
        About Me
      </h3>
      <div className="grid md:grid-cols-2 gap-4 my-3 w-full">
        <div className="text-center">
          <p className="font-bold text-xl capitalize mb-2 md:text-2xl">
            MY BACKGROUND
          </p>
          <p className="mb-4 md:mb-0 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            possimus id deserunt non. Porro corporis at quaerat officia magni ex
            fugiat inventore eum doloribus? Blanditiis exercitationem quis quos
            ad perferendis?
          </p>
        </div>

        <div className="mx-auto text-center">
          <p className="font-bold text-xl capitalize mb-2 md:text-xl">
            FIND ME ON SOCIAL MEDIA
          </p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-4 my-3">
            <a
              href="your_facebook_link"
              target="_blank"
              rel="noopener noreferrer"
              className=" mb-2 flex items-center text-pink-900 hover:text-gray-500 active:text-pink-900"
            >
              <FaFacebook className="mr-2" /> FACEBOOK
            </a>
            <a
              href="your_youtube_link"
              target="_blank"
              rel="noopener noreferrer"
              className=" mb-2 flex items-center text-pink-900 hover:text-gray-500 active:text-pink-900"
            >
              <FaYoutube className="mr-2" /> YOUTUBE
            </a>
            <a
              href="your_linkedin_link"
              target="_blank"
              rel="noopener noreferrer"
              className=" mb-2 flex items-center text-pink-900 hover:text-gray-500 active:text-pink-900"
            >
              <FaLinkedin className="mr-2" /> LINKEDIN
            </a>
            <a
              href="your_instagram_link"
              target="_blank"
              rel="noopener noreferrer"
              className=" mb-2 flex items-center text-pink-900 hover:text-gray-500 active:text-pink-900"
            >
              <FaInstagram className="mr-2" /> INSTAGRAM
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full h-1 bg-gray-500 border-0 rounded md:my-5 dark:bg-gray-500" />
    </div>
  );
};

export default About;
