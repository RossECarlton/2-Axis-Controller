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




    var obtnlight = document.getElementById("open");
    var rbtnlight = document.getElementById("releaseb");  
    var setbtnlight = document.getElementById("setbutton"); 

     setbtnlight.addEventListener("mousedown",highlight);
     document.addEventListener("mouseup",unlightsetbtn);

     rbtnlight.addEventListener("mousedown",rhighlight);
     rbtnlight.addEventListener("mouseup",runlight);

     obtnlight.addEventListener("mousedown",olight);
     obtnlight.addEventListener("mouseup",ounlight);

}