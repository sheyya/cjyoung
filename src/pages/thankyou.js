import React, { useEffect, useState } from "react"
import "../assets/css/styles.css"

const Thankyou = () => {
  const [formData, setFormData] = useState({
    email: "-",
    phone: "-",
  })

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      if (typeof window !== "undefined") {
        const email = JSON.parse(localStorage.getItem("user")).email
        const phone = JSON.parse(localStorage.getItem("user")).phone
        setFormData({ email, phone })
      }
    }
    // //console.log("///////", phone, email)
    if (typeof window !== "undefined") {
      localStorage.clear()
    }
  }, [])

  return (
    <header className="thank">
      {/* <div
        className="conatiner blockThank"
        style={{ verticalAlign: "middle", height: "100%" }}
      > */}
      <div className="conatiner">
        <div className="jumbotron text-center">
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
              <p>{formData.email}</p>
            </div>
            <div>
              <p>{formData.phone}</p>
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
