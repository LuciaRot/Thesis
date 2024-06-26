namespace Theory3 {
    
    window.addEventListener("load", handleLoad);
    
    let buttonOne: HTMLElement;

    function handleLoad(): void {
        document.querySelector(".btnWOne")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWTwo")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWThree")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWFour")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWFive")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWSix")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWSeven")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWEight")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWNine")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWTen")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWEleven")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWTwelve")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWThirteen")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWFourteen")?.addEventListener("mousedown", openWeekOne);
        document.querySelector(".btnWFifteen")?.addEventListener("mousedown", openWeekOne);

        document.querySelector(".btnWOne")?.addEventListener("onmouseenter", hoverWeekOne);
        console.log("moin");
        buttonOne = <HTMLElement>document.getElementById("btnWOne");

    }

    function openWeekOne(): void {
        window.location.href = "weekOne.html";
    }

    function hoverWeekOne(): void {
        console.log("hover");

        buttonOne.style.color = "red";
    }
}