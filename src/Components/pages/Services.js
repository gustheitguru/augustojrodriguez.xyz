import React, {Component} from 'react';
import ServiceItem from '../Common/ServiceItem';

const serviceItem = [
    {title:"System Administrator", icon:"icofont-computer", description:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},
    {title:"System Engineer", icon:"icofont-chart-bar-graph", description:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"},
    {title:"Cloud Adminstrator", icon:"icofont-earth", description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"},
    {title:"Business Analyst", icon:"icofont-image", description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
    {title:"Project Management", icon:"icofont-settings", description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"},
    {title:"User Support", icon:"icofont-tasks-alt", description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"},
];

class Services extends Component {
    render () {
        return (
            <div>
                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                        <h2>Services</h2>
                        <p>I have an eclectic background in IT. Through out my years in 
                            IT I have worked under many different titles and focused on 
                            a wide range of technologies.</p>
                        </div>

                        <div className="row">
                        {serviceItem.map((serviceItem, index) => {
                            return <ServiceItem {...serviceItem} key={index} />
                        })}

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
export default Services;