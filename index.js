const box = document.getElementById("box")

      let x = 1
      let y = 1
      let xSpeed = 10
      let ySpeed = 10

        function load() {
        box.style.left = x + "px" 
        box.style.top = y + "px"
       }

      setInterval(()=> {

        if (x + box.clientWidth>= window.innerWidth) {
            xSpeed = - xSpeed
            box.style.backgroundColor = "blue"  
        }
        if ( y + box.clientHeight >= window.innerHeight) {
            ySpeed = -ySpeed
            box.style.backgroundColor = "green"
        }
        if (x <= 0) {
            xSpeed = - xSpeed
            box.style.backgroundColor = "purple"
        }
        if (y <= 0) {
            ySpeed = - ySpeed
            box.style.backgroundColor = "yellow"
        }

        x += xSpeed
        y += ySpeed
        load()

      },50)

 

    //    setInterval(()=> {
        
    //     if(xPosition >= window.innerWidth || x <= 0) {
    //         xSpeed = - xSpeed
    //     }
    //     if (yPosition >= window.innerHeight || y <= 0) {
    //         ySpeed = -ySpeed
    //     }
    //     xPosition += xSpeed
    //     yPosition +=ySpeed
    //     load()
    //    }, 300)