const btn = document.getElementById('btnEvent');
const comment = document.querySelector('#commentEvent p');
const topText = document.getElementById('topText');
const rip = document.getElementById('ripEvent');

const mayugeL = document.getElementById('mayugeLEvent');
const mayugeR = document.getElementById('mayugeREvent');

const bgm1 = document.querySelector("#bgm1");
const bgm2 = document.querySelector("#bgm2");
const bgm3 = document.querySelector("#bgm3");
const bgm4 = document.querySelector("#bgm4");
const bgms = [bgm1, bgm2, bgm3, bgm4];
const commentText = ['HAHAHAHAHA!!!!!','ハッ!', 'なんでやねん', 'なんでやねん！！！']

btn.addEventListener('mousedown', () => {
    topText.classList.add("up");
    rip.classList.add('open');
    mayugeL.classList.add('mayugeL-rotate');
    mayugeR.classList.add('mayugeR-rotate');

    var audio_index = Math.floor(Math.random() * bgms.length );
    bgms[audio_index].currentTime = 0;
    bgms[audio_index].play();
    comment.innerHTML = commentText[audio_index];
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