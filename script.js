console.log("connected")
const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.innerText = "Dark Mode 🌙";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "Dark Mode 🌙";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "Light Mode ☀️";
    }
});

window.addEventListener("scroll", () => {
    // 1. Use querySelectorAll to easily loop, or index [0] if it is just one item
    const skillsBoxes = document.getElementById("skills");
    const missionStatement = document.getElementById("mission");
    const contactDiv = document.getElementById("contact");


    if (window.scrollY > 50) {
        skillsBoxes.classList.add("scroll-activated")
        
    } 

    if (window.scrollY > 500) {

        missionStatement.classList.add("scroll-activated")
    }
    if (window.scrollY > 1000) {
         contactDiv.classList.add("scroll-activated")
    }
})
function sleep(ms){
    return new Promise((resolve => setTimeout(resolve, ms)));
}
const phrases = ["an entrepreneur", "a innovator", "a leader", "a thinker", "a people person"];
const el = document.getElementById("typewriter")

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];
        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }       
         await sleep(sleepTime * 10);

         for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
         }
         
         await sleep(sleepTime * 5);

         if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
         } else {
            curPhraseIndex++;
         }
    }
};

writeLoop();
