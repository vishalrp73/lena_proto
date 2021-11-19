import './pageCSS/quote.css';

const Quote = () => {
    return (
        <div className = 'quote-wrapper'>

            <div className = 'content-wrap'>
                <div className = 'quick-panel'>

                        <div className = 'quick-title-bar'>
                            <h1 className = 'quote-title'>Car insurance quick quote</h1>
                            <input type = 'button' value = 'Retrieve your quote'
                                className = 'retrieve-quote_btn' />
                        </div>
                        

                        <h3 className = 'quote-subtitle'>Tell us about your car</h3>

                        <div className = 'quick-input'>

                            <div className = 'quick-box'>
                                <h4 className = 'quick-text'>Car registration number</h4>
                                <input type = 'text' className = 'quick-user-input'
                                    placeholder = 'e.g. ABC123' />
                            </div>

                            <div className = 'quick-box'>
                                <h4 className = 'quick-text'>Personal / Business use</h4>
                                <div className = 'personal-business'>
                                    <input type = 'button' value = 'Personal' className = 'pers_bus-btn' />
                                    <input type = 'button' value = 'Business' className = 'pers_bus-btn' />
                                </div>
                            </div>

                            <div className = 'quick-box'>
                                <h4 className = 'quick-text'>Your address</h4>
                                <input type = 'text' className = 'quick-user-input'
                                    placeholder = 'e.g. 123 Sesame Street' />
                            </div>

                            <div className = 'quick-box'>
                                <h4 className = 'quick-text'>Policy start date</h4>
                                <input type = 'text' className = 'quick-user-input'
                                    placeholder = '10 November 2021' />
                            </div>

                        </div>

                    </div>
            </div>

            <div className = 'content-wrap'>
                
                <div className = 'driver-panel'>
                    <h3 className = 'quote-subtitle'>Driver details</h3>
                    <h5 className = 'quote-sub-sub'>Main driver and owner of the car (you)</h5>
                </div>

                <div className = 'temp-wrap'>
                    <div className = 'details-wrapper'>

                        <div className = 'detail-box'>
                            <h5 className = 'detail-text'>Date of birth</h5>
                            <div className = 'detail-input-box'>
                                <input type = 'text' className = 'dob-input' placeholder = 'dd' />
                                <input type = 'text' className = 'dob-input' placeholder = 'mm' />
                                <input type = 'text' className = 'dob-input' placeholder = 'yyyy' />
                            </div>
                        </div>

                        <div className = 'detail-box'>
                            <h5 className = 'detail-text'>Are you</h5>
                            <div className = 'detail-input-box'>
                                <input type = 'text' className = 'gender-input' placeholder = 'Female' />
                                <input type = 'text' className = 'gender-input' placeholder = 'Male' />
                            </div>
                        </div>

                        <div className = 'detail-box'>
                            <h5 className = 'detail-text'>What licence do you hold</h5>
                            <div className = 'detail-input-box'>
                                <input type = 'text' className = 'select-input' placeholder = 'Please Select' />
                            </div>
                        </div>

                        <div className = 'detail-box'>
                            <h5 className = 'detail-text'>How many years have you had your drivers licence</h5>
                            <div className = 'detail-input-box'>
                                <input type = 'text' className = 'select-input' placeholder = 'Please Select' />
                            </div>
                        </div>

                    </div>

                    <input type = 'button' className = 'send_quote-btn' value = 'Send my quote to email' />
                </div>

                <input type = 'button' className = 'add-driver-btn' value = '+ Add another driver' />

                <div className = 'driver-core-btns'>
                    <input type = 'button' id = 'get-quote-btn' value = 'Get quote' className = 'driver-core-btn' />
                    <input type = 'button' id = 'pay-btn' value = 'Pay now' className = 'driver-core-btn' />
                </div>
                
            </div>


            <div className = 'content-wrap'>

                <div className = 'why-wrapper'>
                    <h2 className = 'why-turners-title'>Why choose Turners?</h2>
                    <p className = 'why-sub'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>

                    <div className = 'why-img' />
                </div>

            </div>
                



        </div>
    )
}

export default Quote;