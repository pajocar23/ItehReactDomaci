import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import image1 from '../assets/img/1.jpg'; 
import image2 from '../assets/img/2.jpg'; 
import image3 from '../assets/img/3.jpg'; 
import image4 from '../assets/img/4.jpg'; 
import image5 from '../assets/img/5.jpg'; 
import image6 from '../assets/img/6.jpg'; 
import image7 from '../assets/img/7.jpg'; 
import image8 from '../assets/img/8.jpg'; 
import image9 from '../assets/img/9.jpg'; 
import image10 from '../assets/img/10.jpg'; 
import image11 from '../assets/img/11.jpg'; 
import image12 from '../assets/img/12.jpg'; 


const portfolio=[
    {title:'Assasins creed ',subtitle:'RolePlay/adventrure',image:image1},
    {title:'Assasins creed II',subtitle:'RolePlay/adventrure',image:image2},
    {title:'Assasins creed brotherhood',subtitle:'RolePlay/adventrure',image:image3},
    {title:'Assasins creed revelations',subtitle:'RolePlay/adventrure',image:image4},
    {title:'Assasins creed III',subtitle:'RolePlay/adventrure',image:image5},
    {title:'Assasins creed black flag',subtitle:'RolePlay/adventrure',image:image6},
    {title:'Assasins creed rogue',subtitle:'RolePlay/adventrure',image:image7},
    {title:'Assasins creed unity',subtitle:'RolePlay/adventrure',image:image8},
    {title:'Assasins creed syndicate',subtitle:'RolePlay/adventrure',image:image9},
    {title:'Assasins creed originis',subtitle:'RolePlay/adventrure',image:image10},
    {title:'Assasins creed odyssey',subtitle:'RolePlay/adventrure',image:image11},
    {title:'Assasins creed valhalla',subtitle:'RolePlay/adventrure',image:image12}

];

class Portfolio extends Component {
    render() {
        return (
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Assassin's creed franchise</h2>
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