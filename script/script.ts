namespace Theory3 {
    
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.querySelector(".btnWOne")?.addEventListener("mousedown", openWeekOne);

    }

    function openWeekOne(): void {
        console.log("weewoo");
    }
}