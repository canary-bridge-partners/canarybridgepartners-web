document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert(
            "Thank you for contacting Canary Bridge Partners.\n\nWe will get back to you within 24 hours."
        );

        form.reset();

    });

});
