import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
             <div className="container footer">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="footer-widget  px-4">
                           <h1 className="text-light fw-bold">DiagnosticLab</h1>
                            <p className="footer-text p-2">Health is a key factor of normal life of any person. We cannot perform wholesome physical and mental activity without good.</p>
                               
                            <ul>
                                <li><Nav to="#">+1 202 555 0191</Nav></li>
                                <li><Nav to="#">+1 (201) 555-0123</Nav></li>
                       
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="footer-widget px-4">
                            <h4>Departments</h4>
                            <ul>
                                <li><Nav to="#">Blood Test Department</Nav></li>
                                <li><Nav to="#">Body Surgery Department</Nav></li>
                                <li><Nav to="#">Cardiology Department</Nav></li>
                                <li><Nav to="#">Corona Test Department</Nav></li>
                         
                                 
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="footer-widget px-4">
                            <h4>Opeaning Hours</h4>
                            <ul>
                                <li><Nav to="#">(Mon-Friday) : 9:00 AM - 9:00 PM</Nav></li>
                                <li><Nav to="#">Sunday : Closed</Nav></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className="container">
                <div className="copyright-border">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="copyright">
                                <p>Copyright © by SAYED all rights reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="footer-menu text-left text-md-right">
                                <ul>
                                    <li><Nav to="#">About</Nav></li>
                                    <li><Nav to="#">Tips and Tricks</Nav></li>
                                    <li><Nav to="#">Service</Nav></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;