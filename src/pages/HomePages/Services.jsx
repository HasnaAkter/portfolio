import { FaCode, FaPaintBrush } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon }) => {
  const IconComponent = icon; 

  return (
    <div className="bg-white p-10 shadow-md rounded-md m-2 w-full md:w-96">
      <div className="flex items-center mb-3">
        {IconComponent && <IconComponent className="mr-2 text-blue-500" />}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="p-5">
      <h3 className="font-bold text-4xl text-center my-3 capitalize">My Services</h3>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          title="Web Development"
          description="Create responsive and dynamic websites using the latest technologies."
          icon={FaCode}
        />
        <ServiceCard
          title="Graphic Design"
          description="Design visually appealing graphics and illustrations for various purposes."
          icon={FaPaintBrush}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          title="Web Development"
          description="Create responsive and dynamic websites using the latest technologies."
          icon={FaCode}
        />
        <ServiceCard
          title="Graphic Design"
          description="Design visually appealing graphics and illustrations for various purposes."
          icon={FaPaintBrush}
        />
      </div>
    </div>
  );
};

export default Services;
