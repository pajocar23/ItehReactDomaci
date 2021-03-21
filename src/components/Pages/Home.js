import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/ValhalaHD.jpg';

// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                title="Welcome to our Studio"
                subtitle="SHOP NOW"
                buttonText="Tell me more"
                link="/about"
                showButton={true}
                image={image}
                />

                <Services/>
                <Portfolio/>
                <Footer/>
            </div>
        );
    }
}


export default Home;