jQuery(document).ready(function($) {
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active1");
            /* Get the class of panels */
            let panel = this.nextElementSibling;

            /* Expand the panel so that it could be viewed */
            /* if the panel is not being shown */
            if (panel.style.display != "flex") {
                /* aria-expanded tells us the state of the panel */
                panel.setAttribute("aria-expanded", "true");
                /* Velocity.js statement for animation */
                $(".panel[aria-expanded='true']").velocity({
                    height: "100%",
                    scale: 1
                }, {
                    duration: 400,
                    easing: "ease-in",
                    display: "flex"
                });
            } else {
                /* Hide the panel if it's being shown */
                panel.setAttribute("aria-expanded", "false")
                /* Toggle hiding the panel */
                $(".panel[aria-expanded='false']").velocity({
                    height: 0,
                    scale: 0
                }, {
                    duration: 400,
                    easing: "ease-out",
                    display: "none"
                });
            }
        });
    }
});
