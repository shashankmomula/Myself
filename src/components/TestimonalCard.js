const TestimonalCard = ({ name, description, regarding }) => {
  return (
    <div className="bg-orange-50 shadow-lg rounded-lg p-6 max-w-md my-4 mx-2">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{regarding}</p>
      <p className="text-gray-700 italic">{description}</p>
    </div>
  );
};

export default TestimonalCard;
