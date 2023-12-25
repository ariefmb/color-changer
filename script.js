let circles = document.querySelectorAll(".circle");
const black = document.querySelector(".black");

circles.forEach((circle) => {
    circle.addEventListener("click", ({ target }) => {
        console.log(target.classList[1]);
        const { backgroundColor } = window.getComputedStyle(target);
        document.body.style.backgroundColor = backgroundColor;

        target.classList[1] == "black"
            ? (document.body.style.color = "white")
            : (document.body.style.color = "black");
    });
});
