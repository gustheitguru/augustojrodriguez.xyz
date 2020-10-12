import React, {Component} from 'react';
import PortfolioItem from '../Common/PortfolioItem';

const portfolioItem = [
    {imageName:"portfolio-1.jpg", title:"JavaScript Calculator", link:"http://jscalcalculator.gustheitguru.com/"},
    {imageName:"portfolio-2.jpg", title:"React Calculator", link:"http://reactcal.gustheitguru.com/",},
    {imageName:"portfolio-3.jpg", title:"Exercise tracker", link:"https://fcc-exercis3-trac.glitch.me/",},
    {imageName:"portfolio-4.jpg", title:"API Header Micro Service", link:"https://longhaired-checker-shad.glitch.me/",},
    {imageName:"portfolio-5.jpg", title:"Learning AWS is Fun", link:"http://www.learningawsif.fun",},
    {imageName:"portfolio-6.jpg", title:"Stock Checker Node and HandleBarJS", link:"http://schb.gustheitguru.com",},
    {imageName:"portfolio-7.jpg", title:"Card 1", link:"http://www.google.com",},
    {imageName:"portfolio-8.jpg", title:"Card 2", link:"http://www.google.com",},
    {imageName:"portfolio-9.jpg", title:"Web 3", link:"http://www.google.com",},
    
]

class Portfolio extends Component {
    render () {
        return (

        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                <h2>Portfolio</h2>
                <p>Here is a collections of different projects I have worked on. 
                    Using JavaScript, HandleBarJS, D3, React, NodeJS and images of Home wiring.</p>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    {portfolioItem.map((portfolioItem, index) =>{
                        return <PortfolioItem {...portfolioItem} key={index} />
                    })}
                </div>
            </div>
        </section>
        )
    }
}
export default Portfolio;