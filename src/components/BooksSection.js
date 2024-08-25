
import { Bookitems, items } from "../utils/BooksData";
import BookCard from "./BookCard";


const BooksSection=()=>{
    return(
        <div className="mb-36 mt-16">
            <h1 className="flex justify-center text-2xl font-sans m-10 font-medium "> Exploring Programming and Tech Innovations</h1>
           
            <div className="">
      {Bookitems.map((item) => (
        <BookCard key={item.id} image={item.image} description={item.description} />
       
      ))}
    </div>
            
        </div>
    );
};

export default BooksSection;