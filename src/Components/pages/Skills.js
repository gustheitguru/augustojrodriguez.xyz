import React, {Component} from 'react';

class Skills extends Component {
    render () {
        return (
            <div>
                <section id="skills" className="skills section-bg">
                    <div className="container">

                        <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div>
                            <h5>Top Skills</h5>
                        </div>
                        <div className="row skills-content">
                            
                            <div className="col-lg-6" data-aos="fade-up">

                                <div className="progress">
                                <span className="skill">PowerShell <i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">Node.js <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">JavaScript <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                                <div className="progress">
                                <span className="skill">Linux <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">Windows <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">Wiring <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                            </div>                            
                        </div>
                        <div>
                            <h5>Other Skills</h5>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
export default Skills;