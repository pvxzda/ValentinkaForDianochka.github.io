document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    let moveCount = 0;

    noBtn.addEventListener("mouseover", function () {
        if (moveCount < 5) {
            let x = Math.random() * 300 - 150;
            let y = Math.random() * 300 - 150;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
            moveCount++;
        } else if (moveCount < 7) {
            noBtn.style.position = "absolute";
            noBtn.style.left = "70%";
            moveCount++;
        } else {
            noBtn.style.display = "none";
            yesBtn.style.transform = "scale(1.5)";
        }
    });

    yesBtn.addEventListener("click", function () {
        window.location.href = "yes.html";
    });
});
