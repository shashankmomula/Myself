const BlogCard = ({image,title,description,url}) =>{

    const handleClick = () =>{
        window.open(url, '_blank');
    }
    return(
    
        <div className="m-7 p-2 w-[350px] h-[auto] rounded-lg bg-gray-100 cursor-pointer" onClick={handleClick}>
          <div class="relative group p-4 hover:bg-slate-300 hover:opacity-85 text-black transition-colors duration-300 flex items-center justify-center">
  <p class="absolute opacity-0 group-hover:opacity-100 duration-300 font-bold text-2xl">Read Article</p>
  <img  alt="" class="w-full h-auto" />
</div>

            <div>
                <h1 className="flex justify-center text-2xl font-sans m-2 mb-6 font-medium">{title}</h1>
            </div>
            <div>
                {description}
            </div>
            

        </div>
       
    );
};

export default BlogCard;