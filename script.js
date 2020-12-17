let button = document.querySelector('.button1'),
    colour = ["Red","Blue","Green","Orange","Purple"],
    counter = 0,
    i = -1,
    clicked = false,
    hex = 0;



 //   if(clicked == false){
 //   else{
 //       
 //   }
    
function handleClick() {
    counter = counter + 1;
        if(i == colour.length-1) {
        i=0;
    }
        else{
        i=i+1;
    }
    hex = Math.floor(100000 + Math.random() * 900000);
    console.log(counter);
    console.log(colour[i]);
    console.log("#"+hex);
    document.querySelector('.button1').innerHTML = "You have changed my colour "+counter+" times!"+"\n"+"My colour is currently: "+colour[i];
    document.querySelector('.button1').style.backgroundColor = colour[i];
} 

button.addEventListener('click', () => handleClick(1));




// 
// 
// window.addEventListener('load',function(){
//   console.log(clicked);
//   document.getElementById('randoButton').addEventListener('click',function(){
//     clicked = true;
//     console.log(clicked);
//   });
// });