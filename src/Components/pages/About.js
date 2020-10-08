import React, {Component} from 'react';

class About extends Component {
    render () {
        return (
            <div>
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                        <h2>About</h2>
                        <p>They call me Gus and I am happy, adventuros father and husband. I have big dreams and a deep understanding of the path I have traveled to this point. I am </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>System Engineer &amp; Administrator</h3>
                                <p className="font-italic">
                                I have worked in IT for over 15 years in a verity of different roles, working with a wide range of technology from 
                                windows to the cloud and baremetal to the cloud. Which has helped me refine my skills to be an asset to any type of project.

                                </p>
                                <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 5 Nov 1981</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.augustojrodriguez.xyz</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> 808-631-2486</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Saraland, AL</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 38</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor's in Electronic Engineering</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> info@augustojrodriguez.xyz</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                    </ul>
                                </div>
                                </div>
                                <p>
                                Over my career I have focused on managing and monitoring systems and infrastructure. Installing, configuring, maintaining and 
                                testing different operating systems, software application and ensuring high level availability infrastructure for clients.
                                </p>
                            </div>
                            </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default About;