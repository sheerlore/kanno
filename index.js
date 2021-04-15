const btn = document.getElementById('btnEvent');
const topText = document.getElementById('topText');
const rip = document.getElementById('ripEvent');

const mayugeL = document.getElementById('mayugeLEvent');
const mayugeR = document.getElementById('mayugeREvent');

btn.addEventListener('mousedown', () => {
    topText.classList.add("up");
    rip.classList.add('open');
    mayugeL.classList.add('mayugeL-rotate');
    mayugeR.classList.add('mayugeR-rotate');
});

btn.addEventListener('animationend', () => {
    topText.classList.remove("up");
    rip.classList.remove('open');
    mayugeL.classList.remove('mayugeL-rotate');
    mayugeR.classList.remove('mayugeR-rotate');
});

btn.addEventListener('animationcancel', () => {
    topText.classList.remove('up');
    rip.classList.remove('open');
    mayugeL.classList.remove('mayugeL-rotate');
    mayugeR.classList.remove('mayugeR-rotate');
});