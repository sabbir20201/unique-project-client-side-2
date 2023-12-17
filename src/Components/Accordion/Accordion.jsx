

const Accordion = () => {
    return (
        <div>
                    <div className="my-10">
               <h1 className="text-center font-bold text-4xl mt-10"></h1>
               <h1 className="text-[#007bff] text-center font-bold text-4xl my-12">FAQ<span className="text-[#00bbf0]"></span> </h1>
               <p className="text-center font-semibold text-xl my-3">If you have any type confusion, you can ask </p>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                Is the Platform Secure?
                </div>
                <div className="collapse-content">
                    <p> Yes, we prioritize security. Our platform employs state-of-the-art encryption and security measures to protect your assets.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What Cryptocurrencies are Supported?
                </div>
                <div className="collapse-content">
                    <p>We support a variety of cryptocurrencies. Check our supported coins page for the latest list..</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I Transfer Cryptocurrency to External Wallets?
                </div>
                <div className="collapse-content">
                    <p>Absolutely. Easily transfer your cryptocurrency to external wallets using the Withdraw option..</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What Fees are Associated with Transactions?
                </div>
                <div className="collapse-content">
                    <p>Transaction fees vary. Refer to our fee schedule for details on buying, selling, and transferring cryptocurrencies</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Accordion;