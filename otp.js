const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const client = require("twilio")(
  "AC55096619f261bc8898e79c3172d04d1e",
  "8d4654a99d49fd9c507885a2e72a6988",
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add JSON body parser
app.use(cors());

// Function to generate a random 4-digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

// Store OTPs mapped to mobile numbers
const otpMap = new Map();

app.post("/send-otp", (req, res) => {
  const { mobileNo } = req.body;
  const otp = generateOTP();

  client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      to: `+91${mobileNo}`,
      from: "+12674634454",
    })
    .then((message) => {
      console.log(`OTP sent with SID: ${message.sid}`);
      otpMap.set(mobileNo, otp.toString()); // Store OTP with mobile number as a string
      res.send(`OTP sent with SID: ${message.sid}`);
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
      res.status(500).send("Error sending OTP");
    });
});

// Route to verify OTP
app.post("/verify-otp", (req, res) => {
  const { mobileNo, otp } = req.body;
  const storedOTP = otpMap.get(mobileNo);

  // Check if storedOTP exists and it matches the provided OTP
  if (storedOTP && otp === storedOTP) {
    res.send("OTP verified successfully");
  } else {
    res.status(400).send("OTP verification failed");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});