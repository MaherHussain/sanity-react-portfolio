import React from 'react'
import '../App.css'
import Information from '../components/Information/Information'
import InformationSmall from '../components/Information/InformationSmall'

export default function Home() {
    return (
      <div className="content">
        <div className="container-fluid pl-0 pr-0 no-gutters  ">
          <div className="row no-gutters">
            <div className="col-12">
              <div className="d-none d-lg-block">
                <Information />
              </div>
            </div>
            <div className="col-12">
              <div className="d-md-block d-sm-block d-lg-none  ">
                <InformationSmall />
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
}
