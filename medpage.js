let data=[]
fetch("./JSON_Files/med.json")
.then((res)=>res.json())
.then((allmed)=>{
    data=[...allmed]
 displayammmed(allmed)
})


function search(){
    let ip=document.querySelector("#itemsearch").value;
    let newdata=data.filter(function(elem){
      let ans=elem.type.toLowerCase().includes(ip.toLowerCase())||elem.item.toLowerCase().includes(ip.toLowerCase())||elem.company.toLowerCase().includes(ip.toLowerCase())||elem.disease.toLowerCase().includes(ip.toLowerCase())
      return ans;
    })
    displayammmed(newdata)
  }

  function typeofmed(){
    let selected=document.querySelector(".fildata").value;
    let filterdata=data.filter(function(el){
        if(selected=="Filter All"){
            return data;
        }else{
            return el.type==selected;
        }
    })
    displayammmed(filterdata)
  }

  function typeofdis(){
    let selected=document.querySelector(".fildatadis").value;
    let filterdata=data.filter(function(el){
        if(selected=="Filter All"){
            return data;
        }else{
            return el.disease==selected;
        }
    })
    displayammmed(filterdata)
  }
let crtitem=JSON.parse(localStorage.getItem("cartitems"))||[]
// let trecat=document.querySelector(".showtrecat")
function displayammmed(allmed){
    document.querySelector(".midsec").innerHTML=""
    allmed.forEach(function (elem,index)  {
    let div=document.createElement("div")
    div.setAttribute("class","medbox")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let divinfo=document.createElement("div")
    divinfo.setAttribute("class","medinfo")
    let name=document.createElement("h3")
    name.innerText=elem.item
    let desc=document.createElement("p")
    desc.innerText=elem.pre
    let main=document.createElement("p")
    main.innerText=elem.company
    let type=document.createElement("p")
    type.innerText=elem.type
    type.style.color="green"
    let price=document.createElement("p")
    price.innerText=elem.mprice
    price.style.textDecoration="line-through"
    let dis=document.createElement("p")
    dis.innerText=elem.discount
    let offprice=document.createElement("p")
    offprice.innerText=elem.Price
    let quan=document.createElement("p")
    quan.innerText=elem.quan
    let but=document.createElement("button")
    but.innerText="ADD"
    but.addEventListener("click",function(e){
      e.preventDefault();
      let flag=false
      for(let i=0;i<crtitem.length;i++){
        if(crtitem[i].item==elem.item){
          flag=true
        }
      }
      if(flag){
        alert("Product is already in cart")
      }else{
        alert("Product Added to Cart")
      crtitem.push(data[index])
      localStorage.setItem("cartitems",JSON.stringify(crtitem))
      }
      
    })
    but.setAttribute("class","infobut")
    let btndiv=document.createElement("div")
    btndiv.setAttribute("class","btndiv")
    btndiv.append(but)
    divinfo.append(name,desc,quan,main,price,dis,offprice,type)
    div.append(img,divinfo,btndiv)
    document.querySelector(".midsec").append(div)
 });
}

