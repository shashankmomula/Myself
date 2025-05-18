import { Blogitems } from "../utils/BlogsData";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
          Explore My Tech Blogs
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on technology and development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blogitems.map((item) => (
          <BlogCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
