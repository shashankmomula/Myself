import { GITHUB, LINKEDIN, MAIL } from "../utils/Constants";


const Contact= () => {
  return (
    <div className="p-8">
        <div >
            <div className="flex justify-center">
            <h2 className="text-3xl font-bold  font-sans mr-25 flex justify-center">Get in Touch</h2>
            </div>
        
        <div className="flex justify-end">
                <a href="https://www.linkedin.com/in/momula-shashank-92a2a925a/" target="_blank">
                    <img src={LINKEDIN} className="w-12 h-12  mt-4 mr-3 cursor-pointer"/>
                </a>
                <a href="https://github.com/shashankmomula/" target="_blank">
                    <img src={GITHUB} className="w-10 h-10 mt-5 cursor-pointer"/>
                </a>
                <a href="mailto:shashankmomula11@gmail.com" target="_black">
                    <img src={MAIL} className="w-14 h-14 mt-3 ml-3 cursor-pointer"/>    
                </a>
           
            </div>
          
        </div>
      
      {/* <div className="border-t-4 border-gray-300 my-4"></div> */}
      <form className="max-w-lg mx-auto p-6 bg-slate-100 rounded shadow-md">
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 "
          />
        </div>
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold mb-2" >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 "
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 "
            rows="5"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
      {/* <div className="border-b-4 border-gray-300 my-4"></div> */}
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>© 2024 Shashank. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
