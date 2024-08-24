"use strict";
window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleLoad);
function handleLoad() {
    let weekOne = document.querySelector("#weekOneText");
    let weekTwo = document.querySelector("#weekTwoText");
    let one = document.querySelector("#weekOne");
    let two = document.querySelector("#weekTwo");
    let height = one.clientHeight + two.clientHeight;
    weekOne.style.width = one.clientHeight - 15 + "px";
    weekOne.style.top = height / 2 + 5 + "px";
    weekTwo.style.width = two.clientHeight - 20 + "px";
    weekTwo.style.top = height + 6 + "px";
    one.style.marginLeft = weekOne.clientHeight - 3 + "px";
    two.style.marginLeft = weekOne.clientHeight - 3 + "px";
    let allChapters = document.querySelectorAll(".chapter");
    for (let ele of allChapters) {
        let dot = ele.querySelector(".dot");
        let chapter = ele.querySelector(".aWrapper");
        let xDot = dot.getBoundingClientRect().x + dot.clientWidth + 2;
        let yDot = dot.getBoundingClientRect().y + (dot.clientHeight / 2);
        let xChapter = chapter.getBoundingClientRect().x;
        //let yChapter = chapter.getBoundingClientRect().y;
        let line;
        if (!ele.querySelector(".line")) {
            line = document.createElement("span");
            line.classList.add("line");
            ele.appendChild(line);
        }
        else {
            line = ele.querySelector(".line");
        }
        line.style.width = xChapter - xDot + "px";
        line.style.left = xDot - 8 + "px";
        line.style.top = yDot - 144 + "px";
    }
}
//# sourceMappingURL=navBar.js.map