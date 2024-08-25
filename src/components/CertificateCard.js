const CertificateCard = ({ title, description, image }) => {
    return (
      <div className="flex w-full h-auto m-2 mt-8 rounded-lg shadow-md">
        <div className="w-2/3">
         
          <img src={image} alt={title} className=" object-cover rounded-l-lg" />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          {description}
        </div>
      </div>
    );
  };
  
  export default CertificateCard;
  