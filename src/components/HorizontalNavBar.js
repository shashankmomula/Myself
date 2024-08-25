// HorizontalNavBar.js
const HorizontalNavBar = () => {
    return (
      <div className="flex justify-around py-4 bg-gray-100 border-b border-gray-300">
        <a href="#books" className="text-lg font-medium text-blue-600 hover:underline">Book Publications</a>
        <a href="#blogs" className="text-lg font-medium text-blue-600 hover:underline">Blog Articles</a>
        <a href="#activities" className="text-lg font-medium text-blue-600 hover:underline">Club Activities</a>
        <a href="#certifications" className="text-lg font-medium text-blue-600 hover:underline">Certifications</a>
      </div>
    );
  };
  
  export default HorizontalNavBar;
  