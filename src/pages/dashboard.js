import Button from "@material-ui/core/Button"
import "../assets/css/styles.css"
import DoneIcon from "@material-ui/icons/Done"
import { navigate } from "gatsby"
//import { localStorageMemory } from "localstorage-memory"
import Adashblock from "../components/adashblock"
import Image from "../images/cjyoung.jpg"
import Head from "../components/Head/Head"
import CallIcon from "@material-ui/icons/Call"
import React, { useEffect, useState } from "react"
import UpdateIcon from "@material-ui/icons/Update"
// import axios from "axios"
import PhoneInput, { formattedValue } from "react-phone-input-2"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import "react-phone-input-2/lib/style.css"
import ProgressBar from "../components/progress"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../components/footer"

if (typeof window !== "undefined") {
  if (localStorage.getItem("1") == null) {
    localStorage.setItem("1", "")
    localStorage.setItem("2", "")
    localStorage.setItem("3", "")
    localStorage.setItem("4", "")
    localStorage.setItem("5", "")
  }
} else {
  //////console.log("we are running on the server")
}

const Dashboard = () => {
  let q1A = ["We are not concerned about employees leaving"]
  let q2A = ["They are sharing information perfectly"]
  let q3A = [
    "By enforcing vacations where the employee can’t communicate with the company",
    "By moving employees to a different location where employee can communicate with company",
  ]
  let q4A = [
    "We train and motivate employees to share information",
    "We have processes and systems to share information",
    "We make knowledge sharing a part of the annual/quarterly evaluation process",
  ]
  var q1
  var q2
  var q3
  var q4

  const [showPhone, setShowphone] = useState(false)
  const [phonevalid, setPhonevalid] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [completed, setCompleted] = useState(0)
  var comp = 0
  var score = 0
  const completedup = val => {
    //console.log(val)
    comp = comp + val
    setCompleted(comp)
    if (comp > 96) {
      setCompleted(100)
    }
    score = comp
    // //console.log(comp)
  }

  // useEffect(() => {
  //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);

  var uphone = formData.phone

  const VALIDATORS = {
    PHONE: input =>
      // eslint-disable-next-line no-useless-escape
      /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(
        input
      ),
  }

  const isPhone = () => {
    if (!VALIDATORS.PHONE(uphone)) {
      setPhonevalid(false)
    }
  }

  const isSignUpValid = () => uphone && VALIDATORS.PHONE(uphone)

  // const enabled = isSignUpValid()

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      if (typeof window !== "undefined") {
        const email = JSON.parse(localStorage.getItem("user")).email
        const phone = JSON.parse(localStorage.getItem("user")).phone
        const name = JSON.parse(localStorage.getItem("user")).name
        setFormData({ name, email, phone })
      }
    }
  }, [])

  const waittoast = () => {
    toast.success("We will call you shortly at " + formData.phone, {
      className: "custom-toast",
      draggable: "true",
      closeOnClick: "true",

      position: toast.POSITION.TOP_CENTER,
    })
  }

  const handlePhoneChange = (phone, phoneFormatted) => {
    setFormData({ ...formData, phone: phone })
    setPhonevalid(true)

    ////console.log(formData)
  }

  const updatePhone = event => {
    event.preventDefault()

    isPhone()

    if (isSignUpValid()) {
      let user = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        requestCall: true,
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user))
      }
      waittoast()
    }
    // navigate("/pricingfree")
    // return new Promise((resolve, reject) => {
    //   return axios
    //     .patch(
    //       `https://enhpwk64el.execute-api.us-east-1.amazonaws.com/dev/log`,
    //       { user: user, requestCall: true }
    //     )
    //     .then(result => {
    //       resolve({ code: 200, message: result.data.message })
    //       ////console.log("success")
    //       ////console.log(Response)
    //       ////console.log(result)

    //       navigate("/pricingfree")
    //     })
    //     .catch(err => {
    //       ////console.log("Failed", err)

    //       reject({ code: 0, error: err })
    //     })
    // })
  }

  if (typeof window !== "undefined") {
    q1 = localStorage.getItem("1").split(",").filter(Boolean)
    //////console.log("---------q1", q1)
  } else {
    //////console.log("we are running on the server")
  }

  if (typeof window !== "undefined") {
    q2 = localStorage.getItem("2").split(",").filter(Boolean)

    q3 = localStorage.getItem("3").split(",").filter(Boolean)

    q4 = localStorage.getItem("4").split(",").filter(Boolean)
  }

  // if (q1 != null && q2 != null && q3 != null && q4 != null) {
  //   if (q1.slice(-1).toString().slice(0, 3) === "cmt") {
  //     q1.pop()
  //   }
  //   if (q2.slice(-1).toString().slice(0, 3) === "cmt") {
  //     q2.pop()
  //   }
  //   if (q3.slice(-1).toString().slice(0, 3) === "cmt") {
  //     q3.pop()
  //   }
  //   if (q4.slice(-1).toString().slice(0, 3) === "cmt") {
  //     q4.pop()
  //   }
  // }
  const [showDetail, setShowdetail] = useState(false)
  return (
    <>
      <Head />
      <div className="container h-100">
        <div className=" h-100">
          <ToastContainer
            style={{ color: "white", fontWeight: "500", textAlign: "center" }}
          />
          <div className="dashboard col-lg-12 mx-auto">
            <h2 className="pricingTitle">
              Dashboard
              <hr
                style={{
                  border: "4px solid #2F2E2E",
                  width: "7%",
                  borderRadius: "5px",
                }}
              />
            </h2>
            <div className="mainQ" style={{ width: "inherit" }}>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "25px",
                  marginTop: "20px",
                }}
              >
                Your Score
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "40px",
                  color: score > 70 ? "#1abc9c" : "#f1c40f",
                }}
              >
                {score}%
              </p>
              <ProgressBar bgcolor={"#1abc9c"} completed={completed} />
              <p
                style={{
                  margin: "10",
                  backgroundColor: "rgba(255, 127, 80, 0.301)",
                  width: "fit-content",
                  padding: "7px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: !showDetail ? "inline-flex" : "none",
                }}
                onClick={() => setShowdetail(true)}
              >
                Show Details +
              </p>
              <p
                style={{
                  margin: "10",
                  backgroundColor: "rgba(82, 82, 82, 0.301)",
                  width: "fit-content",
                  cursor: "pointer",
                  padding: "7px",
                  display: showDetail ? "inline-flex" : "none",
                }}
                onClick={() => setShowdetail(false)}
              >
                Hide Details -
              </p>
              <div style={{ display: showDetail ? "block" : "none" }}>
                <div className="qSection col-md-12 col-lg-6">
                  <div className="questionBlock2">
                    <h4>
                      When an employee leaves what is/are the biggest concern/s?
                    </h4>
                  </div>
                  <div className="answerBlock">
                    {q1 &&
                      q1.map((object, index) => (
                        <Adashblock
                          answers={object}
                          index={index}
                          correctA={q1A}
                          completed={completedup}
                        />
                      ))}
                  </div>
                </div>
                <div className="qSection col-md-12 col-lg-6">
                  <div className="questionBlock2">
                    <h4>What prevents employees from sharing information?</h4>
                  </div>
                  <div className="answerBlock">
                    {q2 &&
                      q2.map((object, index) => (
                        <Adashblock
                          answers={object}
                          index={index}
                          correctA={q2A}
                          completed={completedup}
                        />
                      ))}
                  </div>
                </div>
                <div className="qSection col-md-12 col-lg-6">
                  <div className="questionBlock2">
                    <h4>
                      How do you test how the company will function in the
                      absence of the key employee?
                    </h4>
                  </div>
                  <div className="answerBlock">
                    {q3 &&
                      q3.map((object, index) => (
                        <Adashblock
                          answers={object}
                          index={index}
                          correctA={q3A}
                          completed={completedup}
                        />
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
                    {q4 &&
                      q4.map((object, index) => (
                        <Adashblock
                          answers={object}
                          index={index}
                          correctA={q4A}
                          completed={completedup}
                        />
                      ))}
                  </div>
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

                <div style={{ display: "grid" }}>
                  <Button
                    className="site-btn login-btn freefix"
                    variant="contained"
                    onClick={() => {
                      // navigate("/pricing")
                      setShowphone(old => !old)
                    }}
                    size="small"
                    style={{
                      backgroundColor: "#1ABC9C",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginRight: "auto",
                    }}
                    startIcon={<CallIcon />}
                  >
                    Get a Call
                  </Button>
                </div>

                <form
                  onSubmit={updatePhone}
                  style={{ display: showPhone ? "block" : "none" }}
                >
                  <div className="comment" style={{ marginBottom: "10px" }}>
                    <label htmlFor="other">Phone : </label>
                    <PhoneInput
                      placeholder="+12 123 456 7890"
                      value={formData.phone}
                      // value={phoneValue}
                      containerStyle={{
                        height: "50px",
                        width: "fit-content",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      inputStyle={{
                        height: "50px",
                      }}
                      // flags={flags}
                      inputProps={{
                        name: "phone",
                        required: true,
                        // pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      }}
                      onChange={handlePhoneChange}
                    />
                    {/* </div> */}
                  </div>
                  <Button
                    type="submit"
                    className="site-btn login-btn"
                    variant="contained"
                    // disabled={!enabled}
                    style={{
                      backgroundColor: "#EA745B",
                      color: "#ffffff",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                    startIcon={<UpdateIcon />}
                  >
                    Request Call
                  </Button>
                  <p
                    style={{
                      display: !phonevalid ? "block" : "none",
                      fontSize: "12px",
                      textAlign: "left",
                      color: "red",
                      fontWeight: "500",
                      marginTop: "-15px",
                    }}
                  >
                    *This doesn’t look like a phone number*
                  </p>
                </form>
              </div>
              <Button
                className="site-btn login-btn freefix"
                variant="contained"
                onClick={() => {
                  navigate("/pricingpremium")
                }}
                style={{
                  backgroundColor: "#EA745B",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                startIcon={<BusinessCenterIcon />}
              >
                Programs Available
              </Button>
              <p
                style={{
                  color: "#57606f",
                  fontWeight: "600",
                  fontStyle: "italic",
                  marginTop: "30px",
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
                <div style={{ display: "grid" }}>
                  <Button
                    className="site-btn login-btn freefix"
                    variant="contained"
                    onClick={() => {
                      // navigate("/pricing")
                      setShowphone(old => !old)
                    }}
                    size="small"
                    style={{
                      backgroundColor: "#1ABC9C",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginRight: "auto",
                    }}
                    startIcon={<CallIcon />}
                  >
                    Get a Call
                  </Button>
                </div>

                <form
                  onSubmit={updatePhone}
                  style={{ display: showPhone ? "block" : "none" }}
                >
                  <div className="comment" style={{ marginBottom: "10px" }}>
                    <label htmlFor="other">Phone : </label>
                    <PhoneInput
                      placeholder="+12 123 456 7890"
                      value={formData.phone}
                      // value={phoneValue}
                      containerStyle={{
                        height: "50px",
                        width: "fit-content",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      inputStyle={{
                        height: "50px",
                      }}
                      // flags={flags}
                      inputProps={{
                        name: "phone",
                        required: true,
                        // pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      }}
                      onChange={handlePhoneChange}
                    />
                    {/* </div> */}
                  </div>
                  <Button
                    type="submit"
                    className="site-btn login-btn"
                    variant="contained"
                    // disabled={!enabled}
                    style={{
                      backgroundColor: "#EA745B",
                      color: "#ffffff",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                    startIcon={<UpdateIcon />}
                  >
                    Request Call
                  </Button>
                  <p
                    style={{
                      display: !phonevalid ? "block" : "none",
                      fontSize: "12px",
                      textAlign: "left",
                      color: "red",
                      fontWeight: "500",
                      marginTop: "-15px",
                    }}
                  >
                    *This doesn’t look like a phone number*
                  </p>
                </form>
              </div>
              <Button
                className="site-btn login-btn freefix"
                variant="contained"
                onClick={() => {
                  navigate("/pricingpremium")
                }}
                style={{
                  backgroundColor: "#EA745B",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginBottom: "50px",
                }}
                startIcon={<BusinessCenterIcon />}
              >
                Programs Available
              </Button>
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
                Her doctoral thesis is : Knowledge Management and Innovation on
                Firm Performance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5em" }}>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
