window.onload = function (){


    function highlight(){
     
        let setbtn = document.getElementById("setbutton");
         setbtn.setAttribute("fill","#868686");
         
     }

     function unlightsetbtn(){
     
        let setbtn = document.getElementById("setbutton");
         setbtn.setAttribute("fill","#606060");
         
     }



    var setbtnlight = document.getElementById("setbutton"); 

     setbtnlight.addEventListener("mousedown",highlight);
     document.addEventListener("mouseup",unlightsetbtn);

}
