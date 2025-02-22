document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const headings = document.querySelectorAll("h2");
    const skillsHeading = document.querySelector("#skills h2");
    
    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            section.style.transform = "scale(1.05)";
            section.style.transition = "transform 0.3s ease-in-out, background-color 0.3s ease-in-out";
            section.style.backgroundColor = "#d1e7ff";
            section.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });
        
        section.addEventListener("mouseleave", function() {
            section.style.transform = "scale(1)";
            section.style.backgroundColor = "white";
            section.style.boxShadow = "none";
        });
    });

    // Highlight headings on hover with animation
    headings.forEach(heading => {
        heading.addEventListener("mouseenter", function() {
            heading.style.color = "#ff5733";
            heading.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
            heading.style.transform = "translateY(-3px)";
        });
        
        heading.addEventListener("mouseleave", function() {
            heading.style.color = "#333";
            heading.style.transform = "translateY(0)";
        });
    });

    // Highlight and animate skills heading specifically
    if (skillsHeading) {
        skillsHeading.style.color = "#0073e6";
        skillsHeading.style.fontWeight = "bold";
        skillsHeading.style.transition = "color 0.5s ease-in-out, transform 0.5s ease-in-out";
        skillsHeading.style.animation = "pulse 1.5s infinite alternate";
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Adding keyframes for pulse animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.1);
            }
        }
    `;
    document.head.appendChild(styleSheet);
});
