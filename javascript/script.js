let formData= document.querySelectorAll(".form-data")
let subjects= document.querySelector(".subjects")
let emails= document.querySelector(".emails")
let textArea= document.querySelector("textarea")
textArea.disabled= true;
for (let index = 0; index < formData.length; index++) {
              formData[index].addEventListener("blur" , ()=>{
                  if(subjects.value == "" || emails.value == ""){
                    textArea.disabled= true;
                  }else{
                    textArea.disabled= false;
                  }
              });
    
}