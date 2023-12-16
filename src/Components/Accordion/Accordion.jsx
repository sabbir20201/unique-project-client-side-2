

const Accordion = () => {
    return (
        <div>
                    <div className="my-10">
               <h1 className="text-center font-bold text-4xl mt-10">FAQ</h1>
               <p className="text-center font-semibold text-xl my-3">If you have any type confusion, you can ask </p>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What types of tea do you offer?
                </div>
                <div className="collapse-content">
                    <p> Explore our diverse collection, from classic blends to unique artisanal creations, curated to satisfy every teas palate.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do I place an order?
                </div>
                <div className="collapse-content">
                    <p>Browse, select, and checkout seamlessly. Add your favorite teas to the cart, provide shipping details, and enjoy a swift, secure payment process.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Are your teas ethically sourced?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We prioritize ethical sourcing, partnering with tea estates and suppliers committed to fair, sustainable practices.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do I brew the perfect cup of tea?
                </div>
                <div className="collapse-content">
                    <p>Follow our brewing guide for expert tips on steeping times and temperatures. Elevate your tea experience with our recommended brewing techniques..</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Accordion;