import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/ACLogo.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="Who are we"
          subtitle="What do we do"
          showButton={false}
          image={image}
        />
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted"></h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/founding.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>March 12 1986</h4>
                        <h4 className="subheading">a studio is born</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Ubisoft Entertainment is a French video game company headquartered in the Montreuil suburb of Paris with several development studios across the world. Its video game franchises include Rayman, Raving Rabbids, Prince of Persia, Assassin's Creed, Far Cry, Watch Dogs, Just Dance, and the Tom Clancy's series. As of March 2018, Ubisoft is the fourth largest publicly traded game company in the Americas and Europe in terms of revenue and market capitalisation, after Activision Blizzard, Electronic Arts and Take-Two Interactive.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/firstGame.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>December 2018</h4>
                        <h4 className="subheading">First Assasins creed game</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Assassin's Creed is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the first installment in the Assassin's Creed series. The game was released for PlayStation 3 and Xbox 360 in November 2007 and was made available on Microsoft Windows in April 2008. Also, the game can be played on Xbox One consoles via backward compatibility.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/lastGame.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>July 2020</h4>
                        <h4 className="subheading">Phase Two Expansion</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Assassin's Creed Valhalla is an action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassin's Creed series, and a successor to the 2018's Assassin's Creed Odyssey.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part
                            <br />Of Our
                            <br />Story!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>

    )
  }
}

export default About;