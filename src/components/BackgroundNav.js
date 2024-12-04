// BackgroundNav.js
const BackgroundNav = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 bg-slate-100 m-3 p-4 rounded-lg dark:bg-slate-900">
      <a href="#books" aria-label="Book Publications" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center dark:text-black">Book Publications</a>
      <a href="#blogs" aria-label="Blog Articles" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center dark:text-black">Blog Articles</a>
      <a href="#activities" aria-label="Club Activities" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center dark:text-black">Club Activities</a>
      <a href="#certifications" aria-label="Certifications" className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 flex-1 text-center dark:text-black">Certifications</a>
    </div>
  );
};

export default BackgroundNav;
