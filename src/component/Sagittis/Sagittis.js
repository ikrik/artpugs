import React from 'react';
import './Sagittis.css';
import circle from '../../images/circle.png'
function Sagittis () {
    return (
        <div>
            <div className='Sagittis-main'>
                <div className='container p-5'>
                    <h1 className='text-center mt-3 mb-5'>Sagittis</h1>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-2 d-flex justify-content-center align-item-center">
                                <div>
                                    <img src={circle} class="img-fluid rounded-start" alt="..."/>
                                </div>
                            </div>
                            <div class="col-md-10">
                            <div class="card-body">
                                <h5 class="card-title">Mattis et arcu sed nunc cras tincidunt leo.</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nam pulvinar quis ultrices mauris elit quam morbi. Nullam morbi vel sem sodales magna urna justo, volutpat nibh. Vulputate sapien, at dui morbi ut netus tincidunt. Ac nec ultrices ut eu, ut. Elit vitae augue et ac, etiam odio. Suspendisse amet hac in dolor vivamus quis. Praesent facilisis enim tristique etiam. Amet, proin vitae id dictum ultricies ultricies ac arcu sagittis. Volutpat a suspendisse nec imperdiet in sed proin et.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row sag-second-mobile-row g-0">
                            <div class="col-md-10">
                                <div class="card-body">
                                    <h5 class="card-title text-end">Mattis et arcu sed nunc cras tincidunt leo.</h5>
                                    <p class="card-text text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nam pulvinar quis ultrices mauris elit quam morbi. Nullam morbi vel sem sodales magna urna justo, volutpat nibh. Vulputate sapien, at dui morbi ut netus tincidunt. Ac nec ultrices ut eu, ut. Elit vitae augue et ac, etiam odio. Suspendisse amet hac in dolor vivamus quis. Praesent facilisis enim tristique etiam. Amet, proin vitae id dictum ultricies ultricies ac arcu sagittis. Volutpat a suspendisse nec imperdiet in sed proin et.</p>
                                </div>
                            </div>
                            <div class="col-md-2 d-flex justify-content-center align-item-center">
                                <div>
                                    <img src={circle} class="img-fluid rounded-start" alt="..."/>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sagittis;