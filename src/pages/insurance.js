import './pageCSS/insurance.css';
import tick from '../img/tick.png';
import graph from '../img/compare_graph.png';

import { Link } from 'react-router-dom';

const Insurance = () => {
    return (
        <div className = 'insurance-wrapper'>

            <div className = 'insurance-panel_1'>

                <div className = 'ins_panel-top'>
                    <h1 className = 'ins_panel-title_1'>
                        Award-winning insurer for your car insurance
                    </h1>

                    <Link to = '/quote.js' >
                        <input type = 'button' value = 'Get a free quote'
                            className = 'ins-quote_btn' />
                    </Link>
                </div>

                <div className = 'ins_panel-bot'>

                    <div className = 'ins_pol-wrap'>
                        <div className = 'ins_pol-img' />
                        <h5 className = 'ins_pol-title'>Comprehensive</h5>
                        <p className = 'ins_pol-text'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                        </p>
                        <p className = 'ins_lm-text'>Learn more</p>
                    </div>

                    <div className = 'ins_pol-wrap'>
                        <div className = 'ins_pol-img' />
                        <h5 className = 'ins_pol-title'>Third Party, Fire &amp; Theft</h5>
                        <p className = 'ins_pol-text'>
                            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                        </p>
                        <p className = 'ins_lm-text'>Learn more</p>
                    </div>

                    <div className = 'ins_pol-wrap'>
                        <div className = 'ins_pol-img' />
                        <h5 className = 'ins_pol-title'>Third Party</h5>
                        <p className = 'ins_pol-text'>
                            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.
                        </p>
                        <p className = 'ins_lm-text'>Learn more</p>
                    </div>

                </div>

                <input type = 'button' value = 'Compare insurance cover'
                    className = 'ins_comp-btn' id = 'panel_1_quote-btn' />

                

            </div>


            <div className = 'insurance-panel_2'>

                <h2 className = 'ins_panel-title'>Enjoy more benefits with Turners</h2>
                    
                    <div className = 'bene'>
                        <div className = 'ins_panel-2-left'>
                            
                            <div className = 'benefit-box'>
                                <img src = { tick } className = 'tick-img' />
                                <div className = 'benefit-content'>
                                    <h5 className = 'benefit-title'>Choose Your Excess</h5>
                                    <p className = 'benefit-text'>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                                    </p>
                                </div>
                            </div>

                            <div className = 'benefit-box'>
                                <img src = { tick } className = 'tick-img' />
                                <div className = 'benefit-content'>
                                    <h5 className = 'benefit-title'>No Claims Bonus Protection</h5>
                                    <p className = 'benefit-text'>
                                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <div className = 'benefit-box'>
                                <img src = { tick } className = 'tick-img' />
                                <div className = 'benefit-content'>
                                    <h5 className = 'benefit-title'>Child car seat cover</h5>
                                    <p className = 'benefit-text'>
                                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className = 'ins_panel-2-right'>

                            <div className = 'benefit-box'>
                                <img src = { tick } className = 'tick-img' />
                                <div className = 'benefit-content'>
                                    <h5 className = 'benefit-title'>Agreed Value</h5>
                                    <p className = 'benefit-text'>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                                    </p>
                                </div>
                            </div>

                            <div className = 'benefit-box'>
                                <img src = { tick } className = 'tick-img' />
                                <div className = 'benefit-content'>
                                    <h5 className = 'benefit-title'>Cover For Drivers Over 25</h5>
                                    <p className = 'benefit-text'>
                                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <div className = 'benefit-box'>
                                <img src = { tick } className = 'tick-img' />
                                <div className = 'benefit-content'>
                                    <h5 className = 'benefit-title'>Optional Extras</h5>
                                    <p className = 'benefit-text'>
                                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                <div className = 'panel_2_btns'>

                    <Link to = '/quote.js'>
                        <input type = 'button' className = 'ins-quote_btn'
                            value = 'Get a free quote' id = 'panel_2_quote-btn'/>
                    </Link>
                    
                        <input type = 'button' value = 'Retrieve your quote'
                            className = 'retrieve_quote-btn' />
                    
                </div>
                

            </div>



            <div className = 'insurance-panel_3'>

                <h2 className = 'ins_panel-title'>Compare car insurance cover</h2>

                <img className = 'compare_graph' src = { graph } />
                
                <input type = 'button' className = 'ins_faq-btn'
                    value = 'FAQ' />
            </div>


        </div>

    )
}

export default Insurance;