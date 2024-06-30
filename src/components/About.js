import image from "../IMG_4449.jpg";

const About=()=> {
    return(
        <div className="flex justify-between">
        <div className="w-1/2 mt-10">
            <img src={image} className="h-96 w-64 rounded-full ml-20 border border-black-500 "/>
            <div className="flex">
                <a href="https://www.linkedin.com/in/momula-shashank-92a2a925a/" target="_blank">
                    <img src="https://static.vecteezy.com/system/resources/previews/021/460/490/original/linkedin-logo-free-download-free-png.png" className="w-20 h-20 ml-24 cursor-pointer"/>
                </a>
                <a href="https://github.com/shashankmomula/" target="_blank">
                    <img src="https://th.bing.com/th/id/OIP.zSfmgGOW75N4vee0s7WEcAAAAA?w=256&h=256&rs=1&pid=ImgDetMain" className="w-10 h-10 mt-5 cursor-pointer"/>
                </a>
                <a href="mailto:shashankmomula11@gmail.com" target="_black">
                    <img src="https://th.bing.com/th/id/OIP.cpNLmhSDiJhWWat12KjRIwAAAA?rs=1&pid=ImgDetMain" className="w-14 h-14 mt-3 ml-3 cursor-pointer"/>    
                </a>
           
            </div>
          
        </div>
       
        <div className="w-1/2">
        <h1 className="text-4xl font-serif flex justify-center m-10 ">About me</h1>
           <p className="bg-blue-100 text-xl font-sans p-5 mr-4 bg-opacity-25 text-justify">
           I am <span className="text-gray-800 font-bold">M. Shashank</span>, a 19-year-old Bachelor of Technology graduate in Artificial Intelligence and Data 
           Science from St. Martin's Engineering College, with a GPA of 9.18. 
           I authored "Explore Your C Programming," a book covering both foundational 
           and advanced concepts of the C programming language. Passionate about teaching, 
           I actively educate peers and juniors in various programming languages and development practices.
            Additionally, I am a dedicated crew member of the COHO Coding Club,
             where I teach web development and coding. My interests lie in exploring topics in depth and continuously learning and teaching in the field of programming.
           </p>
           
        </div>
        </div>
    );
};

export default About;