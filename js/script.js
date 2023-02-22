function validate() {
    console.log("HELLO");
    let uname = document.getElementById("name").value;
    // let emailid = document.getElementById("email").value;
    // let msg = document.getElementById("message").value;
    // let regexname = /^[a-z A-Z]{5,12}$/;
    // let regex =
    //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (uname == "") {
        document.getElementById("nameerror").innerHTML =
            "Name Field Cannot be empty";
        alert("Empty");
        return false;
    }
    //  else if (!regexname.test(uname)) {
    //     document.getElementById("nameerror").innerHTML =
    //         "Name field conatin only letters,min 5 to max 15 letters";
    //     return false;
    // } else if (emailid == "") {
    //     document.getElementById("nameerror").innerHTML = "";

    //     document.getElementById("emailerror").innerHTML =
    //         "Email Field Cannot be empty";
    //     return false;
    // } else if (!regex.test(emailid)) {
    //     document.getElementById("nameerror").innerHTML = "";

    //     document.getElementById("emailiderror").innerHTML =
    //         "Enter valid email id";
    //     return false;
    // } else if (msg == "") {
    //     document.getElementById("emailerror").innerHTML =
    //         "Name Field Cannot be empty";
    //     return false;
    // }
}
