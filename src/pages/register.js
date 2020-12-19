import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import "../assets/css/styles.css"
import DoneIcon from "@material-ui/icons/Done"
import { navigate } from "gatsby"
import Dash from "../assets/img/dash.svg"
//import { localStorageMemory } from "localstorage-memory"
import Adashblock from "../components/adashblock"
import Image from "../images/cjyoung.jpg"
import axios from "axios"
import Modal from "react-bootstrap/Modal"

const Register = () => {
  // const [quizDash, setQuiz] = useState([])
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
  })

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
    // setShow(true)
    // localStorage.setItem("user", JSON.stringify(formData))
    navigate("/dashboard")
  }

  //   const q1A = [];

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
                      type="tel"
                      required
                      onChange={formValueChange}
                      pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
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
