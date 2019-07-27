window.onload = function (){


    function highlight(){
     
        let setbtn = document.getElementById("setbutton");
         setbtn.setAttribute("fill","#868686");
         
     }

     function unlightsetbtn(){
     
        let setbtn = document.getElementById("setbutton");
         setbtn.setAttribute("fill","#606060");
         
     }



     
    function rhighlight(){
     
        let rbtn = document.getElementById("releaseb");
         rbtn.setAttribute("fill","#868686");
         
     }
     
     function runlight(){
     
        let rbtn = document.getElementById("releaseb");
         rbtn.setAttribute("fill","#606060");
         
     }








     function olight(){
     
        let rbtn = document.getElementById("open");
         rbtn.setAttribute("fill","#868686");
         
     }
     
     function ounlight(){
     
        let obtn = document.getElementById("open");
         obtn.setAttribute("fill","#606060");
         
     }







     function lrlight(){
     
        let rbtn = document.getElementById("left-r-btn");
         rbtn.setAttribute("fill","#F6CCA0");
         
     }
     
     function lrunlight(){
     
        let lrbtn = document.getElementById("left-r-btn");
         lrbtn.setAttribute("fill","#EA8922");
         
     }


     
     function plight(){
     
        let rbtn = document.getElementById("powersldr");
         rbtn.setAttribute("fill","#F6CCA0");
         
     }
     
     function punlight(){
     
        let lrbtn = document.getElementById("powersldr");
         lrbtn.setAttribute("fill","#EA8922");
         
     }









     var lrbtnlight = document.getElementById("left-r-btn");
     var pwrbtnlight = document.getElementById("powersldr");



    var obtnlight = document.getElementById("open");
    var rbtnlight = document.getElementById("releaseb");  
    var setbtnlight = document.getElementById("setbutton"); 

     setbtnlight.addEventListener("mousedown",highlight);
     document.addEventListener("mouseup",unlightsetbtn);

     rbtnlight.addEventListener("mousedown",rhighlight);
     document.addEventListener("mouseup",runlight);

     obtnlight.addEventListener("mousedown",olight);
     document.addEventListener("mouseup",ounlight);

     lrbtnlight.addEventListener("mousedown",lrlight);
     document.addEventListener("mouseup",lrunlight);

     pwrbtnlight.addEventListener("mousedown",plight);
     document.addEventListener("mouseup",punlight);

}