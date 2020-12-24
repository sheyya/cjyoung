import React, { useEffect, useState } from "react"
import UpdateIcon from "@material-ui/icons/Update"
import "../assets/css/styles.css"
import Button from "@material-ui/core/Button"
import axios from "axios"
import * as path from "path"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import Head from "../components/Head/Head"
import { ToastContainer, toast } from "react-toastify"
import HomeIcon from "@material-ui/icons/Home"
import "react-toastify/dist/ReactToastify.css"
import { navigate } from "gatsby"

const Thankyou = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "-",
    phone: "-",
  })
  const [datal, setData] = useState({ config: "" })
  const [id, setId] = useState()

  const [emailvalid, setEmailvalid] = useState(true)
  const [phonevalid, setPhonevalid] = useState(true)

  const formValueChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    setEmailvalid(true)
    //console.log(formData)
  }

  const handlePhoneChange = (phone, value) => {
    setFormData({ ...formData, phone: phone })
    setPhonevalid(true)

    //console.log(formData)
  }

  const waittoast = () => {
    toast.success("Updated!", {
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

  const nodatatoast = () => {
    toast.error("Please complete the questionnaire first!", {
      className: "custom-toast",
      draggable: "true",
      closeOnClick: "true",

      position: toast.POSITION.TOP_CENTER,
    })
  }

  var uemail = formData.email
  var uphone = formData.phone

  const VALIDATORS = {
    EMAIL: input =>
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input
      ),
    PHONE: input =>
      // eslint-disable-next-line no-useless-escape
      /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(
        input
      ),
    DESCRIPTION: input => input && input.length >= 100,
  }

  const isSignUpValid = () =>
    uemail && uphone && VALIDATORS.EMAIL(uemail) && VALIDATORS.PHONE(uphone)

  // const enabled = isSignUpValid()

  const isEmail = () => {
    if (!VALIDATORS.EMAIL(uemail)) {
      setEmailvalid(false)
    }
    // console.log(namevalid)
  }

  const isPhone = () => {
    if (!VALIDATORS.PHONE(uphone)) {
      setPhonevalid(false)
    }
    // console.log(namevalid)
  }

  const updateData = async event => {
    event.preventDefault()

    isEmail()
    isPhone()
    if (isSignUpValid()) {
      let user = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }
      // console.log(datal.config)
      console.log("--------")

      if (datal.config !== "") {
        console.log("////////")

        let datalconfig = JSON.parse(datal.config)
        //console.log(datalconfig)

        let questions = datalconfig.questions
        let selectedPackage = datalconfig.selectedPackage
        let requestCall = datalconfig.requestCall

        let config = {
          questions: questions,
          selectedPackage: selectedPackage,
          requestCall: requestCall,
        }

        var datan = {
          config: {
            config: JSON.stringify(config),
          },
          email: user.email,
          phone: user.phone,
        }

        // console.log(id)
        console.log(datan)

        try {
          const response = await axios({
            method: "PUT",
            url: path.join(
              "https://enhpwk64el.execute-api.us-east-1.amazonaws.com/dev/log",
              id
            ),
            data: datan,
          })

          console.log(response.data)
          waittoast()
          setTimeout(
            function () {
              //Start the timer
              navigate("/")
            }.bind(this),
            3350
          )
        } catch (error) {
          const msg = "Server Error - Failed to update form information."
          console.error(msg)
          console.error(error)
          errortoast()
        }
      } else {
        nodatatoast()
        setTimeout(
          function () {
            //Start the timer
            navigate("/")
          }.bind(this),
          3350
        )
      }
      // console.log(data)

      // return new Promise((resolve, reject) => {
      //   return axios
      //     .put(
      //       `https://enhpwk64el.execute-api.us-east-1.amazonaws.com/dev/log/${id}`,

      //       data,
      //       {
      //         headers: {
      //           "Access-Control-Allow-Headers": "*",
      //           "Access-Control-Allow-Methods": "GET,PUT,POST",
      //           "Access-Control-Allow-Origin": "*",
      //           "Content-Type": "application/json",
      //         },
      //       }
      //     )
      //     .then(result => {
      //       resolve({ code: 200, message: result.data.message })
      //       //console.log("success")
      //       //console.log(result)

      //       waittoast()
      //     })
      //     .catch(err => {
      //       //////console.log("Failed", err)
      //       errortoast()
      //       reject({ code: 0, error: err })
      //     })
      // })
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      if (typeof window !== "undefined") {
        const email = JSON.parse(localStorage.getItem("user")).email
        const phone = JSON.parse(localStorage.getItem("user")).phone
        const name = JSON.parse(localStorage.getItem("user")).name
        const udata = JSON.parse(localStorage.getItem("data"))
        const idval = JSON.parse(localStorage.getItem("id"))
        setId(idval)
        setFormData({ name, email, phone })
        setData(udata)
        console.log(datal)
      }
    }
    // ////console.log("///////", phone, email)
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
        <ToastContainer
          autoClose={3000}
          style={{ color: "white", fontWeight: "500", textAlign: "center" }}
        />
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
                <p
                  style={{
                    display: !emailvalid ? "block" : "none",
                    fontSize: "12px",
                    textAlign: "center",
                    color: "red",
                    fontWeight: "500",
                  }}
                >
                  *This doesn’t look like an email*
                </p>
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
                  <p
                    style={{
                      display: !phonevalid ? "block" : "none",
                      fontSize: "12px",
                      textAlign: "center",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    *This doesn’t look like an phone number*
                  </p>
                </div>

                <Button
                  type="submit"
                  className="site-btn login-btn"
                  // disabled={!enabled}
                  variant="contained"
                  style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                  startIcon={<UpdateIcon />}
                >
                  Update
                </Button>
                <Button
                  className="site-btn login-btn"
                  variant="contained"
                  onClick={() => {
                    navigate("/")
                  }}
                  style={{
                    backgroundColor: "#1ABC9C",
                    color: "#ffffff",
                    marginLeft: "20px",
                  }}
                  startIcon={<HomeIcon />}
                >
                  Home
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
