import AboutUs from "../../Components/AboutUs/AboutUs";
import Accordion from "../../Components/Accordion/Accordion";
import Banner from "../../Components/Banner/Banner";
import Testimonials from "../../Components/Testimonials/Testimonials";



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
           <Accordion></Accordion>
        </div>
    );
};

export default Home;