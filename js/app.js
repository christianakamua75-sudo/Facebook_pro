document.addEventListener("DOMContentLoaded", function () {

    const selector = document.getElementById("languageSelect");

    // safety check
    if (!selector) {
        console.error("Language selector not found");
        return;
    }

    selector.addEventListener("change", function () {

        const lang = this.value;

        // safety: check if languages exists
        if (typeof languages === "undefined") {
            console.error("languages.js not loaded");
            return;
        }

        const data = languages[lang];

        if (!data) {
            console.error("Language not found:", lang);
            return;
        }

        // update email placeholder
        const email = document.getElementById("email");
        if (email) {
            email.placeholder = data.email;
        }

        // update password placeholder
        const password = document.getElementById("password");
        if (password) {
            password.placeholder = data.password;
        }

        // update login button text
        const loginBtn = document.getElementById("loginBtn");
        if (loginBtn) {
            loginBtn.textContent = data.login;
        }

        // update forgot password text
        const forgot = document.getElementById("forgotLink");
        if (forgot) {
            forgot.textContent = data.forgot;
        }

        // update create account text
        const create = document.getElementById("createAccountBtn");
        if (create) {
            create.textContent = data.create;
        }

    });

});



