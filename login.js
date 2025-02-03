const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const User = require("./models/User"); 

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secretKey", resave: false, saveUninitialized: true }));

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/auth", async (req, res) => {
  const { full_name, email, password, reg_no, New_to_Campus, action, latitude, longitude } = req.body;

  if (action === "register") {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      full_name,
      email,
      password: hashedPassword,
      reg_no,
      New_to_Campus,
      location: { latitude, longitude },
    });
    await newUser.save();
    res.send("Registration successful! Please log in.");
  } else if (action === "login") {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send("User not found!");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send("Invalid credentials!");
    }
    
    // Update user location on login
    user.location = { latitude, longitude };
    await user.save();
    
    req.session.user = user;
    res.redirect("/index");
  }
});

app.get("/index", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("index", { user: req.session.user });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
