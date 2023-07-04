gsap.to("#nav",{
    duration:0.5,
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
    }
})