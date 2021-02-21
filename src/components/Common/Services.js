import React, { Component } from 'react';
import SingleService from './SingleService';

const services=[
    {title: 'Game developement', description: 'Our main art is to develop video games and provide great experience to our player base',icon: 'fa-gamepad'},
    {title: 'Consulting', description: 'Our team consists of many experts who enable the possibility of providing advice and new and applicable solutions',icon: 'fa-headset'},
    {title: 'Outsourcing assets', description: 'Custom made 3D models, sounds, shaders....',icon: 'fa-cubes'}

];

class Services extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {services.map((service,index) =>{
                            return <SingleService {...service} key={index} />
                         })}
                        
                       
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;