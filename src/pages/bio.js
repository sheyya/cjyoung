import React from "react"
import Image from "../images/cjyoung.jpg"
import Head from "../components/Head/Head"
import "../assets/css/styles.css"
import Footer from "../components/footer"
import PUp from "../images/pricing.svg"

const bio = () => {
  return (
    <>
      <Head />
      <img src={PUp} id="bgubio" alt="" />
      <header>
        <div className="container h-100">
          <div className=" h-100">
            <h2
              className="pricingTitle"
              style={{ textAlign: "center", marginTop: "0em" }}
            >
              Biography
              <hr
                style={{
                  border: "4px solid #2F2E2E",
                  width: "5%",
                  borderRadius: "5px",
                }}
              />
            </h2>
            <div className="row col-lg-12 details">
              <div className="col-lg-8 left">
                <div className="expSection">
                  <h5>Experience </h5>
                  <hr
                    style={{
                      border: "2px solid #2F2E2E",
                      width: "40px",
                      borderRadius: "3px",
                      marginTop: "-2px",
                      float: "left",
                      textAlign: "left !impoetant",
                      alignContent: "flex-end",
                    }}
                  />
                  <ul>
                    <li>
                      Theater Mission Planning Center at Leidos, a defense
                      contracting company.
                    </li>
                    <li>
                      Surface Warfare Officer with 23 years in the U.S. Navy.
                    </li>
                  </ul>
                  <h5>Publications</h5>
                  <hr
                    style={{
                      border: "2px solid #2F2E2E",
                      width: "40px",
                      borderRadius: "3px",
                      marginTop: "-2px",
                      float: "left",
                      textAlign: "left !impoetant",
                      alignContent: "flex-end",
                    }}
                  />
                  <ul>
                    <li>Harvard Business Review</li>
                    <li>Industrial and systems engineering</li>
                  </ul>
                  <h5>Professional certifications</h5>
                  <hr
                    style={{
                      border: "2px solid #2F2E2E",
                      width: "40px",
                      borderRadius: "3px",
                      marginTop: "-2px",
                      float: "left",
                      textAlign: "left !impoetant",
                      alignContent: "flex-end",
                    }}
                  />
                  <ul>
                    <li>Project Management Professional.</li>
                    <li>Lean Six Sigma Master Black Belt.</li>
                    <li>
                      ASQ-Certified Manager of Quality/Organizational
                      Excellence.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-4 photo"
                style={{
                  marginTop: "50px",
                }}
              >
                <div className="photo-hover">
                  <img src={Image} className="img-fluid" alt="" />
                </div>
                <p>
                  C.J.Young is a Doctor of Business Administration (DBA) in
                  Project Management.
                </p>
                <p>
                  Her doctoral thesis is : Knowledge Management and Innovation
                  on Firm Performance
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </header>
    </>
  )
}

export default bio
