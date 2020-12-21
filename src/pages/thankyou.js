import React, { useEffect, useState } from "react"
import UpdateIcon from "@material-ui/icons/Update"
import "../assets/css/styles.css"
import Button from "@material-ui/core/Button"
import axios from "axios"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import Head from "../components/Head/Head"

const Thankyou = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "-",
    phone: "-",
  })

  const formValueChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handlePhoneChange = (phone, value) => {
    setFormData({ ...formData, phone: phone })
    console.log(formData)
  }

  const updateData = event => {
    event.preventDefault()

    let user = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    }

    return new Promise((resolve, reject) => {
      return axios
        .patch(
          `https://enhpwk64el.execute-api.us-east-1.amazonaws.com/dev/log`,
          { user: user }
        )
        .then(result => {
          resolve({ code: 200, message: result.data.message })
          console.log("success")
        })
        .catch(err => {
          ////console.log("Failed", err)

          reject({ code: 0, error: err })
        })
    })
  }

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      if (typeof window !== "undefined") {
        const email = JSON.parse(localStorage.getItem("user")).email
        const phone = JSON.parse(localStorage.getItem("user")).phone
        const name = JSON.parse(localStorage.getItem("user")).name
        setFormData({ name, email, phone })
      }
    }
    // //console.log("///////", phone, email)
    if (typeof window !== "undefined") {
      localStorage.clear()
    }
  }, [])

  return (
    <header className="thank">
      <Head />
      {/* <div
        className="conatiner blockThank"
        style={{ verticalAlign: "middle", height: "100%" }}
      > */}
      <div className="conatiner">
        <div
          className="jumbotron text-center"
          style={{ backgroundColor: "rgba(255, 198, 191, 0.856)" }}
        >
          <h1
            className="display-3"
            style={{ marginTop: "2em", marginBottom: "1em", fontWeight: "500" }}
          >
            Thank You!
          </h1>
          <p style={{ fontSize: "19px", fontWeight: "500" }}>
            You will hear from us shortly at
          </p>
          <div className="row userdetail">
            <div>
              <form onSubmit={updateData}>
                <div className="comment" style={{ display: "block" }}>
                  <label htmlFor="other" style={{ display: "block" }}>
                    Email :{" "}
                  </label>
                  <input
                    style={{
                      width: "300px",
                      backgroundColor: "#ffece9b2",
                      height: "40px",
                      marginLeft: "0",
                    }}
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={e => formValueChange(e)}
                  />
                </div>
                <div className="comment">
                  <label htmlFor="other">Phone : </label>
                  {/* <input
                    style={{ width: "fit-content" }}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={e => formValueChange(e)}
                  /> */}
                  {/* <div className="mx-auto"> */}
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
                  style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                  startIcon={<UpdateIcon />}
                >
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* </div>{" "}
         */}
      </div>
    </header>
  )
}

export default Thankyou
