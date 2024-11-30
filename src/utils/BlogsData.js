import Blog1 from "../read_redux.png";
import Blog2 from "../article1.png";
import Blog3 from "../Graph_time.jpg";
export const Blogitems = [
  {
    id: 1,
    image: Blog1,
    title:
      "Unlocking React's Secret: Mastering Reconciliation and the Diff algorithm",
    description: (
      <p>
        Unlock the <span className="text-blue-800">hidden power of React</span>{" "}
        by mastering reconciliation and the Diff algorithm. Discover how React
        efficiently updates the DOM, ensuring your apps run faster and smoother.
      </p>
    ),
    url: "https://namastedev.com/blog/unlocking-reacts-secret-mastering-reconciliation-and-the-diff-algorithm/",
  },
  {
    id: 2,
    image: Blog2,
    title:
      "From Setup to Mastery: Dive into Efficient State Management with Redux Toolkit in React",
    description: (
      <p>
        Transform your React projects with Redux Toolkit. This guide takes you
        from <span className="text-blue-800">setup to expert-level</span> state
        management, simplifying complex workflows with clarity and precision.
      </p>
    ),
    url: "https://namastedev.com/blog/from-setup-to-mastery-dive-into-efficient-state-management-with-redux-toolkit-in-react/",
  },
  {
    id: 3,
    image: Blog3,
    title:
      "Master Time and Space Complexity: Optimize Your Algorithms Effectively",
    description: (
      <p>
        Understand time and space complexity with clear explanations and
        real-world examples. This blog simplifies key concepts,{" "}
        <span className="text-blue-800">clears common misconceptions</span>, and
        helps you{" "}
        <span className="text-blue-800">optimize algorithms effectively</span>.
        Perfect for coding interviews and problem-solving!
      </p>
    ),
    url: "https://namastedev.com/blog/master-time-and-space-complexity-optimize-your-algorithms-effectively/",
  },
];
