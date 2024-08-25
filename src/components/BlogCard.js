import React from 'react';

const BlogCard = ({ image, title, description, url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="m-7 p-4 rounded-lg bg-gray-100 cursor-pointer sm:w-full md:w-96 hover:shadow-lg transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="relative group overflow-hidden rounded-t-lg">
        <img src="" alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read Article
        </p>
      </div>

      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2 text-center">{title}</h1>
        <p className="text-gray-700 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
