import { Blogitems } from "../utils/BlogsData";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  return (
    <div className="size-auto mb-36">
      <h1 className="flex justify-center text-2xl font-sans m-10 font-medium">
        Explore My Tech Blogs
      </h1>
      <div className="flex flex-col md:flex-row">
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
