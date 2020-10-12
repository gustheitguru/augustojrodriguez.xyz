import React, {Component} from 'react';
import Portfolio from '../pages/Portfolio';

class PortfolioItem extends Component {
    render () {
        return (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={`assets/img/portfolio/${this.props.imageName}`} className="img-fluid" alt="" />
                    <div className="portfolio-links">
                        <a href={`assets/img/portfolio/${this.props.imageName}`} data-gall="portfolioGallery" className="venobox" title={`${this.props.title}`}><i className="bx bx-plus"></i></a>
                        <a href={`${this.props.link}`} target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem;