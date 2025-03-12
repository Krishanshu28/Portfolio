document.addEventListener("mousemove", function(event) {
    const character = document.querySelector(".floating-character");
    let x = (window.innerWidth - event.clientX) / 50;
    let y = (window.innerHeight - event.clientY) / 50;
    character.style.transform = `translate(${x}px, ${y}px)`;
});
