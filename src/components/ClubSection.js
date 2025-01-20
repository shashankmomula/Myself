import Activities from "../utils/ActivityData";
import ClubActivityCard from "./ClubActivityCard";

const ClubSection = () =>{
   
    return (
        <div className="club-activities ">
             <h1 className="flex justify-center text-2xl font-sans m-10 font-medium">Club Activities</h1>

          {Activities.map(activity => (
            <ClubActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              images={activity.images}
            />
          ))}
        </div>
      );
};

export default ClubSection;