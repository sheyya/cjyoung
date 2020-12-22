import React from "react"
import Button from "@material-ui/core/Button"
import "../assets/css/styles.css"
import { navigate } from "gatsby"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import Head from "../components/Head/Head"
import axios from "axios"
import PUp from "../images/pricing.svg"
import { Link } from "gatsby"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Princingfree = () => {
  // const [showPhone, setShowPhone] = useState(false)
  // const [spackage, setPackage] = useState("")

  const waittoast = () => {
    toast.success("Please wait!", {
      className: "custom-toast",
      draggable: "true",
      closeOnClick: "true",

      position: toast.POSITION.TOP_CENTER,
    })
  }

  const errortoast = () => {
    toast.error("Something went Wrong!", {
      className: "custom-toast",
      draggable: "true",
      closeOnClick: "true",

      position: toast.POSITION.TOP_CENTER,
    })
  }

  const selectOPtion = option => {
    let user
    let questions
    let selectedPackage
    let config

    if (typeof window !== "undefined") {
      let q1raw = localStorage.getItem("1").split(",").filter(Boolean)

      let q2raw = localStorage.getItem("2").split(",").filter(Boolean)

      let q3raw = localStorage.getItem("3").split(",").filter(Boolean)

      let q4raw = localStorage.getItem("4").split(",").filter(Boolean)

      let q5raw = localStorage.getItem("5").split(",").filter(Boolean)
      // setPackage(option)
      // localStorage.setItem("user", JSON.stringify(formData))
      localStorage.setItem("package", option)
      // if (formData.phone == null) {
      //   setShowPhone(true)
      // } else {
      user = JSON.parse(localStorage.getItem("user"))
      questions = { q1: q1raw, q2: q2raw, q3: q3raw, q4: q4raw, q5: q5raw }
      selectedPackage = localStorage.getItem("package")

      config = { questions: questions, selectedPackage: selectedPackage }
    }

    console.log(config)

    let data = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      config: JSON.stringify(config),
    }
    console.log(data)

    if (typeof window !== "undefined") {
      localStorage.setItem("data", JSON.stringify(data))
    }
    //console.log(data)
    waittoast()
    return new Promise((resolve, reject) => {
      return axios
        .post(
          `https://enhpwk64el.execute-api.us-east-1.amazonaws.com/dev/log`,
          data
        )
        .then(result => {
          resolve({ code: 200, message: result.data.message })
          // console.log(result.data.id)
          if (typeof window !== "undefined") {
            localStorage.setItem("id", JSON.stringify(result.data.id))
          }
          //console.log("success")
          // setShow(false)
          // setShowPhone(false)
          navigate("/thankyou")
        })
        .catch(err => {
          console.log("Failed", err)
          errortoast()
          reject({ code: 0, error: err })
        })
    })
    // }
  }

  if (typeof window !== "undefined") {
    //console.log("we are running on the client")
  } else {
    //console.log("we are running on the server")
  }

  return (
    <div>
      <Head />
      <img src={PUp} id="bgu" alt="" />
      <header className="masthead">
        <div className="container h-100">
          <ToastContainer
            style={{ color: "white", fontWeight: "500", textAlign: "center" }}
          />
          <div className=" h-100">
            <div className="mainPricing">
              <h2 className="freepricingTitle text-center">
                FIND THE PERFECT PLAN FOR YOUR BUSINESS
                <hr
                  style={{
                    border: "4px solid #2F2E2E",
                    width: "7%",
                    borderRadius: "5px",
                  }}
                />
                <Link
                  to="/pricing"
                  className="font-weight-500 text-dark mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Other Packages
                </Link>
              </h2>

              <div className="row h-100">
                <div className="col-md-6 col-xl-4 mx-auto">
                  <div className="pricingBlock">
                    <div className="priceName">
                      <p className="priceType">FREE</p>
                      <p>Consultation</p>
                    </div>
                    <div className="pBody my-auto">
                      <div className="priceBody">
                        <div style={{ display: "flex" }}>
                          <CheckCircleIcon />
                          <p>30 minute consultation with link to calendar</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <CheckCircleIcon />{" "}
                          <p>
                            Discuss the employee issues you face with Cindy
                            Young
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <CheckCircleIcon />{" "}
                          <p>
                            Get access to recorded interviews with experts who
                            discuss common effective solutions to problems
                          </p>
                        </div>

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
              </div>
              {/* <Modal
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
               */}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Princingfree
