import React from 'react';
import './Team.css';
import nick from '../../../../images/Nick.png'
import georgia from '../../../../images/Georgia.png'

const Team = () => {
  return (
    <div>
      <div className='Sagittis-main'>
        <div className='container p-5'>
          <h1 className='text-center mt-3 mb-5'>TEAM</h1>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-2 d-flex justify-content-center align-item-center">
                <div>
                  <img src={nick} className="img-fluid rounded-start" alt="..."/>
                </div>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">ORIGINAL IDEA  / ILLUSTRATION / CREATIVE MASTERMIND</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nam pulvinar quis ultrices mauris elit quam morbi. Nullam morbi vel sem sodales magna urna justo, volutpat nibh. Vulputate sapien, at dui morbi ut netus tincidunt. Ac nec ultrices ut eu, ut. Elit vitae augue et ac, etiam odio. Suspendisse amet hac in dolor vivamus quis. Praesent facilisis enim tristique etiam. Amet, proin vitae id dictum ultricies ultricies ac arcu sagittis. Volutpat a suspendisse nec imperdiet in sed proin et.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row sag-second-mobile-row g-0">
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title text-end">ORGANIZER / PIZZA LOVER</h5>
                  <p className="card-text text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nam pulvinar quis ultrices mauris elit quam morbi. Nullam morbi vel sem sodales magna urna justo, volutpat nibh. Vulputate sapien, at dui morbi ut netus tincidunt. Ac nec ultrices ut eu, ut. Elit vitae augue et ac, etiam odio. Suspendisse amet hac in dolor vivamus quis. Praesent facilisis enim tristique etiam. Amet, proin vitae id dictum ultricies ultricies ac arcu sagittis. Volutpat a suspendisse nec imperdiet in sed proin et.</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-item-center">
                <div>
                  <img src={georgia} className="img-fluid rounded-start" alt="..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;