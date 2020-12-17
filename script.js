let button1 = document.querySelector('.button1'),
    button2 = document.querySelector('.button2'),
    colour = ["Red","Blue","Green","Orange","Purple"],
    counter = 0,
    i = -1,
    clicked = false,
    hex = "FFFFFF";

 //   if(clicked == false){
 //   else{
 //       
 //   }
function changeRandom() {
    if(clicked == false){
        clicked = true;
        document.querySelector('.button2').innerHTML = "Fixed Colour";
        document.querySelector('.button2').style.backgroundColor = "#000000";
        document.querySelector('.button2').style.color = "#FFFFFF";
    }
    else{
        clicked = false;
        document.querySelector('.button2').innerHTML = "Random Hex";
        document.querySelector('.button2').style.backgroundColor = "#FFFFFF";
        document.querySelector('.button2').style.color = "#000000";
    }
    console.log(clicked);
}

function handleClick() {
    counter = counter + 1;
    if(clicked == false){
        if(i == colour.length-1) {
            i=0;
        }
        else{
            i=i+1;
        }
        console.log(colour[i]);
        document.querySelector('.button1').innerHTML = "You have changed my colour "+counter+" times!"+"<br><br>"+"My colour is currently: "+"<br>"+colour[i];
        document.querySelector('.button1').style.backgroundColor = colour[i];
    }
    else{
        hex = Math.floor(100000 + Math.random() * 900000);
        console.log("#"+hex);
        document.querySelector('.button1').innerHTML = "You have changed my colour "+counter+" times!"+"<br><br>"+"My colour is currently: "+"<br>"+"#"+hex;
        document.querySelector('.button1').style.backgroundColor = "#"+hex;
    }
    console.log(counter);
} 

button1.addEventListener('click', () => handleClick(1));
button2.addEventListener('click', () => changeRandom(1));