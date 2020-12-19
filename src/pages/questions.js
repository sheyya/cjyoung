import React, { useEffect, useState } from "react"
import "../assets/css/styles.css"
import Button from "@material-ui/core/Button"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import Qblock from "../components/qblock"
// import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import QUp from "../images/qUp.svg"
import { ToastContainer, toast } from "react-toastify"
import QDown from "../images/qDown.svg"
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
  const [answer, setAnswer] = useState([])
  const [comment, setComment] = useState("")
  const [qVal, setqVal] = useState(1)
  const [showComment, setshowComment] = useState(true)

  const [checkedq1, setCheckedq1] = useState(false)
  const [checkedq2, setCheckedq2] = useState(false)
  const [checkedq3, setCheckedq3] = useState(false)
  const [checkedq4, setCheckedq4] = useState(false)
  const [checkedq5, setCheckedq5] = useState(false)
  const [checkedq6, setCheckedq6] = useState(false)

  const handleCheckbox = e => {
    //console.log(checkedq1)
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
    let data = answer
    //console.log(data)
    if (e.target.checked) {
      data.push(e.target.value)
      setAnswer(data)
    } else if (answer != null) {
      ////console.log("removed", answer)
      setAnswer(answer.filter(item => item !== e.target.value))
    }
    // ////console.log(answer);
  }
  const onChangeComment = e => {
    // ////console.log(data);
    // data.push(e.target.value);
    setComment(e.target.value)
  }

  const nxtBtnClick = () => {
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
      answer.push("cmt: " + comment)
      if (sid === 3) {
        setshowComment(false)
      }
      // let ques = quiz.slice(sid, eid)
      let adata = answer
      // let data = ques[0].question
      var data = qVal
      var datan = data + 1
      setqVal(datan)
      if (typeof window !== "undefined") {
        localStorage.setItem(qVal, adata)
      } else {
        //console.log("we are running on the server")
      }
      setAnswer([])
      setComment("")
      setCheckedq1(false)
      setCheckedq2(false)
      setCheckedq3(false)
      setCheckedq4(false)
      setCheckedq5(false)
      setCheckedq6(false)
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

  const classes = useStyles()

  return (
    <div>
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
                />
              ))}
              <div
                className="comment"
                style={{ display: showComment ? "block" : "none" }}
              >
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
                    setCheckedq1(false)
                    setCheckedq2(false)
                    setCheckedq3(false)
                    setCheckedq4(false)
                    setCheckedq5(false)
                    setCheckedq6(false)
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
