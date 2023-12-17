

const AboutUs = () => {
    return (
        <div className="bg-[#00204a] text-white" >
            <div className="py-10">
            <h1 className="text-[#007bff] text-center font-bold text-4xl">About <span className="text-[#00bbf0]">Us</span> </h1>
            <p className="text-center font-semibold text-lg my-4">At the heart of our mission lies a commitment to revolutionize the digital landscape</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <img src="https://i.ibb.co/nC1J6Bb/about-img.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-normal my-3">We Are Finexo</h1>
                        <p>At the heart of our mission lies a commitment to revolutionize the digital landscape. With unwavering dedication, we strive to empower users through cutting-edge technologies, fostering financial inclusion, and reshaping the future of decentralized finance. Join us on this transformative journey.
                            <br />
                            <br />
                            we strive to empower users through cutting-edge technologies, fostering financial inclusion, and reshaping the future of decentralized finance. Join us on this transformative journey
                        </p>
                        <button className="mt-4 btn bg-sky-500">Read more</button>
                    </div>
              </div>
            </div>
          
        </div>
    );
};

export default AboutUs;