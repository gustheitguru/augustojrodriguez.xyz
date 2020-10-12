import { render } from '@testing-library/react';
import React, {Component} from 'react';

class ServiceItem extends Component {
    render () {
        return (
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon"><i className={`${this.props.icon}`}></i></div>
                <h4 className="title">{this.props.title}</h4>
                <p className="description">{this.props.description}</p>
            </div>
        )
    }
}

export default ServiceItem;