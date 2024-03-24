const dec = document.getElementById("dec");
const rst = document.getElementById("rst");
const inc = document.getElementById("inc");
const cl = document.getElementById("cl");
let count=0;

inc.onclick=function(){
    count++;
    cl.textContent=count;
}
dec.onclick=function(){
    count--;
    cl.textContent=count;
}
rst.onclick=function(){
    count=0;
    cl.textContent=count;
}
