import './footer.css';

const Footer = () => {

    const car_array = [
        'How to Buy',
        'Sell Your Car',
        'Finance & Insurance',
        'Auctions & Events',
        'Buyer & Seller Fees',
        'Vehicle Sale Price History Tool',
        'Shipping Costs'
    ]

    const fin_ins_array = [
        'Finance Homepage',
        'Car & Personal Finance',
        'Loan Calculator',
        'Car Insurance',
        'Mechanical Breakdown Insurance',
        'General Insurances',
        'Trucks Finance',
        'Financial Information'
    ]

    const search_array = [
        'Cars',
        'Trucks & Machinery',
        'Damaged & End of Life Cars',
        'Boats & Marine',
        'Motorcycles & Scooters',
        'General Goods',
        'Buses, Caravans & Motorhomes',
        'Turners Auctions Schedule'
    ]

    const about_array = [
        'Overview',
        'Turners Careers',
        'Terms and Conditions',
        'Privacy Policy',
        'Turners Live',
        'The Good Oil Blog',
        'Email Alerts',
        'Contact Us'
    ]

    const contactModule = [
        { title: 'Branch Details', img: 'bd' },
        { title: 'Facebook', img: 'fb' },
        { title: 'Newsletter', img: 'news' },
        { title: 'Email Alerts', img: 'ea' },
        { title: 'Instagram', img: 'ig' }
    ]


    return (
        <div className = 'footer-wrapper'>

            <div className = 'footer-top'>

                <div className = 'footer-content-box'>
                    <h5 className = 'footer-title'>Cars</h5>
                        { car_array.map(item => (
                                <p className = 'footer-text'>{ item }</p>
                            ))}
                </div>

                <div className = 'footer-content-box'>
                    <h5 className = 'footer-title'>Finance &amp; Insurance</h5>
                        { fin_ins_array.map(item => (
                                <p className = 'footer-text'>{ item }</p>
                            ))}
                </div>

                <div className = 'footer-content-box'>
                    <h5 className = 'footer-title'>Search for</h5>
                        { search_array.map(item => (
                                <p className = 'footer-text'>{ item }</p>
                            ))}
                </div>

                <div className = 'footer-content-box'>
                    <h5 className = 'footer-title'>About Us</h5>
                        { about_array.map(item => (
                                <p className = 'footer-text'>{ item }</p>
                            ))}
                </div>

            </div>

            <div className = 'footer-bottom'>

                <p className = 'copy-text'>&copy; 2021 Turners</p>

                <input type = 'button' className = 'faq-btn-footer'
                    value = 'FAQ' />
                
                <div className = 'contact-module'>

                    <div className = 'contact-pair'>
                        <div className = 'contact-img' />
                        <p className = 'contact-title'>Branch Details</p>
                    </div>

                    <div className = 'contact-pair'>
                        <div className = 'contact-img' />
                        <p className = 'contact-title'>Facebook</p>
                    </div>

                    <div className = 'contact-pair'>
                        <div className = 'contact-img' />
                        <p className = 'contact-title'>Newsletter</p>
                    </div>

                    <div className = 'contact-pair'>
                        <div className = 'contact-img' />
                        <p className = 'contact-title'>Email Alerts</p>
                    </div>

                    <div className = 'contact-pair'>
                        <div className = 'contact-img' />
                        <p className = 'contact-title'>Instagram</p>
                    </div>
                    
                </div>

            </div>


        </div>
    )
}

export default Footer;