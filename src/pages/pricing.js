import React from "react"
import "../assets/css/styles.css"

const Princing = () => {
  return (
    <div>
      <div className="container h-100">
        <div className="pricinghead mx-auto">
          <h2>Pricing</h2>
        </div>
        <div className="row h-100">
          <div className="col-lg-3 pricingBlock">
            <div className="priceName">
              <p className="priceType">FREE</p>
              <p>Consultation</p>
            </div>
            <div className="priceBody">
              <p>30 minute consultation with link to calendar</p>
              <p>Interview with experts in the field.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="priceName">
              <p className="priceType">Paid</p>
              <p>Consultation</p>
            </div>
            <div className="priceBody">
              <p>Discuss common issues with Cindy Young</p>
              <p>On Phone or Zoom depending on convenience</p>
              <p className="pricingBlock">
                <b>Price :</b> $100 for 30 minutes
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="priceName">
              <p className="priceType">Starter</p>
              <p>Beginning Your Knowledge Management Journey</p>
            </div>
            <div className="priceBody">
              <p>Workbook to build knowledge management plan</p>
              <p>Zoom recordings of interviews with experts</p>
              <p className="pricingBlock">
                <b>Price :</b> $250/mo
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="priceName">
              <p className="priceType">Professional</p>
              <p>Beginning Your Knowledge Management Journey</p>
            </div>
            <div className="priceBody">
              <p>Lifetime access to course material</p>
              <p>Weekly Zoom calls with the class to discuss issues</p>
              <p>Interview with experts for live case studies</p>
              <p className="pricingBlock">
                <b>Price :</b> $997 for 12 weeks of live sessions with experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Princing
