var tl=gsap.timeline()
    tl.from(".lnav",{
    opacity:0,
    duration:.5,
    scale:1.2
    })

    tl.from("h1",{
        opacity:0,
        duration:1,
        scale:1.2
    })
    tl.from(".readbtn",{
        opacity:0,
        scale:2,
        duration:.5,

    })

    tl.from(".rtopright",{
        opacity:0,
        // scale:1.2,
        duration:.5,
        x:60
    })
    tl.from(".rtopleft",{
        opacity:0,
        duration:.5,
        x:-60
    })
    tl.from(".rbottom",{
        opacity:0,
        y:60,
        duration:.5
    })