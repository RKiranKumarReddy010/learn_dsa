
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
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start: "top -50%",
        end:"top -100%"
    }
})
