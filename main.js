document.getElementById("btn1").addEventListener("click",function(){

 
    const colors = ["red","yellow","green","black"];

    const indexnumber = Math.floor(Math.random() * colors.length);
    document.getElementById("btn1").style.backgroundColor = colors[indexnumber];


});