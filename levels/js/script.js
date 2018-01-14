
$(function(){
    
    let timeLeft = 20;
    let counter = setInterval(() => {
        $("#timer").html(`Time: ${timeLeft}`);
        if (timeLeft == 0) {
            clearInterval(counter);
            $(".gameOver, .button").addClass("show");
        }
        timeLeft--;
    },1000)

    const restart = $("#restart").click(() => {location.reload();})

    
    
    let squares = $(".square").map((i, x) => {
        
        const colorId = $("#color").text();
        let sample = $("#sample");
        
        let colorsPalette;
        if (colorId == "red") { 
            colorsPalette = ["#ff0000", "#e50000", "#cc0000", "#b20000", "#990000", "#ff4c4c", "#ff6666", "#ff7f7f"];
        } else if (colorId == "yellow") {
            colorsPalette = ["#ffff00", "#e5e500", "#cccc00", "#b2b200", "#ffff7f", "#ffff99", "#ffffb2", "#ffffcc"];
        } else if (colorId == "green") {
            colorsPalette = ["#00ff00", "#00e500", "#00cc00", "#00b200", "#009900", "#7fff7f", "#99ff99", "#b2ffb2"];
        } else if (colorId == "blue") { 
            colorsPalette = ["#0000ff", "#0000e5", "#0000cc", "#0000b2", "#000099", "#4c4cff", "#6666ff", "#7f7fff"];
        } else if (colorId == "purple") {
            colorsPalette = ["#a020f0", "#901cd8", "#8019c0", "#7016a8", "#601390", "#c679f6", "#cf8ff7", "#d9a5f9"];
        }
        
        $(x).css("background-color", colorsPalette[Math.floor(Math.random()*colorsPalette.length)]);
        sample.css("background-color", colorsPalette[Math.floor(Math.random()*colorsPalette.length)]);
        
        $(x).click(() => {
            if ($(x).css("background-color") == sample.css("background-color")) {
                $(x).css("border", "2px solid #96ff00");
            } else {
                $(x).css("border", "2px solid #eee");
            }
        });
        
    });
    
    
    
    
    
});



