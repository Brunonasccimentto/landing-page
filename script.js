
    let form = $("#form")
    let show = $(".show")
    let hide = $(".hide")
    let nav = $(".nav")
    let back = $("#back")
 
   
    

    $("#menu").click(()=>{
        nav.slideDown(2000)
        back.slideDown(2000)
    })

    nav.find("img").click(()=>{

        nav.slideUp(1000)
        back.slideUp(1000)

        setTimeout(()=>{
            location.reload(true)
        },1000) 
        
    })


    if(nav.css("position") == "fixed"){

        $(".ni").click(()=>{
            nav.slideUp(1000)
            back.slideUp(1000)
    })

        $(".navItem").click(()=>{

            nav.slideUp(1000)
            back.slideUp(1000)

            setTimeout(()=>{
                location.reload(true)
            },1000) 
    })

    show.click(()=>{

        setTimeout(()=>{
            form.css({"display": "inline-block"})
        }, 1000)
    
        show.css({"display": "none"})
        hide.css({"display": "inline-block"})

    })

    hide.click(()=>{

    form.css({"display": "none"})
    show.css({"display": "inline-block"})
    hide.css({"display": "none"})

    })

    }else {
        $(".ni").click(()=>{
            
        })

        show.click(()=>{

        form.css({"display": "inline-block"})
        show.css({"display": "none"})
        hide.css({"display": "inline-block"})
    
        })
    
        hide.click(()=>{
    
        form.css({"display": "none"})
        show.css({"display": "inline-block"})
        hide.css({"display": "none"})
    
        })
    }
   
    console.log(nav.css("position"))
    $("#exit").click(()=>{

        $("#form").css({"display": "none"})
        show.css({"display": "inline-block"})
        hide.css({"display": "none"})

        setTimeout(()=>{
            location.reload(true)
        },10) 
    })