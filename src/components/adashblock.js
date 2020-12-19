import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ErrorIcon from "@material-ui/icons/Error"
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
  //console.log("//////", answers, correctA)

  ////console.log("----------", answers.slice(-1, 0))

  //   if(answers.slice(-1))

  ////console.log("------", index)
  ////console.log(sid)
  //console.log(answers)
  //console.log(crr)

  if (answers === crr.toString()) {
    Icon = "correct"
  } else {
    Icon = "incorrect"
  }
  ////console.log("Icon", Icon)

  const icondisplay = () => {
    if (Icon === "correct") {
      return <CheckCircleIcon style={{ color: "#1abc9c" }} />
    }
    if (Icon === "incorrect") {
      return <ErrorIcon style={{ color: "#f1c40f" }} />
    } else {
      return <CheckCircleIcon style={{ color: "#1abc9c" }} />
    }
  }
  return (
    <div className="answers">
      <div className="icon">{icondisplay()}</div>
      <p style={{ fontSize: "13px", fontWeight: "400" }}>{answers}</p>
    </div>
  )
}

export default Adashblock
