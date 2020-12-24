import React from "react"

const ProgressBar = props => {
  const { bgcolor, completed } = props

  const containerStyles = {
    height: 20,
    width: "70%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
  }

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
    marginRight: "auto",
  }

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
