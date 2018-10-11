

document.getElementById("startGame").onclick = function start(){

        //time intialized
    var start = new Date().getTime();


        //choose random shape color
    function randomColor(){
        var letters='0123456789ABCDEF'.split('');
        var color="#";
        for(var i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)];
        }
        return color;

    }

        //choose a shape random
    function shapeAppear(){
        var top=Math.random()*600;
        var left=Math.random()*600;
        var width=(Math.random()*200)+100;
        if(Math.random()>0.5){
            document.getElementById("shape").style.borderRadius="50%";
        } else {
            document.getElementById("shape").style.borderRadius="0%";
        }
        document.getElementById("shape").style.top=top + "px";
        document.getElementById("shape").style.left=left + "px";
        document.getElementById("shape").style.width=width + "px";
        document.getElementById("shape").style.height=width + "px";
        document.getElementById("shape").style.display="block";
        document.getElementById("shape").style.backgroundColor=randomColor();
        
    start = new Date().getTime();
    }


    function appearAfterDelay(){
        setTimeout(shapeAppear, Math.random()*1000);
    }
    appearAfterDelay();
    document.getElementById("shape").onclick= function() {
        document.getElementById("shape").style.display="none";

        //calculates the time between shape appearance and click
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;


    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
    }

function counter(){
    var timeleft = 60;
    var downloadTimer = setInterval(function(){

        document.getElementById("progressBar").value = 60 - --timeleft;

        if(timeleft <= 0)
            clearInterval(downloadTimer);       
        },1000);

    }
    counter();
}

   

start();