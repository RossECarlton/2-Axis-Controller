var window,onload =  () => {



    
    const highlightbtnColor = "#868686";
    const unlightbtnColor = "#606060";
 


    var highlight = () => {
     
        let setbtn = document.getElementById("setbutton");
         setbtn.setAttribute("fill",highlightbtnColor);
         
     }

     var unlightsetbtn = () => {
     
        let setbtn = document.getElementById("setbutton");
         setbtn.setAttribute("fill",unlightbtnColor);
         
     }



     
    var  rhighlight = () => {
     
        let rbtn = document.getElementById("releaseb");
         rbtn.setAttribute("fill",highlightbtnColor);
         
     }
     
     var runlight = () =>{
     
        let rbtn = document.getElementById("releaseb");
         rbtn.setAttribute("fill",unlightbtnColor);
         
     }








     var olight = () => {
     
        let rbtn = document.getElementById("open");
         rbtn.setAttribute("fill",highlightbtnColor);



         if (document.getElementById("openCloseText").textContent === "Close" )
        {
           document.getElementById("openCloseText").textContent = "Open";
          
        }
         
        else {
          document.getElementById("openCloseText").textContent = "Close";
        }
         
     }




     
     var ounlight = () => {
     
        let obtn = document.getElementById("open");
         obtn.setAttribute("fill",unlightbtnColor);
         
     }



     const dragbtnLColor = "#F6CCA0";
     const dragbtnuLColor = "#EA8922";


     var lrlight = () => {
     
        let rbtn = document.getElementById("left-r-btn");
         rbtn.setAttribute("fill",dragbtnLColor);
         
     }
     
     var lrunlight = () =>{
     
        let lrbtn = document.getElementById("left-r-btn");
         lrbtn.setAttribute("fill",dragbtnuLColor);
         
     }


     
     var plight = () => {
     
        let rbtn = document.getElementById("powersldr");
         rbtn.setAttribute("fill",dragbtnLColor);
         
     }
     
     var  punlight = () =>{
     
        let lrbtn = document.getElementById("powersldr");
         lrbtn.setAttribute("fill",dragbtnuLColor);
         
     }


     var dlight = () => {
     
        let rbtn = document.getElementById("distanceSlideBtn");
         rbtn.setAttribute("fill",dragbtnLColor);
         
     }
     
     var  dunlight = () =>{
     
        let lrbtn = document.getElementById("distanceSlideBtn");
         lrbtn.setAttribute("fill",dragbtnuLColor);
         
     }



     




     var lrbtn = document.getElementById("left-r-btn");
     var pwrbtn = document.getElementById("powersldr");
     var disbtn = document.getElementById("distanceSlideBtn");


     var obtnlight = document.getElementById("openn");
     var rbtnlight = document.getElementById("releasebb");  
     var setbtnlight = document.getElementById("setbuttonn"); 

     setbtnlight.addEventListener("mousedown",highlight);
     document.addEventListener("mouseup",unlightsetbtn);

     rbtnlight.addEventListener("mousedown",rhighlight);
     document.addEventListener("mouseup",runlight);

     obtnlight.addEventListener("mousedown",olight);
     document.addEventListener("mouseup",ounlight);

     lrbtn.addEventListener("mousedown",lrlight);
     document.addEventListener("mouseup",lrunlight);

     pwrbtn.addEventListener("mousedown",plight);
     document.addEventListener("mouseup",punlight);

     disbtn.addEventListener("mousedown",dlight);
     document.addEventListener("mouseup",dunlight);
    
 
        
             


     
     // animate left right turn button 



     var leftrightdrag  = (event) =>{
        let svgbtnrl4 = document.getElementById("left-r-btn");
    
        if (svgbtnrl4.getAttribute("fill")== "#F6CCA0"){
            var WinW = window.innerWidth;
            scaleFactor = 1400/WinW;
            var x = event.clientX;
            var M = x * scaleFactor;
            
            if (M < 270 ){
                M = 270;
            }
            if (M > 950 ){
                M = 950;
            }
            document.getElementById("showTurn").textContent = Math.round(M);
            lrbtn.setAttribute("d", "M"+(M- 35)+",1567c0,8.25-6.75,15-15,15h-51c-8.25,0-15-6.75-15-15v-50c0-8.25,6.75-15,15-15h51c8.25,0,15,6.75,15,15V1567z");
            }

           
    
    }


    document.addEventListener("mousemove", leftrightdrag);



    var  powerButtonMove = (event) =>{
        
    
        if (pwrbtn.getAttribute("fill")== "#F6CCA0"){
            var WinH = window.innerHeight;
            scaleFactor = 3000/WinH;
            var y = event.clientY;
            let M = y * scaleFactor;
            
            if (M > 1350){
                M = 1350;
            }
            if (M < 850){
                M = 850;
            }
            
            pwrbtn.setAttribute("d", "M981,"+(M)+"c0,5.5-4.5,10-10,10h-59c-5.5,0-10-4.5-10-10v-60c0-5.5,4.5-10,10-10h59c5.5,0,10,4.5,10,10V1097z");
            document.getElementById("showPower").textContent = Math.round(M);
 
        }
        }

    document.addEventListener("mousemove", powerButtonMove);

    }





    var distancedrag  = (event) => {
        let svgbtnrl3 = document.getElementById("distanceSlideBtn");
    
        if (svgbtnrl3.getAttribute("fill") == "#F6CCA0"){
            var WinW = window.innerWidth;
            scaleFactor = 1400/WinW;
            var x = event.clientX;
            var M = x * scaleFactor;
            
            if (M < 150 ){
                M = 150;
            }
            if (M > 1050 ){
                M = 1050;
            }
          //  document.getElementById("showTurn").textContent = Math.round(M);
            svgbtnrl3.setAttribute("d", "M" + (M) + ",1915c0,8.25-6.75,15-15,15h-51c-8.25,0-15-6.75-15-15v-50c0-8.25,6.75-15,15-15h51 c8.25,0,15,6.75,15,15V1567z" );
            }

           
    
    }


    document.addEventListener("mousemove", distancedrag);

