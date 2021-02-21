import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import image1 from '../assets/img/village.jpg'; 
import image2 from '../assets/img/vallheim2.jpg'; 
import image3 from '../assets/img/trojka.jpg'; 


const portfolio=[
    {title:'Valheim',subtitle:'Mythology/survival',image:image1},
    {title:'Valheim2',subtitle:'Mythology/survival',image:image2},
    {title:'Valheim3',subtitle:'Mythology/survival',image:image3}
];

class Portfolio extends Component {
    render() {
        return (
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our games</h2>
                            <h3 className="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div className="row">

                    {portfolio.map((item,index)=>{
                        return <PortfolioItem {...item} key={index}/>
                    })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;