document.addEventListener("DOMContentLoaded", () => {
    const rightBtn = document.getElementById("scrolling-button-right");
    const leftBtn = document.getElementById("scrolling-button-left");
    const imgContent = document.getElementById("scrolling-container")

    rightBtn.addEventListener("click", () => {
        imgContent.scrollBy({
            left: 230,
            behavior: "smooth"
        })
    })

    leftBtn.addEventListener("click", () => {
        imgContent.scrollBy({
            left: -230,
            behavior: "smooth"
        })
    })
})