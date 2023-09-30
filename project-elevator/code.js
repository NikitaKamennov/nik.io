
button = document.getElementById('button')

button.addEventListener(('click'), function () {
   
   const input = document.getElementById("input").value

   console.log(+input);
   if (+input < 3 || !(+input*1)) {
      alert("ebobo chtole") 
      document.getElementById("input").value = ""
      return
   }
   if(+input > 12) alert('ты сам(а) этого хотел(а)')

   console.log(+input);
   for (let i = 4; i <= +input; i++) {
   console.log(+input);
   
   let div = document.createElement("div");
   
   div.classList.add("flor");
   // div.id = "alert" + i;   
   div.setAttribute('data-flor', i)
   document.getElementById('wrap').prepend(div);
   }

   const flors  = document.getElementsByClassName('flor')
         for (let i =0; i < flors.length; i++)
         flors[i].innerHTML = flors.length - i 

ezdator()


})

function ezdator () {

const lift = document.getElementById('lift')

Array.from( document.getElementsByClassName("flor")).forEach(
   function(fl) {
      fl.addEventListener(('click'), function () {

         const flors  = document.getElementsByClassName('flor')
         for (let i =0; i < flors.length; i++)
         flors[i].innerHTML = flors.length - i 



         lift.dataset.lif = fl.dataset.flor
         fl.innerHTML = fl.dataset.flor + "*"
         lift.style.backgroundColor = "red"
         lift.style.cssText = `bottom: ${fl.dataset.flor*100-100}px`
      })
      
   }

)

}


ezdator()