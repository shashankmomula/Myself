const CertificateCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto m-2 mt-8 rounded-lg shadow-md bg-white">
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>
      <div className="p-4 w-full md:w-1/2 text-justify">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-700 p-2">{description}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
