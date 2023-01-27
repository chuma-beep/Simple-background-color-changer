//this block of code chages the background color 
// math. floor nd math.random are used to generate the hex codes needed for 
//the background color changer. then the results are concatenated using string interpolation.
// the last line of code in the code block  makes the code able to make changes to background color
randomBackground = () => {
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let bgColor = `rgb(${x}, ${y}, ${z})`
        document.body.style.background = bgColor;
      }

      randomBackground()