import React from 'react'
import '../App.css'
import Information from '../components/Information/Information'
import InformationSmall from '../components/Information/InformationSmall'
import HomeContent from '../components/HomeContent/HomeContent'
export default function Home() {
    return (
      <div className="content">
        <div className="container-fluid pl-0 pr-0 no-gutters  ">
          <div className="d-none d-lg-block">
            <div className="row no-gutters">
              <div className="col-4">
                <Information />
              </div>
              <div className="home col-8">
                <HomeContent />
              </div>
            </div>
          </div>
          <div className="d-md-block d-sm-block d-lg-none  ">
            <InformationSmall />
          </div>
        </div>
      </div>
    ); 
}
