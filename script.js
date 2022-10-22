const canvas = document.getElementById('canvas');
const score =document.getElementById('score');
const days = document.getElementById('days');
const endScreen = document.getElementById('endScreen');

function start() {
    count = 0;
    score.innerHTML= count;
}

function virusPop() {
    let virus = new Image();

    // virus.src ="./User/fabri/OneDrive/Documents/Vscode/JS-click-game-starting_file/media/basic-pics/pngwave.png";
    virus.src ="./media/basic-pics/pngwave.png";

    virus.classList.add('virus');
    virus.style.top = Math.random() * 800 + 'px';
    virus.style.left = Math.random() * 800 + 'px';
    
    let x,y;
    x=y= (Math.random() * 45) + 30;
    virus.style.setProperty('--x', `${x}px`);
    virus.style.setProperty('--y', `${y}px`);

    let plusMinus =Math.random() < 0.5 ? -1 : 1;
    let trX = Math.random() * 500 * plusMinus;
    let trY = Math.random() * 500 * plusMinus;
    
    virus.style.setProperty('--trX', `${trX}%`);
    virus.style.setProperty('--trY', `${trY}%`);

    canvas.appendChild(virus);
    console.log(x);
}

document.addEventListener('click', function(e) {
    let targetElement =e.target || e.srcElement;
  if (targetElement.classList.contains('virus')){
    targetElement.remove();
    count++;
    score.innerHTML = count;
}
});

