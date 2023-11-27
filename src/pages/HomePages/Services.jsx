const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="p-5">
         <h3 className="font-bold text-3xl text-center my-3 capitalize">My Services</h3>
      <div className="flex ">
        <ServiceCard
          title="Web Development"
          description="Create responsive and dynamic websites using the latest technologies."
        />
        <ServiceCard
          title="Graphic Design"
          description="Design visually appealing graphics and illustrations for various purposes."
        />
         <ServiceCard
          title="Graphic Design"
          description="Design visually appealing graphics and illustrations for various purposes."
        />
      </div>
      <div className="flex">
        <ServiceCard
          title="Web Development"
          description="Create responsive and dynamic websites using the latest technologies."
        />
        <ServiceCard
          title="Graphic Design"
          description="Design visually appealing graphics and illustrations for various purposes."
        />
         <ServiceCard
          title="Graphic Design"
          description="Design visually appealing graphics and illustrations for various purposes."
        />
      </div>
    </div>
  );
};

export default Services;
