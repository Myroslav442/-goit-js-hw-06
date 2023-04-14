const formRef = document.querySelector(".login-form");


formRef.addEventListener("submit", handleSubmit);


function handleSubmit(event)  {
    event.preventDefault();
  
    const {
        elements: { email, password }
    } = event.currentTarget;
  
 

    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
    }
  const formData = new FormData(event.currentTarget);
  const form = {};

    formData.forEach((value, name) => {
      form[name] = value;
         
    })
  console.log(form); 
}

formRef.addEventListener("submit", resetInput);

function resetInput() {
    formRef.reset();
}
