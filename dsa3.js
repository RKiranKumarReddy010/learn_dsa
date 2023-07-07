var cur = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x- 5 +"px"
    cur.style.top = dets.y- 5 +"px"
})
document.addEventListener("mousemove",function(dets){
    blurr.style.left = dets.x - 150 +"px"
    blurr.style.top = dets.y- 150 +"px"
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:true,
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -30%",
        end:"top -100%",
        scrub:2,
    }
})

