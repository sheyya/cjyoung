import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ErrorIcon from "@material-ui/icons/Error"
// import LiveHelpIcon from "@material-ui/icons/LiveHelp"
import HelpIcon from "@material-ui/icons/Help"
import React from "react"

const Adashblock = ({ answers, correctA, index }) => {
  var Icon
  //   var crr = correctA;
  //   if (!correctA === undefined) {
  var sid = correctA.indexOf(answers)
  var eid = sid + 1
  var crr = correctA.slice(sid, eid)
  //   } else {
  //     crr = ["undefined"];
  //   }
  ////console.log("//////", answers, correctA)

  //////console.log("----------", answers.slice(-1, 0))

  //   if(answers.slice(-1))

  //////console.log("------", index)
  //////console.log(sid)
  ////console.log(answers)
  ////console.log(crr)
  var showCmt = true
  if (answers === crr.toString()) {
    Icon = "correct"
  } else {
    Icon = "incorrect"
    if (answers.slice(0, 3) === "cmt") {
      answers = answers.substring(4)
      Icon = "comment"
      //console.log(answers)
      if (!answers || 1 === answers.length) {
        showCmt = false
      }
      //console.log(answers.length)

      //console.log("----")
    }
  }
  //////console.log("Icon", Icon)

  const icondisplay = () => {
    if (Icon === "correct") {
      return <CheckCircleIcon style={{ color: "#1abc9c" }} />
    }
    if (Icon === "incorrect") {
      return <ErrorIcon style={{ color: "#f1c40f" }} />
    } else {
      return (
        <HelpIcon
          style={{
            display: showCmt ? "inline-flex" : "none",

            color: "#57606f",
          }}
        />
      )
    }
  }
  return (
    <div
      className="answers"
      style={{
        height: showCmt ? "auto" : "0",
        display: showCmt ? "flex" : "none",
      }}
    >
      <div className="icon my-auto">{icondisplay()}</div>
      <p className="my-auto" style={{ fontSize: "13px", fontWeight: "400" }}>
        {answers}
      </p>
    </div>
  )
}

export default Adashblock
