import React, {Component} from 'react';
import ResumeItem from '../Common/ResumeItem';

const resumeItem = [
    {jobTitle:"IT Director", date:"2020 - Present", location:"Grand Bay Convalescent Home and Rehabilitation, Grand Bay, AL", description:"My main focuses in bring the the IT infrastructor inline with being HIPPA complient. Utilising a wide range of tools for day to day end user support to disater recover."},
    {jobTitle:"Fitness Instructor", date:"2018 - 2020", location:"YMCA, Mobile, AL", description:"Developed focused classes for students ranging in Yago, Hiit and tabbata."},
    {jobTitle:"Intagrator", date:"2019 - 2019", location:"TSI Alarms and Audio, Mobile, AL", description:"Deployed and miantained access control systems and alarm systems."},
    {jobTitle:"Stay at Home Dad", date:"2017 - 2018", location:"Wiakaloa, HI", description:"Focused on being bring raising my son and house management."},
    {jobTitle:"Instructor", date:"2018-2018", location:"Big Island Play Space, Wiakaloa, HI", description:"Designed class for different age groups from early development and pay time to development driven classes for pre-teens and teenages. Using platforms like Aurdino and RaspberrPI with Scratch."},
    {jobTitle:"Intagrator", date:"2017-2018", location:"Logic Living, Wiakaloa, HI", description:"As a project lead I worked on pre-wiring and retro fit wiring and programing of smart homes. with systems like Savanat, Lutron, Vantage, Crestron and Control4."},
    {jobTitle:"System Engineer (Contractor)", date:"2017-2017", location:"Teksolu, Denver, CO", description:"Worked as the primary point of conntact for Multiple clients supported by this MSP. Focusing mainly on microsoft servers and cisco networking equipment."},
    {jobTitle:"System Administrator", date:"2016-2017", location:"Colorado School of Healing Arts, Denver, CO", description:"Worked as a fileMaker Developer and Windows Adminstrator. Supporting in house staff and technologies."},
    {jobTitle:"IT Recruiter", date:"2015-2016", location:"Vincent Benjimen, Denver, CO", description:"Worked as a IT recruiter, staffing a wider range of different IT deciplenes. "},
    {jobTitle:"Network/System/IT Adminstrator (Contractor)", date:"2014-2015", location:"Robert Half Technology, Denver, CO", description:"Worked on small project foucesed on User Support, O365 and SharePoint."},
    {jobTitle:"System Adminstrator", date:"2012-2014", location:"Mobile Accord, Denver, CO", description:"Worked on mutiple plateforms from Azure Cloud to bearmetal local VMware. Utiliesing both Windows and Linux platforms. Supported O365 and various virtual data centers."},
    {jobTitle:"SharePoint Adminstrator (Contractor)", date:"2012-2012", location:"Rooney Engineering, Denver, CO", description:"Supported stack holders and engineers with a local SharePoint envierment. Focused on developing and maintaining both department and project sites."},
    {jobTitle:"SharePoint Business Analyst (Contractor)", date:"2011-2012", location:"Newmont Mining Corp, Denver, CO", description:"Worked on a Global project deploying SharePoint to multiple office around the world. As part of a large team worked closely with stack holders to develope and deploy a coheriant and fucntional sharepoint enviroment for day-to-day business opperations."},
    {jobTitle:"System Adminstrator", date:"2007-2011", location:"Zed, Denver, CO", description:"Focused on maintaning end-user desktop systems, Tape backup, development enviroments, maintaing desktop images and giving white glove treatment to executive level staff."},
];

class Resume extends Component {
    render () {
        return (
            <div>
                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title">
                        <h2>Resume</h2>
                        <p>Below brief presentation of my work experience. It ranges in many different assets of IT from supporting end-users and executives, deploying physical hadware, and supporting different cloud platforms.</p>
                        </div>

                        <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Augusto J. Rodriguez</h4>
                                <p><em>Innovative and deadline-driven Engineer with over 15+ years of experience designing and developing user-centered IT infrastructor and systems</em></p>
                                <ul>
                                    <li>Saraland, AL</li>
                                    <li>info@augustojrodriguez.xyz</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Science - Electronic Engineering</h4>
                                <h5>2000 - 2005</h5>
                                <p><em>Johnson &amp; Wales University, Providence, RI</em></p>
                                <ul>
                                    <li>Electrical Engineering focus on the study of the physics and mathematics of electricty, electronics, and electromagnetism. It is used to design, develop, produce and work to improve every kind of electrical equipment imaginable.</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Resume Link</h3>
                            <div className="resume-item">
                                <h4>Download Full resume at the link below</h4>
                                <ul>
                                    <li><em>Resume Link</em></li>
                                </ul>    
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            {resumeItem.map((resumeItem, index) => {
                                return <ResumeItem {...resumeItem} key={index} />
                            })}
                        </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
export default Resume;