document.getElementById("contactForm").addEventListener("submit",
    function (event) {
        event.preventDefault();
        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phonenum").value;

        console.log("First name is" + fname);
        console.log("Last name is" + lname);
        console.log("Email is" + email);
        console.log("Contact number is" + phone);
    });