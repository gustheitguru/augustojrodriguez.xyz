import React, {Component} from 'react';

class Hero extends Component {
    render () {
        return (
           <div>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Augusto J. Rodriguez</h1>
                    <p>I'm <span className="typed" data-typed-items="Engineer, Developer, Freelancer, Home Automator"></span></p>
                </div>
            </section>
           </div>  
        );
    }
}

export default Hero;