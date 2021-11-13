const darkBackground = document.getElementById('darkerBg')
const clickbutton = document.getElementById('butn')


let darkMode = () => {
    darkBackground.classList.toggle("dark-background");
}


clickbutton.addEventListener('click', darkMode)