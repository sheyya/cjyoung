import React, { useEffect, useState } from "react"
import "../assets/css/styles.css"

const Thankyou = () => {
  const [formData, setFormData] = useState({
    email: "-",
    phone: "-",
  })

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      const email = JSON.parse(localStorage.getItem("user")).email
      const phone = JSON.parse(localStorage.getItem("user")).phone
      setFormData({ email, phone })
    }
    // console.log("///////", phone, email)
    localStorage.clear()
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
          <p>You will hear from us shortly at</p>
          <div className="row userdetail">
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
          </div>
        </div>
        {/* </div>{" "}
         */}
      </div>
    </header>
  )
}

export default Thankyou
