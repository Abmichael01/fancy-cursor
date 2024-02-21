document.addEventListener("mousemove", (event)=>{
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    const cursor = document.querySelector(".cursor")
    const subCursor = document.querySelector(".sub-cursor")

    cursor.style.left = (mouseX) + "px"
    cursor.style.top = (mouseY) + "px"

    subCursor.style.left = (mouseX) + "px"
    subCursor.style.top = (mouseY) + "px"
})