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
  onChangeComment,
}) => {
  var i = -1
  var j = 0
  return (
    <div>
      <div className="qblockQ">
        <h2>{question}</h2>
        <h4 className="info">{info}</h4>
      </div>
      <div className="answers">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" root>
            {answers.map(answer => {
              i += 1
              j += 1
              return (
                <FormControlLabel
                  value={answers.slice(i, j)}
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
              <label>Other</label>
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
