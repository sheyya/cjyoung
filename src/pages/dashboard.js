import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import "../assets/css/styles.css"
import DoneIcon from "@material-ui/icons/Done"
import { navigate } from "gatsby"
//import { localStorageMemory } from "localstorage-memory"
import Adashblock from "../components/adashblock"
import Image from "../images/cjyoung.jpg"
import CallIcon from "@material-ui/icons/Call"
import Modal from "react-bootstrap/Modal"

if (localStorage.getItem("1") == null) {
  localStorage.setItem("1", "")
  localStorage.setItem("2", "")
  localStorage.setItem("3", "")
  localStorage.setItem("4", "")
  localStorage.setItem("5", "")
}

const Dashboard = () => {
  let q1A = ["We are not concerned about employees leaving"]
  var q1 = localStorage.getItem("1").split(",").filter(Boolean)
  console.log("---------q1", q1)

  let q2A = ["They are sharing information perfectly"]
  var q2 = localStorage.getItem("2").split(",").filter(Boolean)

  let q3A = [
    "By enforcing vacations where the employee can’t communicate with the company",
    "By moving employees to a different location where employee can communicate with company",
  ]
  var q3 = localStorage.getItem("3").split(",").filter(Boolean)

  let q4A = [
    "We train and motivate employees to share information",
    "We have processes and systems to share information",
    "We make knowledge sharing a part of the annual/quarterly evaluation process",
  ]
  var q4 = localStorage.getItem("4").split(",").filter(Boolean)

  if (q1.slice(-1).toString().slice(0, 3) === "cmt") {
    q1.pop()
  }
  if (q2.slice(-1).toString().slice(0, 3) === "cmt") {
    q2.pop()
  }
  if (q3.slice(-1).toString().slice(0, 3) === "cmt") {
    q3.pop()
  }
  if (q4.slice(-1).toString().slice(0, 3) === "cmt") {
    q4.pop()
  }

  return (
    <div className="container h-100">
      <div className=" h-100">
        <div className="dashboard col-lg-12 mx-auto">
          <h2 className="pricingTitle">Dashboard</h2>
          <div className="mainQ">
            <div className="qSection col-md-12 col-lg-6">
              <div className="questionBlock2">
                <h4>
                  When an employee leaves what is/are the biggest concern/s
                  Organizations face various issues when employees leave?
                </h4>
              </div>
              <div className="answerBlock">
                {q1.map((object, index) => (
                  <Adashblock answers={object} index={index} correctA={q1A} />
                ))}
              </div>
            </div>
            <div className="qSection col-md-12 col-lg-6">
              <div className="questionBlock2">
                <h4>
                  What prevents employees from sharing information? It\"s
                  usually hard for employees to share information because it
                  takes effort and the benefits are not clear
                </h4>
              </div>
              <div className="answerBlock">
                {q2.map((object, index) => (
                  <Adashblock answers={object} index={index} correctA={q2A} />
                ))}
              </div>
            </div>
            <div className="qSection col-md-12 col-lg-6">
              <div className="questionBlock2">
                <h4>
                  How do you test how the company will function in the absence
                  of the key employee?
                </h4>
              </div>
              <div className="answerBlock">
                {q3.map((object, index) => (
                  <Adashblock answers={object} index={index} correctA={q3A} />
                ))}
              </div>
            </div>
            <div className="qSection col-md-12 col-lg-6">
              <div className="questionBlock2">
                <h4>
                  What is being done by the company to ensure that knowledge
                  about company processes are shared?
                </h4>
              </div>
              <div className="answerBlock">
                {q4.map((object, index) => (
                  <Adashblock answers={object} index={index} correctA={q4A} />
                ))}
              </div>
            </div>

            <div className="fixnow">
              <div className="bigfix">
                <Button
                  className="site-btn login-btn"
                  variant="contained"
                  onClick={() => {
                    navigate("/pricing")
                  }}
                  size="large"
                  style={{
                    backgroundColor: "#1ABC9C",
                    color: "#ffffff",
                    width: "12em",
                    height: "4em",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  startIcon={<DoneIcon />}
                >
                  Fix Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row col-lg-12 details">
          <div className="col-lg-8 left">
            <p className="detailfl">With performance from above list,</p>
            <p className="detailfl">
              Review common solutions with <b>Dr. Cindy Young.</b>
            </p>
            <div className="thirtyBlock">
              <p className="thirty">30 minutes consultation</p>
              <div className=" price">
                <p className="free my-auto">FREE</p>
              </div>

              <Button
                className="site-btn login-btn freefix"
                variant="contained"
                onClick={() => {
                  navigate("/pricing")
                }}
                size="small"
                style={{
                  backgroundColor: "#1ABC9C",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                startIcon={<CallIcon />}
              >
                Get a Call
              </Button>
            </div>
            <p
              style={{
                color: "#57606f",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              "This checklist is based on the research and experience of Cindy
              Young"
            </p>
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
                <li>Surface Warfare Officer with 23 years in the U.S. Navy.</li>
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
                  ASQ-Certified Manager of Quality/Organizational Excellence.
                </li>
              </ul>
            </div>
            <p className="detailll">
              Discuss problems to work towards solutions with Dr. Cindy Young
            </p>
            <div className="thirtyBlock">
              <p className="thirty">30 minutes consultation</p>
              <div className=" price">
                <p className="free my-auto">FREE</p>
              </div>
              <Button
                className="site-btn login-btn freefix"
                variant="contained"
                onClick={() => {
                  navigate("/pricing")
                }}
                size="small"
                style={{
                  backgroundColor: "#1ABC9C",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                startIcon={<CallIcon />}
              >
                Get a Call
              </Button>
            </div>
          </div>
          <div className="col-lg-4 photo">
            <div className="photo-hover">
              <img src={Image} className="img-fluid" alt="" />
            </div>
            <p>
              C.J.Young is a Doctor of Business Administration (DBA) in Project
              Management.
            </p>
            <p>
              Her doctoral thesis is : Knowledge Management and Innovation on
              Firm Performance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
