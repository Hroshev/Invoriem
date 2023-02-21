const videoBtn = document.querySelector('#video__btn');
const video = document.querySelector('.video__object');
const videoWrapper = document.querySelector('.video');

videoBtn.addEventListener('click', function () {
    videoWrapper.classList.remove('video__overlay')
    videoBtn.classList.add('none')
    if (video.paused) video.play()
})

video.addEventListener('click', function () {
    if (video.paused) {
        video.play()
    } else 
    videoWrapper.classList.remove('video__overlay')
    videoBtn.classList.remove('none')
    video.pause()
})