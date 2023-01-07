import React, { useRef, useState } from 'react'
import styles from './pinInput.module.css'
import PropTypes from 'prop-types'

let sty = {}
let otpGetted = false

const PinInput = ({ length, charLength }) => {
  const [pinLength] = useState(new Array(length).fill(''))
  const [otp, setOtp] = useState('')
  const inputRef = useRef([])

  const focusHandler = (e, index) => {
    pinLength[index] = e.target.value
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus()
    }
    if (index === length - 1) {
      otpGetted = true
      sty = { color: '#69db7c', border: '2px solid #69db7c' }
    }
    setOtp(pinLength.join('').toUpperCase())
  }
  const backspaceHandler = (e, index) => {
    pinLength[index] = e.target.value
    otpGetted = false
    if (index > 0) {
      inputRef.current[index - 1].focus()
    }
    if (index === length - 1) {
      sty = {}
    }
    setOtp(pinLength.join(''))
  }

  const keysHandler = (e, index) => {
    if (e.keyCode === 8) {
      backspaceHandler(e, index)
    } else {
      focusHandler(e, index)
    }
  }

  const pasteHandler = (e) => {
    let data = e.clipboardData
      .getData('text')
      .split('')
      .filter((ele, index) => index < length)

    data.forEach((ele, index) => {
      pinLength[index] = ele
      inputRef.current[index].value = ele
      if (index < length - 1) {
        inputRef.current[index].focus()
      }
      if (index === length - 1) {
        otpGetted = true
        sty = { color: '#69db7c', border: '2px solid #69db7c' }
      }
    })
  }

  return (
    <div>
      <h1>ENTER OTP </h1>
      <div className={styles.pinBox}>
        {pinLength.length > 0 &&
          pinLength.map((ele, index) => {
            return (
              <input
                onPaste={pasteHandler}
                style={sty}
                disabled={otpGetted}
                ref={(e) => {
                  inputRef.current[index] = e
                }}
                key={index}
                type="text"
                onKeyUp={(e) => keysHandler(e, index)}
                maxLength={charLength}
              />
            )
          })}
      </div>
      <h2>OTP : {otp}</h2>
    </div>
  )
}

export default PinInput

PinInput.protoType = {
  length: PropTypes.number.isRequired,
  charLength: PropTypes.number,
}
