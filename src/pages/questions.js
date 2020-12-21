import React, { useEffect, useState } from "react"
import "../assets/css/styles.css"
import Button from "@material-ui/core/Button"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import Qblock from "../components/qblock"
// import { useHistory } from "react-router-dom";
import HelpIcon from "@material-ui/icons/Help"
import { makeStyles } from "@material-ui/core/styles"
import QUp from "../images/qUp.svg"
import { ToastContainer, toast } from "react-toastify"
import QDown from "../images/qDown.svg"
import Head from "../components/Head/Head"
import "react-toastify/dist/ReactToastify.css"
//import { localStorageMemory } from "localstorage-memory"
import { navigate } from "gatsby"
import JSONData from "../../content/data.json"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const Questions = () => {
  const [quiz, setQuiz] = useState([])
  const [sid, setSid] = useState(0)
  const [eid, setEid] = useState(1)
  const [btnName, setBtn] = useState("Next")

  const [q1answer, setq1Answer] = useState([])
  const [q2answer, setq2Answer] = useState([])
  const [q3answer, setq3Answer] = useState([])
  const [q4answer, setq4Answer] = useState([])
  const [q5answer, setq5Answer] = useState([])

  const [comment, setComment] = useState("")
  // const [qVal, setqVal] = useState(1)
  const [temp, setTemp] = useState(false)
  const [temp1, setTemp1] = useState(false)
  const [showComment, setshowComment] = useState(true)
  console.log(sid, eid)

  // const [position, setPosition] = useState(0)
  // const [trig, setTrig] = useState(false)

  const [checkedq1, setCheckedq1] = useState(false)
  const [checkedq2, setCheckedq2] = useState(false)
  const [checkedq3, setCheckedq3] = useState(false)
  const [checkedq4, setCheckedq4] = useState(false)
  const [checkedq5, setCheckedq5] = useState(false)
  const [checkedq6, setCheckedq6] = useState(false)

  const [disableq1, setdisableq1] = useState(false)
  const [disableq2, setdisableq2] = useState(false)
  const [disableq3, setdisableq3] = useState(false)

  //states to store checked value temporary
  const [q1chk1, setq1Chk1] = useState(false)
  const [q1chk2, setq1Chk2] = useState(false)
  const [q1chk3, setq1Chk3] = useState(false)
  const [q1chk4, setq1Chk4] = useState(false)
  const [q1chk5, setq1Chk5] = useState(false)
  const [q1chk6, setq1Chk6] = useState(false)
  const [q1cmt, setq1cmt] = useState("")

  const [q2chk1, setq2Chk1] = useState(false)
  const [q2chk2, setq2Chk2] = useState(false)
  const [q2chk3, setq2Chk3] = useState(false)
  const [q2chk4, setq2Chk4] = useState(false)
  const [q2chk5, setq2Chk5] = useState(false)
  const [q2cmt, setq2cmt] = useState("")

  const [q3chk1, setq3Chk1] = useState(false)
  const [q3chk2, setq3Chk2] = useState(false)
  const [q3chk3, setq3Chk3] = useState(false)
  const [q3cmt, setq3cmt] = useState("")

  const [q4chk1, setq4Chk1] = useState(false)
  const [q4chk2, setq4Chk2] = useState(false)
  const [q4chk3, setq4Chk3] = useState(false)
  const [q4chk4, setq4Chk4] = useState(false)
  const [q4cmt, setq4cmt] = useState("")

  const [q5chk1, setq5Chk1] = useState(false)
  const [q5chk2, setq5Chk2] = useState(false)
  const [q5chk3, setq5Chk3] = useState(false)
  const [q5chk4, setq5Chk4] = useState(false)

  // const [q5select, setq5select] = useState()

  // useEffect(() => {
  var qvaln = quiz.slice(sid, eid)[0]
  // }, [q1answer, q2answer, q3answer, q4answer, q5answer])

  const handleCheckbox = e => {
    //console.log(checkedq1)
    if (sid < 4) {
      if (e.target.value === quiz.slice(sid, eid)[0].answers[0]) {
        setCheckedq1(old => !old)
      }
      if (e.target.value === quiz.slice(sid, eid)[0].answers[1]) {
        setCheckedq2(old => !old)
      }
      if (e.target.value === quiz.slice(sid, eid)[0].answers[2]) {
        setCheckedq3(old => !old)
      }
      if (e.target.value === quiz.slice(sid, eid)[0].answers[3]) {
        setCheckedq4(old => !old)
      }
      if (e.target.value === quiz.slice(sid, eid)[0].answers[4]) {
        setCheckedq5(old => !old)
      }
      if (e.target.value === quiz.slice(sid, eid)[0].answers[5]) {
        setCheckedq6(old => !old)
      }
    } else {
      setq5Answer(e.target.value)
      if (e.target.value === "CEO / Owner / Investor") {
        setCheckedq1(old => !old)
        setCheckedq2(false)
        setCheckedq3(false)
        setCheckedq4(false)
      }
      if (e.target.value === "Manager") {
        setCheckedq1(false)
        setCheckedq2(old => !old)
        setCheckedq3(false)
        setCheckedq4(false)
      }
      if (e.target.value === "Non Managerial Employee") {
        setCheckedq1(false)
        setCheckedq2(false)
        setCheckedq3(old => !old)
        setCheckedq4(false)
      }
      if (e.target.value === "Student") {
        setCheckedq1(false)
        setCheckedq2(false)
        setCheckedq3(false)
        setCheckedq4(old => !old)
      }
    }
    let data
    //console.log(data)
    if (sid === 0) {
      data = q1answer
      if (e.target.checked) {
        console.log("----", sid)
        if (data.indexOf(e.target.value) === -1) {
          data.push(e.target.value)
        }
        setq1Answer(data)
        console.log(q1answer)
      } else if (q1answer != null) {
        ////console.log("removed", answer)
        setq1Answer(q1answer.filter(item => item !== e.target.value))
      }
    }
    if (sid === 1) {
      data = q2answer
      if (e.target.checked) {
        console.log("----", sid)
        if (data.indexOf(e.target.value) === -1) {
          data.push(e.target.value)
        }
        setq2Answer(data)
        console.log(q2answer)
      } else if (q2answer != null) {
        ////console.log("removed", answer)
        setq2Answer(q2answer.filter(item => item !== e.target.value))
      }
    }
    if (sid === 2) {
      data = q3answer
      if (e.target.checked) {
        console.log("----", sid)
        if (data.indexOf(e.target.value) === -1) {
          if (e.target.value === "We don’t test this") {
            setCheckedq1(false)
            setCheckedq2(false)
            setdisableq1(true)
            setdisableq2(true)
            setTemp1(true)
            data = []
            data.push(e.target.value)
          } else {
            data.push(e.target.value)
          }
        }
        setq3Answer(data)
        console.log(q3answer)
      } else if (q3answer != null) {
        if (q3answer[0] === "We don’t test this") {
          console.log("called")
          setdisableq1(false)
          setdisableq2(false)
          setTemp1(false)
        }
        ////console.log("removed", answer)
        setq3Answer(q3answer.filter(item => item !== e.target.value))
      }
    }
    if (sid === 3) {
      data = q4answer
      if (e.target.checked) {
        console.log("----", sid)
        if (data.indexOf(e.target.value) === -1) {
          if (e.target.value === "None of the above") {
            setCheckedq1(false)
            setCheckedq2(false)
            setCheckedq3(false)
            setdisableq1(true)
            setdisableq2(true)
            setdisableq3(true)
            setTemp(true)
            data = []
            data.push(e.target.value)
          } else {
            data.push(e.target.value)
          }
        }
        setq4Answer(data)
        console.log(q4answer)
      } else if (q4answer != null) {
        if (q4answer[0] === "None of the above") {
          console.log("called")
          setdisableq1(false)
          setdisableq2(false)
          setdisableq3(false)
          setTemp(false)
        }
        ////console.log("removed", answer)
        setq4Answer(q4answer.filter(item => item !== e.target.value))
      }
    }
    if (sid === 4) {
      // data = q5answer
      // if (e.target.checked) {
      // console.log("----", sid)
      // if (data.indexOf(e.target.value) === -1) {
      //   data.push(e.target.value)
      // }
      // setq5Answer(q5select)
      // console.log(q5answer)
      // }
      // else if (q5answer != null) {
      //   ////console.log("removed", answer)
      //   setq5Answer(q5answer.filter(item => item !== e.target.value))
      // }
    }
    // ////console.log(answer);
  }
  const onChangeComment = e => {
    // ////console.log(data);
    // data.push(e.target.value);
    setComment(e.target.value)
    console.log("called")
  }

  const nxtBtnClick = () => {
    console.log(comment)
    let adata
    if (
      !checkedq1 &&
      !checkedq2 &&
      !checkedq3 &&
      !checkedq4 &&
      !checkedq5 &&
      !checkedq6
    ) {
      // alertalert("Please Select an answer")
      warntoast()
    } else {
      if (sid === 0) {
        setq1Chk1(checkedq1)
        setq1Chk2(checkedq2)
        setq1Chk3(checkedq3)
        setq1Chk4(checkedq4)
        setq1Chk5(checkedq5)
        setq1Chk6(checkedq6)
        setq1cmt(comment)
        console.log("-----")
        if (q1answer.indexOf("cmt: " + comment) === -1) {
          q1answer.push("cmt: " + comment)
        }
        adata = q1answer
        console.log(adata)
      }
      if (sid === 1) {
        setq2Chk1(checkedq1)
        setq2Chk2(checkedq2)
        setq2Chk3(checkedq3)
        setq2Chk4(checkedq4)
        setq2Chk5(checkedq5)
        setq2cmt(comment)
        if (q2answer.indexOf("cmt: " + comment) === -1) {
          q2answer.push("cmt: " + comment)
        }
        adata = q2answer
      }
      if (sid === 2) {
        setq3Chk1(checkedq1)
        setq3Chk2(checkedq2)
        setq3Chk3(checkedq3)
        setq3cmt(comment)
        if (q3answer.indexOf("cmt: " + comment) === -1) {
          q3answer.push("cmt: " + comment)
        }
        adata = q3answer
        setdisableq1(false)
        setdisableq2(false)
      }
      if (sid === 3) {
        setq4Chk1(checkedq1)
        setq4Chk2(checkedq2)
        setq4Chk3(checkedq3)
        setq4Chk4(checkedq4)

        setq4cmt(comment)
        if (q4answer.indexOf("cmt: " + comment) === -1) {
          q4answer.push("cmt: " + comment)
        }
        adata = q4answer
        setdisableq1(false)
        setdisableq2(false)
        setdisableq3(false)
        setshowComment(false)
      }
      if (sid === 4) {
        setq5Chk1(checkedq1)
        setq5Chk2(checkedq2)
        setq5Chk3(checkedq3)
        setq5Chk4(checkedq4)
        if (q5answer.indexOf("cmt: " + comment) === -1) {
          // q5answer.push("cmt: " + comment)
        }
        adata = q5answer
      }
      console.log(q1chk1)

      // let ques = quiz.slice(sid, eid)
      // let data = ques[0].question
      var data = sid
      var datan = data + 1
      console.log("datan", datan)

      // setqVal(datan)
      if (typeof window !== "undefined") {
        console.log("qVal", datan)

        localStorage.setItem(datan, adata)
      } else {
        //console.log("we are running on the server")
      }

      if (sid < 4 && eid < 5) {
        setEid(eid + 1)
        setSid(sid + 1)
      }
      if (sid === 3) {
        setBtn("Finish")
      }
      if (sid === 4) {
        navigate("/register")
      }

      // setAnswer([])
      // if (sid === position) {
      //   setTrig(false)
      // }
      // setComment("")
      // setCheckedq1(false)
      // setCheckedq2(false)
      // setCheckedq3(false)
      // setCheckedq4(false)
      // setCheckedq5(false)
      // setCheckedq6(false)
      // if (!trig) {
      //   setPosition(position + 1)
      // }
      // if (sid === position || position - sid === 1) {
      console.log("qvaln.questionId", qvaln.questionId)
      console.log(datan)

      if (datan + 1 === 1) {
        console.log("CALLED")

        if (q1chk1 || q1chk2 || q1chk3 || q1chk4 || q1chk5 || q1chk6) {
          setCheckedq1(q1chk1)
          setCheckedq2(q1chk2)
          setCheckedq3(q1chk3)
          setCheckedq4(q1chk4)
          setCheckedq5(q1chk5)
          setCheckedq6(q1chk6)
          setComment(q1cmt)
          console.log("--")
        } else {
          setComment("")
          setCheckedq1(false)
          setCheckedq2(false)
          setCheckedq3(false)
          setCheckedq4(false)
          setCheckedq5(false)
          setCheckedq6(false)
        }
      }

      if (datan + 1 === 2) {
        if (q2chk1 || q2chk2 || q2chk3 || q2chk4 || q2chk5) {
          setCheckedq1(q2chk1)
          setCheckedq2(q2chk2)
          setCheckedq3(q2chk3)
          setCheckedq4(q2chk4)
          setCheckedq5(q2chk5)
          setComment(q2cmt)
          console.log("done")
        } else {
          setComment("")
          setCheckedq1(false)
          setCheckedq2(false)
          setCheckedq3(false)
          setCheckedq4(false)
          setCheckedq5(false)
          setCheckedq6(false)
        }
      }
      if (datan + 1 === 3) {
        if (q3chk1 || q3chk2 || q3chk3) {
          setCheckedq1(q3chk1)
          setCheckedq2(q3chk2)
          setCheckedq3(q3chk3)
          setComment(q3cmt)
          if (temp1) {
            setdisableq1(true)
            setdisableq2(true)
          }
          if (q3chk3) {
            setdisableq1(true)
            setdisableq2(true)
          }
        } else {
          setComment("")
          setCheckedq1(false)
          setCheckedq2(false)
          setCheckedq3(false)
          setCheckedq4(false)
          setCheckedq5(false)
          setCheckedq6(false)
        }
      }
      if (datan + 1 === 4) {
        if (q4chk1 || q4chk2 || q4chk3 || q4chk4) {
          setCheckedq1(q4chk1)
          setCheckedq2(q4chk2)
          setCheckedq3(q4chk3)
          setCheckedq4(q4chk4)
          setComment(q4cmt)
          if (temp) {
            setdisableq1(true)
            setdisableq2(true)
            setdisableq3(true)
          }
          if (q4chk4) {
            setdisableq1(true)
            setdisableq2(true)
            setdisableq3(true)
          }
        } else {
          setComment("")
          setCheckedq1(false)
          setCheckedq2(false)
          setCheckedq3(false)
          setCheckedq4(false)
          setCheckedq5(false)
          setCheckedq6(false)
        }
      }
      if (datan + 1 === 5) {
        if (q5chk1 || q5chk2 || q5chk3 || q5chk4) {
          // setCheckedq1(q5chk1)
          // setCheckedq2(q5chk2)
          // setCheckedq3(q5chk3)
          // setCheckedq4(q5chk4)
        } else {
          setComment("")
          setCheckedq1(false)
          setCheckedq2(false)
          setCheckedq3(false)
          setCheckedq4(false)
          setCheckedq5(false)
          setCheckedq6(false)
        }
      }
      // setComment("")
      // setCheckedq1(false)
      // setCheckedq2(false)
      // setCheckedq3(false)
      // setCheckedq4(false)
      // setCheckedq5(false)
      // setCheckedq6(false)
      // }
      //console.log("------data----", adata)
    }
    // adata = null;
  }

  const warntoast = () => {
    toast.warn("Please select an answer!", {
      className: "custom-toast",
      draggable: "true",
      closeOnClick: "true",

      position: toast.POSITION.TOP_CENTER,
    })
  }

  // const history = useHistory();

  // const routeChange = () => {
  //   let path = `/Dashboard`;
  //   history.push(path);
  // };

  // const routeChangeHome = () => {
  //   let path = `/`;
  //   history.push(path);
  // };

  useEffect(() => {
    getquiz()
  }, [])

  const getquiz = async () => {
    setQuiz(JSONData)
  }
  // console.log(qvaln)

  const classes = useStyles()

  return (
    <div>
      <Head />
      <img src={QUp} id="bgu" alt="" />
      <img src={QDown} id="bgd" alt="" />

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <ToastContainer
              style={{ color: "black", fontWeight: "500", textAlign: "center" }}
            />
            <div className="col-lg-12 my-auto">
              {quiz.slice(sid, eid).map(quiz => (
                <Qblock
                  question={quiz.question}
                  answers={quiz.answers}
                  info={quiz.info}
                  show={showComment}
                  handleCheckbox={handleCheckbox}
                  onChangeComment={onChangeComment}
                  check1={checkedq1}
                  check2={checkedq2}
                  check3={checkedq3}
                  check4={checkedq4}
                  check5={checkedq5}
                  check6={checkedq6}
                  disable1={disableq1}
                  disable2={disableq2}
                  disable3={disableq3}
                />
              ))}
              <div
                className="comment"
                style={{ display: showComment ? "block" : "none" }}
              >
                <HelpIcon style={{ color: "#57606f" }} />
                <input
                  type="text"
                  value={comment}
                  name="uComment"
                  placeholder="Type Comment..."
                  onChange={e => onChangeComment(e)}
                />
              </div>
              <div className="nxtButton">
                <Button
                  variant="contained"
                  className={classes.margin}
                  disableElevation
                  style={{ backgroundColor: "#EA745Bt", color: "#000000" }}
                  startIcon={<KeyboardBackspaceIcon />}
                  onClick={() => {
                    ////console.log(sid)
                    console.log(sid)
                    // setTrig(true)

                    if (sid === 1) {
                      setCheckedq1(q1chk1)
                      setCheckedq2(q1chk2)
                      setCheckedq3(q1chk3)
                      setCheckedq4(q1chk4)
                      setCheckedq5(q1chk5)
                      setCheckedq6(q1chk6)
                      setComment(q1cmt)
                      console.log("--")
                    }
                    if (sid === 2) {
                      setCheckedq1(q2chk1)
                      setCheckedq2(q2chk2)
                      setCheckedq3(q2chk3)
                      setCheckedq4(q2chk4)
                      setCheckedq5(q2chk5)
                      setComment(q2cmt)
                      setdisableq1(false)
                      setdisableq2(false)
                    }
                    if (sid === 3) {
                      setdisableq1(false)
                      setdisableq2(false)
                      setdisableq3(false)
                      setCheckedq1(q3chk1)
                      setCheckedq2(q3chk2)
                      setCheckedq3(q3chk3)
                      if (temp1) {
                        setdisableq1(true)
                        setdisableq2(true)
                      }
                      if (q3chk3) {
                        setdisableq1(true)
                        setdisableq2(true)
                      }
                      setComment(q3cmt)
                    }
                    if (sid === 4) {
                      setCheckedq1(q4chk1)
                      setCheckedq2(q4chk2)
                      setCheckedq3(q4chk3)
                      setCheckedq4(q4chk4)
                      if (temp) {
                        setdisableq1(true)
                        setdisableq2(true)
                        setdisableq3(true)
                      }
                      if (q4chk4) {
                        setdisableq1(true)
                        setdisableq2(true)
                        setdisableq3(true)
                      }
                      setComment(q4cmt)
                      setshowComment(true)
                    }
                    if (sid === 5) {
                      setCheckedq1(q5chk1)
                      setCheckedq2(q5chk2)
                      setCheckedq3(q5chk3)
                      setCheckedq4(q5chk4)
                    }

                    if (sid < 5 && eid < 6) {
                      setEid(eid - 1)
                      setSid(sid - 1)
                    }
                    if (sid === 0) {
                      navigate("/")
                    }
                    if (sid < 5) {
                      ////console.log("run")

                      setBtn("Next")
                    }
                    ////console.log(eid, sid)
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#EA745B", color: "#ffffff" }}
                  startIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    nxtBtnClick()
                    ////console.log(eid, sid)
                  }}
                >
                  {btnName}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Questions
