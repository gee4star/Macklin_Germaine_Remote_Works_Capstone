let button = document.getElementById('lm');
let banner=document.getElementById('welcome');
function welcome(){
banner.classList.toggle("hidden")
setTimeout(()=>{
    banner.classList.toggle("hidden")
},6000)
}
// Inspiration forthe Careers table 
// https://jsfiddle.net/coh63L40/3/
document.getElementById("showHideCareers").addEventListener("click", function(button) {    
    if (document.getElementById("careersTable").style.display === "none")     document.getElementById("careersTable").style.display = "block";
    else document.getElementById("careersTable").style.display = "none";
 });