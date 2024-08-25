// BackgroundNav.js
const BackgroundNav = () => {
    return (
      <div className="flex space-x-4 bg-slate-100 m-3 p-4 rounded-lg">
        <a href="#books" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center">Book Publications</a>
        <a href="#blogs" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center">Blog Articles</a>
        <a href="#activities" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center">Club Activities</a>
        <a href="#certifications" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center">Certifications</a>
      </div>
    );
  };
  
  export default BackgroundNav;
  