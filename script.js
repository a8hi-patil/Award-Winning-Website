const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower() {
    addEventListener('mousemove', function (details) {
        this.document.querySelector("#mouse").style.transform = `translate(${details.clientX}px,${details.clientY}px)`

    })
}
function firstPageAnimation() {
    var tl = gsap.timeline();
    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    }).to(".boudingelm", {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: 0.2
    }).from("#herofooter", {
        y: '-10',
        duration: 1,
        opacity: 0,
        ease: Expo.easeInOut,
    })
}
firstPageAnimation()
circleMouseFollower()

document.querySelectorAll(".elem").forEach(function (elm) {
    var rotate = 0;
    var diffrot = 0;

    elm.addEventListener('mouseleave', function (dets) {
        console.log('on')
        gsap.to(elm.querySelector('img'), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        })
    })


    elm.addEventListener('mousemove', function (dets) {
        var diff = dets.clientY - elm.getBoundingClientRect().top
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX

        var img = elm.querySelector('img')
        // img.style.border = '2px solid yellow';
        let imgHeight = img.offsetHeight
        let imgWidth = img.offsetWidth


        gsap.to(elm.querySelector('img'), {
            opacity: 1,
            ease: Power3,
            top: diff - imgHeight / 2,
            left: dets.clientX - imgWidth / 2,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8)
        })
    })
})