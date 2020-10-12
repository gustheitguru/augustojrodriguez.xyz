import React, {Component} from 'react';

class SkillItem extends Component {
    render () {
        return (
            <div className="progress">
                <span className="skill">{this.props.skill}<i className="val">{this.props.percent}</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:`${this.props.percent}`}} aria-valuenow={`${this.props.avn}`} aria-valuemin={`${this.props.avm}`} aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}

export default SkillItem;