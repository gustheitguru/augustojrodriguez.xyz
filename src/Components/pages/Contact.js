import React, {Component} from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
        }

    }

    render () {
        return (
            <section id="contact" className="contact section-bg">
                <div className="container">
        
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>If you want to know more please contact me. I am open to hearing about any type of project or role you might have in mind. </p>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <h4>Location:</h4>
                                <p>Saraland, AL, 36571</p>
                            </div>

                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@augustojrodriguez.xyz</p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4>Call:</h4>
                                <p>808-631-2468</p>
                            </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206196.54921505065!2d-88.21097081512545!3d30.740591747412484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a52e16f3a8033%3A0xbdeea055de9fdc0d!2sSaraland%2C%20AL%2C%20USA!5e0!3m2!1sen!2sbg!4v1601787696540!5m2!1sen!2sbg" width="100%" height="290px" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>
                            
                                
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control" 
                                    id="name" 
                                    data-rule="minlen:4" 
                                    data-msg="Please enter at least 4 chars" 
                                    value={this.state.name}
                                    onChange={e => this.setState({name: e.target.value})}
                                />
                                <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="name">Your Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    id="email" 
                                    data-rule="email" 
                                    data-msg="Please enter a valid email" 
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                />
                                <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone Number</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="Phone" 
                                    id="Phone" 
                                    data-rule="minlen:4" 
                                    data-msg="Please enter Phone Number" 
                                    value={this.state.phone}
                                    onChnage={e => this.setState({phone: e.target.value})}
                                />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea 
                                    className="form-control" 
                                    name="message" 
                                    rows="10" 
                                    data-rule="required" 
                                    data-msg="Please write something for us"
                                    value={this.state.message}
                                    onChange={e => this.setState({message: e.target.value})}
                                ></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default Contact;