import Checkbox from "@material-ui/core/Checkbox"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import React from "react"

const Qblock = ({
  question,
  answers,
  info,
  handleCheckbox,
  show,
  check1,
  check2,
  check3,
  check4,
  check5,
  check6,
  onChangeComment,
}) => {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   setCount(count + 1)
  // }, [callback]);
  var checkq = [check1, check2, check3, check4, check5, check6]
  //console.log(checkq)

  // //console.log(count)

  var i = -1
  var j = 0
  const infoPrint = () => {
    // //console.log("called", info[1])

    if (info[1]) {
      return <h4 className="info-choose">{info[1]}</h4>
    }
  }
  // const [achecked, setAChecked] = useState(false)
  // setAChecked(check)
  return (
    <div>
      <div className="qblockQ">
        <h2>{question}</h2>
        <h4 className="info">{info[0]}</h4>
        {infoPrint()}
      </div>
      <div className="answers">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" root>
            {answers.map(answer => {
              var check = checkq[j]
              i += 1
              j += 1
              return (
                <FormControlLabel
                  value={answers.slice(i, j)}
                  checked={check}
                  // onClick={setAChecked(old => !old)}
                  onChange={e => handleCheckbox(e)}
                  control={<Checkbox color="primary" />}
                  label={answers.slice(i, j)}
                  labelPlacement="end"
                />
              )
            })}
            <div
              className="comment"
              style={{ display: !show ? "inline-flex" : "none" }}
            >
              <label htmlFor="other">Other</label>
              <input
                style={{ width: "100%" }}
                type="text"
                name="uComment"
                placeholder="Type..."
                onChange={e => onChangeComment(e)}
              />
            </div>
          </FormGroup>
        </FormControl>
      </div>
    </div>
  )
}

export default Qblock
