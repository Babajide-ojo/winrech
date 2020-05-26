let reck = document.getElementById('coll')
let treck = document.getElementById('toll')
let sreck = document.getElementById('soll')
let head = document.getElementById('headcore')


let shrek = function(){
    head.style.backgroundColor = '#08c';
};
head.onmouseover = shrek;

let sshrek = function(){
    head.style.backgroundColor = 'black';
};
head.onmouseleave = sshrek;


 let kick = function() {
     reck.style.padding ='50px';
     reck.style.backgroundColor ='black';
     reck.style.borderRadius = '10PX';
     
 };
 reck.onmouseover = kick;

 let thro= function() {
    reck.style.padding ='0px';
    reck.style.backgroundColor='transparent'
    
};
reck.onmouseleave = thro;



 let tkick = function() {
     treck.style.padding ='50px';
     treck.style.backgroundColor ='black'
     treck.style.borderRadius = '10PX';
 };
 treck.onmouseover = tkick;

 let tthro= function() {
   treck.style.padding ='0px';
    treck.style.backgroundColor='transparent'
};
treck.onmouseleave = tthro;



 let skick = function() {
     sreck.style.padding ='50px';
     sreck.style.backgroundColor ='black'
     sreck.style.borderRadius = '10PX';
 };
 sreck.onmouseover = skick;

 let sthro= function() {
    sreck.style.padding ='0px';
    sreck.style.backgroundColor='transparent'
};
sreck.onmouseleave = sthro;
