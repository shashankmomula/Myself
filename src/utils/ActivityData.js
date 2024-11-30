// Import required images
import image0 from "../CA.jpg";
import image1 from "../CA-1.png";
import image2 from "../CA-3.png";

const Activities = [
  {
    id: 1,
    title: "Mastering CSS: Hands-On Workshop",
    description: (
      <p>
        My latest session was about{" "}
        <span className="text-orange-500">
          building a personal portfolio from scratch
        </span>
        . I guided participants through the fundamentals of HTML and CSS with
        hands-on coding exercises. Each concept was explained in a simple and
        accessible way, supported by <span className="text-orange-500">practical, real-world examples.</span> To ensure
        an engaging learning experience, the session concluded with a fun quiz,
        helping participants reinforce their understanding of HTML and CSS
        basics. Everyone left with a strong foundation to start their own
        portfolio projects confidently.
      </p>
    ),
    // Images associated with this activity
    images: [image0, image1, image2],
  },
];

export default Activities;
