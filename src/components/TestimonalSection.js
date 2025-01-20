import { testimonials } from "../utils/TestimonalsData";
import TestimonalCard from "./TestimonalCard";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-10 shadow-md rounded-md mb-40 dark:bg-slate-900">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 dark:text-white">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonalCard
            key={index}
            name={testimonial.name}
            description={testimonial.description}
            regarding={testimonial.regarding}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
