import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './forms.css';



class Mileage extends Component {


    nextStep = (values) => {

        values.preventDefault();
        
        let miles = values.currentTarget.dataset.value;
    

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const lp = urlParams.get('lp_request_id');
        const gclid = urlParams.get('gclid');
        const carYear = urlParams.get('car_year');
        const zipCode = urlParams.get('zip_code');
        const carMake = urlParams.get('car_make');
        const carModel = urlParams.get('car_model')
        const use = urlParams.get('primary_usage')

       this.props.setMileage(miles)
        
        this.props.history.push('/coverage-level' + '?zip_code=' + zipCode +  '&car_year=' + carYear + '&car_model=' + carModel + '&car_make=' + carMake + '&primary_usage=' + use + '&annual_mileage=' + miles);

    }


    render() {

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
 
        const carMake = urlParams.get('car_make');
        const carModel = urlParams.get('car_model')

        return (
          <div className="back bg-white">
          <div className="bg-blue-500 headerText justify-center align-middle text-center">
            <h2>Get Your Free Auto Insurance Quote</h2>
          </div>
          <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
            <div className="px-4 py-8 sm:px-10">
  
  
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
  
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      37%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
  
                  <div style={{ width: "37%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
  
                </div>
              </div>
  
  
              <div className="test">
                <div className="mt-6">
  
                  <div>
                    <div className="relative flex justify-center text-sm leading-5 con">
                      <span className="px-2 text-black-500 text-3xl bold header">
                        Annual Mileage Of Your {carMake}
                      </span>
                    </div>
                  </div>
                  <form>
                    <div className="mt-6">
                      <div className="w-full flex text-sm leading-5">
  
                        <div className="text-sm leading-5 buttonBlockRow">
  
  
  
                          <button className="monthButton  bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="5000" onClick={this.nextStep}> Under 5,000 </button>
  
                          <button className="monthButton  bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="10000" onClick={this.nextStep}> 5,001-10,0000 </button>
  
                        <button className="monthButton  bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="15000" onClick={this.nextStep}> 10,001-15,000 </button>

                        <button className="monthButton  bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="20000" onClick={this.nextStep}> 15,001+ </button>

                        </div>
                      </div>
                    </div>
  
                  </form>
  
                </div>
  
              </div>
            </div>
  
  
  
  
          </div>
  
  
        </div>
            
     
        )
    }
}

export default withRouter(Mileage)