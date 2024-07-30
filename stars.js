const stars = document.querySelector('.stars');
    for (let i = 0; i < 600; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        stars.appendChild(star);
    }

window.addEventListener('scroll', () => {
    const container = document.getElementById('csdn');
    if (window.scrollY > window.innerWidth/17) {
        container.style.opacity = (window.scrollY-window.innerWidth/6)/(window.innerWidth/6);
        
    } else {
        container.style.opacity = 0;
        
    }
});

window.addEventListener('scroll', () => {
    const container = document.getElementById('ccw');
    if (window.scrollY > window.innerWidth/16) {
        container.style.opacity = (window.scrollY-window.innerWidth/4)/(window.innerWidth/4);
        
    } else {
        container.style.opacity = 0;
        
    }
});
