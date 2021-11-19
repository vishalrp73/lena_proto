import './pageCSS/home.css';
import star from '../img/star.png';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = 'home-wrapper'>
            
            <div className = 'banner-wrap'>
                <Link to = '/quote.js' className = 'quote-link'>
                    <input type = 'button' value = 'Get a free quote'
                        className = 'quote-btn' />
                </Link>
            </div>

            <div className = 'qm-wrapper'>
                <div className = 'qm-img-wrap'>
                    <input type = 'button' className = 'qm-btn' value = 'Buy car' />
                    <p className = 'qm-text'>Buy a car with us</p>
                </div>

                <div className = 'qm-img-wrap'>
                    <input type = 'button' className = 'qm-btn' value = 'Sell your car' />
                    <p className = 'qm-text'>Sell your car or Trade in</p>
                </div>

                <div className = 'qm-img-wrap'>
                    <input type = 'button' className = 'qm-btn' value = 'Insurance' />
                    <p className = 'qm-text'>Learn more about Auto Insurance</p>
                </div>
            </div>


            <div className = 'history-wrapper'>
                <div className = 'history-left_panel'>
                    <h2 className = 'home-panel_title'>50 years in business</h2>
                    <p className = 'home-panel_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                    
                    <div className = 'history-img_panels'>
                        <div className = 'home-history_img' />
                        <div className = 'home-history_img' />
                        <div className = 'home-history_img' />
                        <div className = 'home-history_img' />
                        <div className = 'home-history_img' />
                        <div className = 'home-history_img' />
                    </div>
                </div>

                <div className = 'history-right_panel'>
                    <div className = 'home-history_img_lrg' />
                    <h5 className = 'home-history_sub'>Sed ut perspiciatis unde omnis</h5>
                    <p className = 'home-history_text'>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </p>
                </div>
            </div>


            <div className = 'testimonial-wrapper'>

                <div className = 'left-testi'>
                    <h2 className = 'home-panel_title'>Testimonials</h2>

                    <div className = 'stars-wrap' >
                        <img src = { star } className = 'review-stars' />
                        <img src = { star } className = 'review-stars' />
                        <img src = { star } className = 'review-stars' />
                        <img src = { star } className = 'review-stars' />
                        <img src = { star } className = 'review-stars' />
                    </div>

                    <p className = 'home-panel_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>

                    <div className = 'testi-person'>
                        <div className = 'testi-user-img' />
                        <p className = 'testi-user_name'>Bobby Bouche</p>
                    </div>
                </div>

                <div className = 'right-testi'>
                    <div className = 'testi-img'/>
                </div>

            </div>



        </div>
    )
}

export default Home;