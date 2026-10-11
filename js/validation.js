// Assignment 4: Forms and Validation
// Student: Berdalin Yerbol (IT-2513)

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Bootstrap 5 Starter Form Validation
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        // Special check for Registration Form password match
        if (form.id === "registrationForm") {
          const password = document.getElementById("regPassword");
          const confirmPassword = document.getElementById("regConfirmPassword");

          if (password && confirmPassword) {
            if (password.value !== confirmPassword.value || confirmPassword.value === "") {
              confirmPassword.setCustomValidity("Passwords do not match");
            } else {
              confirmPassword.setCustomValidity("");
            }
          }
        }

        // Prevent submission if form has invalid fields
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );

    // Reset handler to clear validation styles
    form.addEventListener("reset", () => {
      form.classList.remove("was-validated");
    });
  });
});
