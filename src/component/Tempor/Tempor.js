import React,{useEffect} from 'react';
import './Tempor.css'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.png'
import slider3 from '../../images/slider3.png'
import $ from 'jquery'
function Tempor () {
    useEffect(() => {
        $('a[class^=carousel-control-]').click(function (event) {
            event.preventDefault();
        });
    }, [])
    return (
        <div className='tempor-main'>
            <div className='container p-5'>
                <div className='row tempor-main-row'>
                    <div className='col-md-7 t-child1'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slider2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slider3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='col-md-5 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1 className='tempor-text'>Tempor porttitor</h1>
                            <p className='tempor-pargrap'>Donec scelerisque et pellentesque ac massa. Tempus massa adipiscing sed enim nisi, eu duis. Facilisi ipsum aliquam tincidunt rhoncus suspendisse. Vitae pellentesque ipsum interdum est tristique. Lorem semper pharetra, ut sollicitudin.
                                Donec scelerisque et pellentesque ac massa. Tempus massa adipiscing sed enim nisi, eu duis. Facilisi ipsum aliquam tincidunt rhoncus suspendisse. Vitae pellentesque ipsum interdum est tristique. Lorem semper pharetra, ut sollicitudin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tempor;