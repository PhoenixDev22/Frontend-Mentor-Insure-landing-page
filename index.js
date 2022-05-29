const toggleNavigationBtn = document.getElementById("toggle__navigation")
const openBtn = document.querySelector("#toggle__navigation .open-btn");
const closeBtn = document.querySelector("#toggle__navigation .close-btn");
const navigation = document.getElementById(`navigation`);

toggleNavigationBtn.addEventListener("click", () =>{
    // console.log(toggleNavigationBtn.getAttribute("aria-expanded"))
    // console.log(navigation.classList.contains("display"))
    navigation.classList.toggle("display")
    openBtn.classList.toggle(`hide-btn`);
    closeBtn.classList.toggle(`display-btn`)
    navigation.closest(".display")?toggleNavigationBtn.setAttribute("aria-expanded", "true"):toggleNavigationBtn.setAttribute("aria-expanded", "false");
})

window.addEventListener(`click`, (event) => {
    if(!event.target.closest(`.btn`)) {
        if(!event.target.closest(`#navigation`)){
            navigation.classList.remove(`display`);
            openBtn.classList.remove(`hide-btn`)
            closeBtn.classList.remove(`display-btn`);
            toggleNavigationBtn.setAttribute("aria-expanded", "false");
        }
    };
})