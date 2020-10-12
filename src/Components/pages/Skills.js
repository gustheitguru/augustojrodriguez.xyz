import React, {Component} from 'react';
import SkillItem from '../Common/SkillItem';

const skillItem = [
    {skill: "PowerShell", percent:"60%", avn:"60", avm:"60", location:1},  
    {skill: "Node.js", percent:"65%", avn:"65", avm:"65", location:1}, 
    {skill: "JavaScript", percent:"70%", avn:"70", avm:"70", location:1}, 
    {skill: "Linux", percent:"70%", avn:"70", avm:"70", location:2}, 
    {skill: "Windows", percent:"80%", avn:"80", avm:"80", location:2}, 
    {skill: "Wiring", percent:"95%", avn:"95", avm:"95", location:2},   
]

class Skills extends Component {
    render () {
        return (
            <div>
                <section id="skills" className="skills section-bg">
                    <div className="container">

                        <div className="section-title">
                        <h2>Skills</h2>
                        <p>
                        Over my career I have focused on managing and monitoring systems and infrastructure. Installing, configuring, maintaining and 
                        testing different operating systems, software application and ensuring high level availability infrastructure for clients.
                        The following is a list of technologies I have had the pleasure of working with and manaaging.
                        </p>
                        </div>
                        <div>
                            <h5>Top Skills</h5>
                        </div>
                        <div className="row skills-content">
                            
                            <div className="col-lg-6" data-aos="fade-up">

                                {skillItem.map((skillItem, index) => {
                                    if (skillItem.location == 1) {
                                        return <SkillItem {...skillItem} key={index} />
                                    }
                                })}

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                           
                                 {skillItem.map((skillItem, index) => {
                                    if (skillItem.location == 2) {
                                        return <SkillItem {...skillItem} key={index} />
                                    }
                                })}


                            </div>                            
                        </div>
                        <div>
                            <h5>Other Skills</h5>
                            <h6>Hardware:</h6>
                            <ul>                                
                               <li>APC UPS Battery backup, Dell PowerVault Tape drives, Avaya VoIP, Cisco PIX Firewall, Cisco 2950 switches, Sangoma T1 Card, HP Printers, Dell Printers, Sony Printers, Epson Printers, Ricoh Printers, Brother Printers, Polycom, Ubiquiti, RAID controllers, Pakedge, Control4, Savant, Crestron, ICRealtime, HIKVision, Integra, Lutron, Vantage, PulseWorx, Sonos, Honeywell, Interlogix, Denon, Crown, Universal Remote Control, Bose, Luxul</li> 
                            </ul>
                            <h6>Software:</h6>
                            <ul> 
                                <li>Vector System Issue Tracker, UltraVNC, Microsoft Communicator, Office 2003/2007/2010, SQL 2005/2008, Visual Studio 2003/2005/2008/2010, Symantec Ghost 10, Windows Deployment Services, Symantec Antivirus, AVG, Forefront, Symantec cloud AV, TruPortal</li> 
                            </ul>
                            <h6>Server Software:</h6>
                            <ul>
                                <li>SharePoint 2003/2007/2010/O365, Metalogix, Microsoft Dynamics Great Plains, WSUS, VPN, Symantec Backup Exec 10/12.0/12.5b,  VMware ESX server v4.0-5.5, Microsoft Hyper-V, BlackBerry Enterprise Server, Radius, Active Directory, Exchange 2003/2007, Microsoft Team Foundation Server, Apache, Rinet.d, Bacula, pfSense, FreePBX, Zabbix, Windows Group Policy manager, v-LAN, SQL, MySQL, MediaWiki, WordPress, Drupal, netsh, route add, LDAP, 802.1x Authentication, sTunnel, Xen Server, Cron Jobs, FTP, MySQL backups</li> 
                            </ul>
                            <h6>Operating Systems: </h6>
                            <ul>
                                <li>ISO, Android, Windows Mobile, Palm OS, BlackBerry, OSX, Windows XP, Windows Vista, Windows 7, Windows 8, windows 10, Windows Server2003, Windows Server 2008, Windows Server 2012, Debian, RedHat, FreeBSD</li> 
                            </ul>
                            <h6>Firewall:</h6>
                            <ul> 
                                <li>DMZ, PPTP, OpenVPN, IPSec, Virtual IP routing, Firewall Rule configuration, Dual ISP support, IP Routing, DNS, DHCP, SMTP, Pakedge  </li>                               
                            </ul>
                            <h6>Programing Languages:</h6>
                            <ul> 
                                <li>JavaScript, PowerShell, NodeJS, React</li> 
                            </ul>
                            <h6>Cloud Hosted Solutions:</h6>
                            <ul> 
                                <li>Azure, AWS, iLand, Digital Ocean, Office 365 Mail, Enterprise Google Mail, Dropbox, Sales Force, Pakedge, Teams, SharePoint</li> 
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
export default Skills;