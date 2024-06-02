const firebaseConfig = {
    apiKey: "AIzaSyCWm3qMUuKbZsQEzqs7qk6niAHjxA2aVAc",
    authDomain: "login-9e18f.firebaseapp.com",
    projectId: "login-9e18f",
    storageBucket: "login-9e18f.appspot.com",
    messagingSenderId: "869933563476",
    appId: "1:869933563476:web:9b6f90058af183632c37c1",
    measurementId: "G-2HYKTCLVSG"
};

firebase.initializeApp(firebaseConfig); // Initialize Firebase
const auth = firebase.auth(); // Get Firebase Auth instance
const database = firebase.database(); // Get Firebase Database instance

// Set up our register function
function register() {
    // Get all our input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const full_name = document.getElementById('full_name').value;
    const reg_no = document.getElementById('reg_no').value;
    const New_to_Campus = document.getElementById('New_to_Campus').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or Password is invalid!');
        return; // Don't continue running the code
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser;
            // Add this user to Firebase Database
            var database_ref = database.ref();
            // Create user data
            var user_data = {
                email: email,
                full_name: full_name,
                reg_no: reg_no,
                New_to_Campus: New_to_Campus,
                last_login: Date.now()
            };
            database_ref.child('users/' + user.uid).set(user_data)
                .then(() => {
                    alert('User Created!');
                });
        })
        .catch(function(error) {
            // Handle error here
            console.error("Error creating user:", error);
        });
}

// Set up our login function
function login() {
    // Get email and password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in user with email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.replace("https://67da0626-dfd1-4093-ba41-3df44e69b1cf-00-p7vnztgv0wid.pike.replit.dev/");
            // Redirect to home page or perform any other action after login
            // window.location.href = '/home.html';
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Login Failed: ' + errorMessage);
        });
}

// Validate Functions
function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email); // Returns true if email is valid, false otherwise
}

function validate_password(password) {
    // Firebase requires password length to be greater than or equal to 6
    return password.length >= 6;
}

function validate_field(field) {
    return field && field.length > 0; // Returns true if field is not null and has length greater than 0
}