import { useEffect, useState } from "react";
import OurServiceCard from "./OurServiceCard";


const OurSurvices = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://unique-project-server-side-2.vercel.app/service")
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div className="my-10">
         
            <h1 className="text-[#007bff] text-center font-bold text-4xl my-4">Our <span className="text-[#00bbf0]">Services</span> </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data?.map(item => <OurServiceCard key={item._id} item={item}></OurServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurSurvices;