console.log("connected")



window.addEventListener("scroll", () => {
    // 1. Use querySelectorAll to easily loop, or index [0] if it is just one item
    const skillsBoxes = document.getElementById("skills");
    const missionStatement = document.getElementById("mission");
    const contactDiv = document.getElementById("contact");


    if (window.scrollY > 50) {
        skillsBoxes.classList.add("scroll-activated")
        
    } 

    if (window.scrollY > 300) {

        missionStatement.classList.add("scroll-activated")
    }
    if (window.scrollY > 550) {
         contactDiv.classList.add("scroll-activated")
    }
});
