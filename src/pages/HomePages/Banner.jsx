import pp from "../../assets/pp.jpg";

const Banner = () => {
  return (
    <div className="bg-blue-900 text-white ">
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="font-semibold text-xl ...">Hello! I'm</p>
        <h3 className="font-bold text-4xl ... ">S M MOHAIMANUL ISLAM</h3>
        <p className="font-semibold text-xl ...">
          A Associate QA Software Engineer
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-3 p-5">
        <div>
          <p className="font-bold text-4xl ...">2</p>
          <p className="font-semibold text-xl ... ">Years Of Experience</p>
          <br />
          <br />
          <p className="font-bold text-4xl ...">35+</p>
          <p className="font-semibold text-xl ... ">Project Completed</p>
        </div>
        <div>
          <img src={pp} alt="" />
        </div>
        <div className="my-3 mx-3">
          <hr className="w-48 h-1  bg-white border-0 rounded md:my-5 dark:bg-white" />
          <p className="font-bold text-2xl ...">Digital Marketer</p>
          <p className="font-semibold  ...  my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            possimus id deserunt non. Porro corporis at quaerat officia magni ex
            fugiat inventore eum doloribus? Blanditiis exercitationem quis quos
            ad perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
