import certificate1 from "../certificate.webp";
import certificate2 from "../UDEMY_DSA.png";
import certificate3 from "../certificate_node.webp";
export const Certificates = [
  {
    id: 1,
    title: "Namaste React - Mastering Modern React Development",
    image: certificate1,
    description: (
      <p className="dark:text-white">
        Successfully completed the comprehensive{" "}
        <span className="text-rose-600">Namaste React </span>course by
        <span className="text-rose-600">Akshay Saini on NamasteDev</span>. This
        course deepened my understanding of modern React practices, including{" "}
        <span className="text-rose-600">
          component-based architecture, state management, hooks, and performance
          optimization
        </span>
        . Through hands-on projects and advanced concepts, I gained the skills
        to build robust and scalable React applications, aligning with industry
        standards.
      </p>
    ),
  },
  {
    id: 2,
    title: "Mastering Data Structures & Algorithms using C and C++",
    image: certificate2,
    description: (
      <p className="dark:text-white">
        Successfully completed the{" "}
        <span className="text-rose-600">
          Mastering Data Structures & Algorithms using C and C++
        </span>{" "}
        course instructed by{" "}
        <span className="text-rose-600">Abdul Bari on Udemy</span>. This course
        provided an in-depth understanding of essential data structures and
        algorithms, including{" "}
        <span className="text-rose-600">
          arrays, linked lists, stacks, queues, trees, graphs, sorting, and
          searching algorithms
        </span>
        . Through comprehensive lectures and hands-on coding exercises, I
        developed the skills necessary to implement efficient algorithms and
        data structures in C and C++, enabling me to tackle complex
        computational problems effectively.
      </p>
    ),
  },
  {
    id: 3,
    title:
      "Namaste Node.js - Unlocking the Power of Scalable Backend Development",
    image: certificate3,
    description: (
      <p className="dark:text-white">
        Successfully completed the comprehensive{" "}
        <span className="text-rose-600">Namaste Node.js </span>course by
        <span className="text-rose-600">Akshay Saini on NamasteDev</span>. This
        course provided an in-depth understanding of
        <span className="text-rose-600">
          Node.js, MongoDB, and Express.js for API development
        </span>
        . Through practical projects, I gained hands-on experience in building
        scalable backend applications while exploring advanced topics like{" "}
        <span className="text-rose-600">libuv, event loop, thread pool</span>,
        and much more. The course equipped me with the skills to develop robust
        server-side solutions aligned with modern industry standards.
      </p>
    ),
  },
];
