const canvas = document.getElementById('canvas');
const score =document.getElementById('score');
const days = document.getElementById('days');
const endScreen = document.getElementById('endScreen');

function virusPop() {
    let virus = new Image();

    virus.src ="./media/basic-pics/pngwave.png";

    virus.classList.add('.virus');
    virus.style.top = Math.random() * 500 + 'px';
    virus.style.left = Math.random() * 500 + 'px';
    
    let x,y;
    x=y= (Math.random() * 45) + 30;
    virus.style.setProperty('--x', `${x}px`);
    virus.style.setProperty('--y', `${y}px`);

    canvas.appendChild(virus);
}
