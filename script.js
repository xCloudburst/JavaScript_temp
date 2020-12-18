let button1 = document.querySelector('.button1'),
    button2 = document.querySelector('.button2'),
    button3 = document.querySelector('.button3'),
    colour = ["Red","Blue","Green","Orange","Purple","Pink","#FE7F9C"],
    counter = 0,
    i = -1,
    randClicked = false,
    gradClicked = false,
    hex1 = "FFFFFF",
    hex2 = "111111";

const generateHex = () => `#${Math.floor(Math.random() * 256**3).toString(16)}`

function changeRandom() {
    randClicked = !randClicked
    document.querySelector('.button2').classList.toggle('buttonclickactive');
    console.log("Random: "+randClicked);
}
function changeGradient() {
    gradClicked = !gradClicked
    document.querySelector('.button3').classList.toggle('buttonclickactive');
    console.log("Gradient: "+gradClicked);
}
//    if(randClicked == false){
//        randClicked = true;
//        document.querySelector('.button2').innerHTML = "Fixed Colour";
//        document.querySelector('.button2').style.backgroundColor = "#000000";
//        document.querySelector('.button2').style.color = "#FFFFFF";
//    }
//    else{
//        randClicked = false;
//        document.querySelector('.button2').innerHTML = "Random Hex";
//        document.querySelector('.button2').style.backgroundColor = "#FFFFFF";
//        document.querySelector('.button2').style.color = "#000000";
//    }

function handleClick() {
    counter ++;
    if(randClicked == false){
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
        hex1 = generateHex();
        hex2 = generateHex();
        console.log(hex1);
        console.log(hex2);
        document.querySelector('.button1').innerHTML = "You have changed my colour "+counter+" times!"+"<br><br>"+"My colour is currently: "+"<br>"+hex1;
        document.querySelector('.button1').style.backgroundColor = "linear-gradient(133deg, "+hex1+" 0%, "+hex2+") 0%, "+hex1+") 100%)";

    }
    console.log(counter);
} 

button1.addEventListener('click', () => handleClick(1));
button2.addEventListener('click', () => changeRandom(1));
button3.addEventListener('click', () => changeGradient(1));