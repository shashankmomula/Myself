import { Bookitems } from "../utils/BooksData";
import BookCard from "./BookCard";

const BooksSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
          Exploring Programming and Tech Innovations
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Discover my published works and technical insights
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {Bookitems.map((item) => (
          <BookCard 
            key={item.id} 
            image={item.image} 
            description={item.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;