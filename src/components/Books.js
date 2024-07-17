
import { Bookitems, items } from "../utils/BooksData";
import BookCard from "./BookCard";

const Books=()=>{
    return(
        <div>
            <h1 className="flex justify-center text-2xl font-sans m-10 font-medium "> Exploring Programming and Tech Innovations</h1>
           
            <div className="border-t-2 border-gray-100 my-2">
      {Bookitems.map((item) => (
        <BookCard key={item.id} image={item.image} description={item.description} />
      ))}
    </div>
            
        </div>
    );
};

export default Books;