console.log('this working!!')

function start1() {
    let sadness = document.getElementById('sadnessHeader');
    sadness.addEventListener("click", toggle1);
  };

function toggle1() {
    let sadnessBackground = document.getElementById('sadnessBackground');

    if(sadnessBackground.style.backgroundImage === 'url("./sadness1.jpeg")')
        sadnessBackground.style.backgroundImage = 'url("./sadness2.jpeg")';
    else if(sadnessBackground.style.backgroundImage === 'url("./sadness2.jpeg")')
        sadnessBackground.style.backgroundImage = 'url("./sadness3.jpeg")';
    else
        sadnessBackground.style.backgroundImage = 'url("./sadness1.jpeg")';
};

start1();

function start2() {
    let anger = document.getElementById('angerHeader');
    anger.addEventListener("click", toggle2);
};

function toggle2() {
    let angerBackground = document.getElementById('angerBackground');

    if(angerBackground.style.backgroundImage === 'url("./jealousy1.jpeg")')
        angerBackground.style.backgroundImage = 'url("./jealousy2.jpeg")';
    else if(angerBackground.style.backgroundImage === 'url("./jealousy2.jpeg")')
        angerBackground.style.backgroundImage = 'url("./jealousy3.gif")';
    else
        angerBackground.style.backgroundImage = 'url("./jealousy1.jpeg")';
};

start2();

function start3() {
    let heartbreak = document.getElementById('heartbreakHeader');
    heartbreak.addEventListener("click", toggle3);
};

function toggle3() {
    let heartbreakBackground = document.getElementById('heartbreakBackground');

    if(heartbreakBackground.style.backgroundImage === 'url("./heartbreak1.jpeg")')
        heartbreakBackground.style.backgroundImage = 'url("./heartbreak2.jpeg")';
    else if(heartbreakBackground.style.backgroundImage === 'url("./heartbreak2.jpeg")')
        heartbreakBackground.style.backgroundImage = 'url("./heartbreak3.gif")';
    else
        heartbreakBackground.style.backgroundImage = 'url("./heartbreak1.jpeg")';
};

start3();

let bottomToTop = document.getElementById('scroll');

bottomToTop.addEventListener('click', function(){
    const top = document.getElementById('top');
    top.scrollIntoView();
    let message = document.createElement('h3');
    message.classList.add('message'); 
    document.querySelector('.container').appendChild(message);
    document.querySelector('.message').innerText = "You are loved, you are good enough, you're doing the best you can - be kinder to yourself.";
    document.querySelector('.message').style.color = 'yellow'; 
    document.querySelector('.message').style.backgroundColor = 'blue';       
})


var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 