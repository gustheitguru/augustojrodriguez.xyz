import React, {Component} from 'react';

class ResumeItem extends Component {
    render () {
        return (
            <div className="resume-item">
                <h4>{this.props.jobTitle}</h4>
                <h5>{this.props.date}</h5>
                <p><em>{this.props.location}</em></p>
                <ul>
                    <li>{this.props.description}</li>
                </ul>
            </div>
        )
    }
}

export default ResumeItem;