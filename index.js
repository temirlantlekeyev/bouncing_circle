const circle = document.getElementById("circle")

      let x = 1
      let y = 1
      let xSpeed = 10
      let ySpeed = 10

        function load() {
        circle.style.left = x + "px" 
        circle.style.top = y + "px"
       }

      setInterval(()=> {

        if (x + circle.clientWidth>= window.innerWidth) {
            xSpeed = - xSpeed
            circle.style.backgroundColor = "blue"  
        }
        if ( y + circle.clientHeight >= window.innerHeight) {
            ySpeed = -ySpeed
            circle.style.backgroundColor = "green"
        }
        if (x <= 0) {
            xSpeed = - xSpeed
            circle.style.backgroundColor = "purple"
        }
        if (y <= 0) {
            ySpeed = - ySpeed
            circle.style.backgroundColor = "yellow"
        }

        x += xSpeed
        y += ySpeed
        load()

      },50)

 
