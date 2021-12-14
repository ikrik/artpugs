import React from 'react';
import './Tempor.css'
import slider1 from '../../images/slider.png'
import slider2 from '../../images/slider.png'
import slider3 from '../../images/slider.png'
import leftarrow from '../../images/arrowleft.png'
import rightarrow from '../../images/arrowright.png'
function Tempor () {
    return (
        <div className='tempor-main'>
            <div className='container row'>
                <div className='col-md-7 t-child1'>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={slider1} alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={slider2} alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={slider3} alt="Third slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <img src={leftarrow} alt="" />
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <img src={rightarrow} alt="" />
                        </a>
                    </div>
                </div>
                <div className='col-md-5 d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='tempor-text'>Tempor porttitor</h1>
                        <p>Donec scelerisque et pellentesque ac massa. Tempus massa adipiscing sed enim nisi, eu duis. Facilisi ipsum aliquam tincidunt rhoncus suspendisse. Vitae pellentesque ipsum interdum est tristique. Lorem semper pharetra, ut sollicitudin.
                            Donec scelerisque et pellentesque ac massa. Tempus massa adipiscing sed enim nisi, eu duis. Facilisi ipsum aliquam tincidunt rhoncus suspendisse. Vitae pellentesque ipsum interdum est tristique. Lorem semper pharetra, ut sollicitudin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tempor;