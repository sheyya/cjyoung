import React, { useEffect, useState } from "react"
import Button from "@material-ui/core/Button"
import "../assets/css/styles.css"
import DoneIcon from "@material-ui/icons/Done"
import { navigate } from "gatsby"
import Dash from "../assets/img/dash.svg"
import Adashblock from "../components/adashblock"
import Image from "../images/cjyoung.jpg"

const RegBlock = () => {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
  })

  const submitData = async event => {
    event.preventDefault()
    const uemail = event.target.email.value
    const uname = event.target.name.value
    const uphone = event.target.phone.value
    //console.log(formData)

    await setFormData({
      email: uemail,
      name: uname,
      phone: uphone,
    })
    //console.log(formData)
    localStorage.setItem("user", JSON.stringify(formData))
  }

  return (
    <div className="RegBox">
      <div className="Title">
        <h3>
          We’ll send the{" "}
          <div style={{ color: "#d63031", display: "inline" }}>diagnostic</div>{" "}
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
              // onChange={getformData}
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
              // onChange={getformData}
            />
          </div>
          <div className="group-input">
            <label>Phone Number</label>
            <input
              type="text"
              required
              // onChange={getformData}
              name="phone"
              placeholder="0712345678"
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
  )
}

export default RegBlock
