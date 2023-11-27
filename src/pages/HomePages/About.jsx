const About = () => {
  return (
    <div className=" flex flex-col items-center h-full p-5">
      <h3 className="font-bold text-4xl text-center my-3 capitalize">About Me</h3>
      <div className="grid md:grid-cols-2 gap-4 my-3 w-full">
        <div>
        <p className="font-bold text-xl capitalize mb-2 md:text-2xl">MY BACKGROUND</p>
          <p className=" mb-4 md:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            possimus id deserunt non. Porro corporis at quaerat officia magni ex
            fugiat inventore eum doloribus? Blanditiis exercitationem quis quos
            ad perferendis?
          </p>
        </div>

        <div className="mx-auto">
          <p className="font-semibold capitalize mb-2 md:text-xl">FIND ME SOCIAL MEDIA</p>
          <p className="font-bold mb-2 md:text-2xl">FACEBOOK</p>
          <p className="font-bold mb-2 md:text-2xl">YOU TUBE</p>
          <p className="font-bold mb-2 md:text-2xl">LINKEDIN</p>
          <p className="font-bold mb-2 md:text-2xl">INSTAGRAM</p>
        </div>
        <hr className="w-full h-1  bg-gray-500 border-0 rounded md:my-5 dark:bg-gray-500"/>
      </div>
   
    </div>
    
  );
};

export default About;
