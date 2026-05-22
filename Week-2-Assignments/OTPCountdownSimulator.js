/* 2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends */
console.log("OTP Sent Successfully")
let secs = 10
let intervalId = setInterval(() => {
    secs--;
    console.log(`OTP can be resend after ${secs} secs`)
    if (secs === 0) {
        console.log("Resend OTP")
        clearInterval(intervalId)
    }
}, 1000)

