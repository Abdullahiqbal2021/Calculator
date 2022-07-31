let string = "";
var input = document.querySelector("input");
var nums = document.querySelectorAll(".num");
Array.from(nums).forEach((num)=>{
  
  num.addEventListener("click",(e)=>{
    if (e.target.innerHTML == "=") {
      if (string !== "") {
        string = eval(string);
        input.value = string;
      }else{
        string = ""
        input.value = string;
      }
      
    }else if(e.target.innerHTML == "Back") {
      string = input.value;
      let length = string.length;
      let val = string.slice(0,length - 1)
      string = val;
      input.value = string;
      
    }else{
      string = string + e.target.innerHTML;
      input.value = string;      
      
    }
  })                      
})


window.addEventListener('keydown', (elements) => {
  if (elements.key == "Enter") {
    if (string !== "") {
      string = eval(string);
      input.value = string;
    }else{
      string = ""
      input.value = string;
    }
  }else if(elements.key == "Delete"){
    string = "";
    input.value = string;
  }
})
