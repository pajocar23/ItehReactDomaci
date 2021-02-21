import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/home.jpg';

// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                title="Welcome to our Studio"
                subtitle="It's nice to meet you"
                buttonText="Tell me more"
                link="/services"
                showButton={true}
                image={image}
                />

                <Services/>
                <Portfolio/>
            </div>
        );
    }
}


export default Home;