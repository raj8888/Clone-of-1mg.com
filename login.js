let data=JSON.parse(localStorage.getItem("account-data"))
  let form=document.querySelector("form")
  form.addEventListener("submit",function(e){
    e.preventDefault();
    let mail=document.querySelector("#email").value;
    let mobile=document.querySelector("#mobile").value;
    let pass=document.querySelector("#password").value;
   let ans=showdata(mail,pass,mobile)
  })
  
  function showdata(mail,pass,mobile){
    let flag=false;
    if(data==null){
    
    }else{
      data.forEach(elem => {
        if(elem.email==mail && elem.password==pass && elem.mobile==mobile){
          flag=true
          localStorage.setItem("name",elem.name)
         }
      });
    }
    
    if(flag){
      alert("Sign in Successful")
      location.href="./index.html"
    }else{
      alert("Wrong Credentials")
    }
    
  }


  function retn(){
    location.href="./index.html"
  }