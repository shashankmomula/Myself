import CertificateCard from "./CertificateCard";
import { Certificates } from "../utils/CertificationData";
const CertificateSection = () =>{
    return(
        <div className="mb-36">
            <h1 className="flex justify-center text-2xl font-sans m-10 font-medium">Certifications</h1>
            {Certificates.map((certificate)=>(
                <CertificateCard key={certificate.id} title={certificate.title} description={certificate.description}
                image={certificate.image}/>
            ))}
            {/* <div className="border-t-2 border-b-2 border-b-gray-700 shadow-lg my-8"></div> */}



        </div>
        
    );
};

export default CertificateSection;