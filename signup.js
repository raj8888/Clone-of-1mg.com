let form=document.querySelector("form")
let data=JSON.parse(localStorage.getItem("account-data"))||[];
form.addEventListener("submit",function(e){
e.preventDefault();

        let obj={
            name:form.name1.value,
            email:form.email.value,
            mobile:form.mobile.value,
            password:form.password.value
            }
           location.href="./login.html"
            data.push(obj)
            localStorage.setItem("account-data",JSON.stringify(data))

})
  

function retn(){
    location.href="./index.html"
}

