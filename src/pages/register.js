import React, { useState } from "react"
import Button from "@material-ui/core/Button"
// import "../assets/css/styles.css"
import DoneIcon from "@material-ui/icons/Done"
import { navigate } from "gatsby"
import PhoneInput from "react-phone-input-2"
import Head from "../components/Head/Head"
import "react-phone-input-2/lib/style.css"
// import Dash from "../assets/img/dash.svg"
//import { localStorageMemory } from "localstorage-memory"

const Register = () => {
  // const [quizDash, setQuiz] = useState([])
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    requestCall: false,
  })

  var name = formData.name
  var email = formData.email
  var phone = formData.phone

  const VALIDATORS = {
    NAME: input => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(input),
    EMAIL: input =>
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input
      ),
    PHONE: input =>
      // eslint-disable-next-line no-useless-escape
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(input),
    DESCRIPTION: input => input && input.length >= 100,
  }

  const isSignUpValid = () =>
    name &&
    email &&
    phone &&
    VALIDATORS.NAME(name) &&
    VALIDATORS.EMAIL(email) &&
    VALIDATORS.PHONE(phone)

  const enabled = isSignUpValid()
  // useEffect(() => {
  //   //////console.log(formData)
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
  const handlePhoneChange = (phone, value) => {
    setFormData({ ...formData, phone: phone })
    //console.log(formData)
  }
  const formValueChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    //console.log(formData)

    ////console.log(formData)
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
    //////console.log(formData)
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(formData))
    }
    // setShow(true)
    // localStorage.setItem("user", JSON.stringify(formData))
    navigate("/dashboard")
  }

  //   const q1A = [];

  return (
    // <header className="masthead" style={{ paddingTop: "20px" }}>
    <div>
      <Head />
      {/* <img src={Dash} id="bgdash" alt="" /> */}
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
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      onChange={formValueChange}
                      required
                    />
                  </div>
                  <div className="group-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
                      placeholder="johndoe@gmail.com"
                      required
                      onChange={formValueChange}
                    />
                  </div>
                  <div className="group-input">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <PhoneInput
                      placeholder="+12 123 456 7890"
                      country="us"
                      // value={phoneValue}
                      inputStyle={{ height: "50px", width: "100%" }}
                      // flags={flags}
                      inputProps={{
                        name: "phone",
                        required: true,
                        // pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      }}
                      onChange={handlePhoneChange}
                    />
                    {/* <input
                      type="tel"
                      required
                      onChange={formValueChange}
                      pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                      name="phone"
                      placeholder="+12 123 456 7890"
                    /> */}
                  </div>
                  <Button
                    type="submit"
                    className="site-btn login-btn"
                    variant="contained"
                    disabled={!enabled}
                    style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                    startIcon={<DoneIcon />}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </header>
  )
}

export default Register
