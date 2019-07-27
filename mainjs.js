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









     var lrbtn = document.getElementById("left-r-btn");
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

     lrbtn.addEventListener("mousedown",lrlight);
     document.addEventListener("mouseup",lrunlight);

     pwrbtnlight.addEventListener("mousedown",plight);
     document.addEventListener("mouseup",punlight);






     
     // animate left right turn button 

     function leftrightdrag (event){
        let svgbtnrl4 = document.getElementById("left-r-btn");
    
        if (svgbtnrl4.getAttribute("fill")== "#F6CCA0"){
            var WinW = window.innerWidth;
            scaleFactor = 1200/WinW;
            var y = event.clientY;
            var M = y * scaleFactor;
            
            if (M < 270 ){
                M = 270;
            }
            if (M > 950 ){
                M = 950;
            }

            lrbtn.setAttribute("d", "M"+(M- 35)+",1567c0,8.25-6.75,15-15,15h-51c-8.25,0-15-6.75-15-15v-50c0-8.25,6.75-15,15-15h51c8.25,0,15,6.75,15,15V1567z");
            }

           
    
    }

    lrbtn.addEventListener("mousemove", leftrightdrag);
}

