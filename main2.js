document.getElementById("btn1").addEventListener("click",function(){
    const colors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hex = "#";

    for(let i=0; i<6; i++) {

        const indexnumber = Math.floor(Math.random() * colors.length);
        hex += colors[indexnumber];
        

    }

    console.log(hex);
    
    document.getElementById("btn1").style.backgroundColor = hex;






});