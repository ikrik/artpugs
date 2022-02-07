import React from 'react';
import './About.css'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../../../../images/slider1.png'
import slider2 from '../../../../images/slider2.png'
import slider3 from '../../../../images/slider3.png'
import slider4 from '../../../../images/slider4.png'
import slider5 from '../../../../images/slider5.png'
import slider6 from '../../../../images/slider6.png'
import slider7 from '../../../../images/slider7.png'
import slider8 from '../../../../images/slider8.png'
import $ from 'jquery'

const sliders = [
  { desc: "First", item: slider1 },
  { desc: "Second", item: slider2 },
  { desc: "Third", item: slider3 },
  { desc: "Forth", item: slider4 },
  { desc: "Fifth", item: slider5 },
  { desc: "Sixth", item: slider6 },
  { desc: "Seventh", item: slider7 },
  { desc: "Eighth", item: slider8 },
];

const About = () => {

  React.useEffect(() => {
    $('a[class^=carousel-control-]').on('click', (event) => {
      event.preventDefault();
    });
  }, [])

  return (
    <div className='tempor-main'>
      <div className='container p-5'>
        <div className='row tempor-main-row'>
          <div className='col-md-7 t-child1'>
            <Carousel>
              {sliders.map((slider) => (
                <Carousel.Item key={slider.desc}>
                  <img className="d-block w-100" src={slider.item} alt={`${slider.desc} slide`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className='col-md-5 d-flex justify-content-center align-items-center'>
            <div>
              <h1 className='tempor-text'>ABOUT THE PROJECT</h1>
              <p className='tempor-pargrap'>
              ArtPugs is a collection of 10,001 characters on the Cardano Blockchain with algorithmically assembled features, that each unique character is a quirky little beast!
              This NFT art project was mainly inspired from Warhol’s series of screen prints whilst the “flat” brushstrokes are a praise to street art.
              The backgrounds are modified artworks from well known paintings, paying a homage to the great art masters of the past.
              Our little rascal cuties are ready to be adopted!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;