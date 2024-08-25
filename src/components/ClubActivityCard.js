import ImageCarousel from "./ImageCarousel";

const ClubActivityCard = ({title,description,images}) =>{
    return (
        <div className="activity-card flex flex-col md:flex-row mb-6 shadow-lg p-6 rounded-lg">
          <div className="carousel-container w-full md:w-1/2">
            <ImageCarousel images={images} />
          </div>
          <div className="content w-full md:w-1/2 md:pl-6 pt-4 md:pt-0 mt-6">
            <h3 className="text-2xl font-semibold mb-6">{title}</h3>
           {description}
          </div>
        </div>
      );
    
};

export default ClubActivityCard;