import React, { useEffect, useState } from "react"
import Button from "@material-ui/core/Button"
import "../assets/css/styles.css"
import DoneIcon from "@material-ui/icons/Done"
import { navigate } from "gatsby"
import Dash from "../assets/img/dash.svg"
import Adashblock from "../components/adashblock"
import Image from "../images/cjyoung.jpg"
import axios from "axios"
import Modal from "react-bootstrap/Modal"

const Dashboard = () => {
  // const [quizDash, setQuiz] = useState([])
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
  })
  const [show, setShow] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [spackage, setPackage] = useState("")

  // useEffect(() => {
  //   //console.log(formData)
  // }, [submitData])

  // const getquiz = async () => {
  //   const response = await fetch("data.json")
  //   const data = await response.json()
  //   setQuiz(data)
  // }

  // const getformData = event => {
  //   const target = event.target
  //   const value = target.value
  //   const name = target.name
  //   let data = formData
  //   data.name = value
  //   setFormData({
  //     [name]: data,
  //   })
  // }

  const formValueChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const submitData = event => {
    event.preventDefault()
    // const uemail = event.target.email.value
    // const uname = event.target.name.value
    // const uphone = event.target.phone.value
    // setFormData({
    //   email: uemail,
    //   name: uname,
    //   phone: uphone,
    // })
    //console.log(formData)
    localStorage.setItem("user", JSON.stringify(formData))
    setShow(true)
    // localStorage.setItem("user", JSON.stringify(formData))
  }

  const selectOPtion = option => {
    setPackage(option)
    localStorage.setItem("user", JSON.stringify(formData))
    localStorage.setItem("package", option)
    if (formData.phone == null) {
      setShowPhone(true)
    } else {
      let user = localStorage.getItem("user")
      let questions = { q1: q1raw, q2: q2raw, q3: q3raw, q4: q4raw, q5: q5raw }
      let selectedPackage = localStorage.getItem("package")
      let data = { user: user, config: questions, package: selectedPackage }
      console.log(data)

      return new Promise((resolve, reject) => {
        return axios
          .post(
            `https://enhpwk64el.execute-api.us-east-1.amazonaws.com/dev/log`,
            data
          )
          .then(result => {
            resolve({ code: 200, message: result.data.message })
            console.log("success")
            setShow(false)
            setShowPhone(false)
            localStorage.clear()
            navigate("/thankyou")
          })
          .catch(err => {
            //console.log("Failed", err)

            reject({ code: 0, error: err })
          })
      })
    }
  }

  //   const q1A = [];

  let q1A = ["We are not concerned about employees leaving"]
  var q1 = localStorage
    .getItem(
      "When an employee leaves what is/are the biggest concern/s Organizations face various issues when employees leave?"
    )
    .split(",")
    .filter(Boolean)
  let q1raw = localStorage
    .getItem(
      "When an employee leaves what is/are the biggest concern/s Organizations face various issues when employees leave?"
    )
    .split(",")
    .filter(Boolean)
  //   //console.log(q1A);

  //   const q2A = [];

  let q2A = ["They are sharing information perfectly"]
  var q2 = localStorage
    .getItem(
      'What prevents employees from sharing information? It"s usually hard for employees to share information because it takes effort and the benefits are not clear'
    )
    .split(",")
    .filter(Boolean)
  let q2raw = localStorage
    .getItem(
      'What prevents employees from sharing information? It"s usually hard for employees to share information because it takes effort and the benefits are not clear'
    )
    .split(",")
    .filter(Boolean)

  //   //console.log(q2A);

  //   const q3A = [];

  let q3A = [
    "By enforcing vacations where the employee can’t communicate with the company",
    "By moving employees to a different location where employee can communicate with company",
  ]
  var q3 = localStorage
    .getItem(
      "How do you test how the company will function in the absence of the key employee? These tests are a valuable exercise to understand the resilience of the organization under stress"
    )
    .split(",")
    .filter(Boolean)
  let q3raw = localStorage
    .getItem(
      "How do you test how the company will function in the absence of the key employee? These tests are a valuable exercise to understand the resilience of the organization under stress"
    )
    .split(",")
    .filter(Boolean)

  //   //console.log(q3A);

  //   const q4A = [];

  let q4A = [
    "We train and motivate employees to share information",
    "We have processes and systems to share information",
    "We make knowledge sharing a part of the annual/quarterly evaluation process",
  ]
  var q4 = localStorage
    .getItem(
      "What is being done by the company to ensure that knowledge about company processes are shared?"
    )
    .split(",")
    .filter(Boolean)
  let q4raw = localStorage
    .getItem(
      "What is being done by the company to ensure that knowledge about company processes are shared?"
    )
    .split(",")
    .filter(Boolean)

  //   //console.log(q4A);

  //   var q5A = [];

  let q5A = [
    "CEO / Owner / Investor",
    "Manager",
    "Non Managerial Employee",
    "Student",
  ]
  var q5 = localStorage
    .getItem("What best describes you?")
    .split(",")
    .filter(Boolean)
  let q5raw = localStorage
    .getItem("What best describes you?")
    .split(",")
    .filter(Boolean)

  //   //console.log(q5A);

  //console.log("///////", q1.slice(-1).toString().slice(0, 3))
  if (q1.slice(-1).toString().slice(0, 3) == "cmt") {
    q1.pop()
  }
  if (q2.slice(-1).toString().slice(0, 3) == "cmt") {
    q2.pop()
  }
  if (q3.slice(-1).toString().slice(0, 3) == "cmt") {
    q3.pop()
  }
  if (q4.slice(-1).toString().slice(0, 3) == "cmt") {
    q4.pop()
  }
  if (q5.slice(-1).toString().slice(0, 3) == "cmt") {
    q5.pop()
  }
  return (
    // <header className="masthead" style={{ paddingTop: "20px" }}>
    <div>
      <img src={Dash} id="bgdash" alt="" />
      <div className="container h-100">
        <div className=" h-100">
          <div className="col-lg-8 mx-auto">
            <div className="RegBox">
              <div className="Title">
                <h3>
                  We’ll send the{" "}
                  <div style={{ color: "#d63031", display: "inline" }}>
                    diagnostic
                  </div>{" "}
                  to your email
                </h3>
              </div>
              <div className="form mx-auto">
                <form onSubmit={submitData}>
                  <div className="group-input">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      onChange={formValueChange}
                      required
                    />
                  </div>
                  <div className="group-input">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
                      placeholder="johndoe@gmail.com"
                      required
                      onChange={formValueChange}
                    />
                  </div>
                  <div className="group-input">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      required
                      onChange={formValueChange}
                      name="phone"
                      placeholder="+34 987 388 36795"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="site-btn login-btn"
                    variant="contained"
                    style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                    startIcon={<DoneIcon />}
                  >
                    Submit
                  </Button>
                </form>
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <div class="vertical-alignment-helper">
                    <div class="modal-dialog vertical-align-center">
                      <div class="modal-content">
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Select Package
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="mainPricing">
                            <div className="row h-100">
                              <div className="col-md-6 col-xl-3">
                                <div className="pricingBlock">
                                  <div className="priceName">
                                    <p className="priceType">FREE</p>
                                    <p>Consultation</p>
                                  </div>
                                  <div className="pBody my-auto">
                                    <div className="priceBody">
                                      <p>
                                        30 minute consultation with link to
                                        calendar
                                      </p>
                                      <p>
                                        Interview with experts in the field.
                                      </p>
                                      <p className="priceBlock">
                                        <b>Price :</b> FREE
                                      </p>
                                    </div>
                                    <div className="select">
                                      <center>
                                        <Button
                                          className="site-btn login-btn freefix"
                                          variant="contained"
                                          onClick={() => {
                                            selectOPtion("Free")
                                          }}
                                          size="small"
                                          style={{
                                            backgroundColor: "#1ABC9C",
                                            color: "#ffffff",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                          }}
                                          // startIcon={<DoneIcon />}
                                        >
                                          SELECT
                                        </Button>
                                      </center>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-xl-3">
                                <div className="pricingBlock">
                                  <div className="priceName">
                                    <p className="priceType">Paid</p>
                                    <p>Consultation</p>
                                  </div>
                                  <div className="pBody my-auto">
                                    <div className="priceBody">
                                      <p>
                                        Discuss common issues with Cindy Young
                                      </p>
                                      <p>
                                        On Phone or Zoom depending on
                                        convenience
                                      </p>
                                      <p className="priceBlock">
                                        <b>Price :</b> $100 for 30 minutes
                                      </p>
                                    </div>
                                    <div className="select">
                                      <center>
                                        <Button
                                          className="site-btn login-btn freefix"
                                          variant="contained"
                                          onClick={() => {
                                            selectOPtion("Paid")
                                          }}
                                          size="small"
                                          style={{
                                            backgroundColor: "#1ABC9C",
                                            color: "#ffffff",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                          }}
                                          // startIcon={<DoneIcon />}
                                        >
                                          SELECT
                                        </Button>
                                      </center>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-xl-3">
                                <div className="pricingBlock">
                                  <div className="priceName">
                                    <p className="priceType">Starter</p>
                                    <p>
                                      Beginning Your Knowledge Management
                                      Journey
                                    </p>
                                  </div>
                                  <div className="pBody my-auto">
                                    <div className="priceBody">
                                      <p>
                                        Workbook to build knowledge management
                                        plan
                                      </p>
                                      <p>
                                        Zoom recordings of interviews with
                                        experts
                                      </p>
                                      <p className="priceBlock">
                                        <b>Price :</b> $250/mo
                                      </p>
                                    </div>
                                    <div className="select">
                                      <center>
                                        <Button
                                          className="site-btn login-btn freefix"
                                          variant="contained"
                                          onClick={() => {
                                            selectOPtion("Starter")
                                          }}
                                          size="small"
                                          style={{
                                            backgroundColor: "#1ABC9C",
                                            color: "#ffffff",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                          }}
                                          // startIcon={<DoneIcon />}
                                        >
                                          SELECT
                                        </Button>
                                      </center>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-xl-3">
                                <div className="pricingBlock">
                                  <div className="priceName">
                                    <p className="priceType">Professional</p>
                                    <p>
                                      Beginning Your Knowledge Management
                                      Journey
                                    </p>
                                  </div>
                                  <div className="pBody my-auto">
                                    <div className="priceBody">
                                      <p>Lifetime access to course material</p>
                                      <p>
                                        Weekly Zoom calls with the class to
                                        discuss issues
                                      </p>
                                      <p>
                                        Interview with experts for live case
                                        studies
                                      </p>
                                      <p className="priceBlock">
                                        <b>Price :</b> $997 for 12 weeks of live
                                        sessions with experts
                                      </p>
                                    </div>
                                    <div className="select">
                                      <center>
                                        <Button
                                          className="site-btn login-btn freefix"
                                          variant="contained"
                                          onClick={() => {
                                            selectOPtion("Professional")
                                          }}
                                          size="small"
                                          style={{
                                            backgroundColor: "#1ABC9C",
                                            color: "#ffffff",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                          }}
                                          // startIcon={<DoneIcon />}
                                        >
                                          SELECT
                                        </Button>
                                      </center>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </div>
                    </div>
                  </div>
                </Modal>
                <Modal
                  show={showPhone}
                  onHide={() => setShowPhone(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <div class="vertical-alignment-helper">
                    <div class="modal-dialog vertical-align-center">
                      <div class="modal-content">
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Select Package
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="phonebox">
                            <div>
                              <p>Enter Phone Number</p>
                            </div>

                            <input
                              style={{ width: "100%" }}
                              type="text"
                              name="phone"
                              placeholder=""
                              onChange={formValueChange}
                            />
                            <div>
                              <Button
                                className="site-btn login-btn freefix"
                                variant="contained"
                                onClick={() => {
                                  selectOPtion(spackage)
                                }}
                                size="small"
                                style={{
                                  backgroundColor: "#1ABC9C",
                                  color: "#ffffff",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                                // startIcon={<DoneIcon />}
                              >
                                DONE
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>

          <div className="dashboard col-lg-12 mx-auto">
            <h2>Dashboard</h2>
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
                    of the key employee? These tests are a valuable exercise to
                    understand the resilience of the organization under stress
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
              <div className="qSection col-md-12 col-lg-6">
                <div className="questionBlock2">
                  <h4>What best describes you?</h4>
                </div>
                <div className="answerBlock">
                  {q5.map((object, index) => (
                    <Adashblock answers={object} index={index} correctA={q5A} />
                  ))}
                </div>
              </div>
              <div className="fixnow">
                <div className="bigfix">
                  <Button
                    className="site-btn login-btn"
                    variant="contained"
                    onClick={() => {
                      setShow(true)
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
                Review common solutions with <mark>Dr. Cindy Young.</mark>
              </p>
              <div className="thirtyBlock">
                <p className="thirty">30 minutes consultation</p>
                <div className=" price">
                  <p>Price: $150</p> <p className="free my-auto">FREE</p>
                </div>

                <Button
                  className="site-btn login-btn freefix"
                  variant="contained"
                  onClick={() => {
                    setShow(true)
                  }}
                  size="small"
                  style={{
                    backgroundColor: "#1ABC9C",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  startIcon={<DoneIcon />}
                >
                  Fix Now
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
                <h5>Experience</h5>
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
                <ul>
                  <li>Harvard Business Review</li>
                  <li>Industrial and systems engineering</li>
                </ul>
                <h5>Professional certifications</h5>
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
                  <p>Price: $150</p> <p className="free my-auto">FREE</p>
                </div>
                <Button
                  className="site-btn login-btn freefix"
                  variant="contained"
                  onClick={() => {
                    setShow(true)
                  }}
                  size="small"
                  style={{
                    backgroundColor: "#1ABC9C",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  startIcon={<DoneIcon />}
                >
                  Fix Now
                </Button>
              </div>
            </div>
            <div className="col-lg-4 photo">
              <div className="photo-hover">
                <img src={Image} className="img-fluid" />
              </div>
              <p>
                C.J.Young is a Doctor of Business Administration (DBA) in
                Project Management.
              </p>
              <p>
                Her doctoral thesis is : Knowledge Management and Innovation on
                Firm Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </header>
  )
}

export default Dashboard
