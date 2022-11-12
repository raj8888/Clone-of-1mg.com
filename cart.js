let data=JSON.parse(localStorage.getItem("cartitems"))
let total=0;
let totalitems=data.length;


let main=document.querySelector(".midsec")
function display (data){
    document.querySelector(".midsec").innerHTML=""
    data.forEach(function (elem,index){
    let man=document.createElement("p")
    man.innerText="MANUFACTURER: "
    
    let store=document.createElement("p")
    store.setAttribute("class","man")
    store.innerText="STORAGE: "
    //maindiv
    let temp=document.createElement("div")
    temp.setAttribute("class","tempdiv")


    //first div
    let imgdiv=document.createElement("div")
    imgdiv.setAttribute("class","imgdiv")
    let img1=document.createElement("IMG")
    img1.setAttribute("src", elem.img);
    imgdiv.append(img1)
    let namediv=document.createElement("div")
    namediv.setAttribute("class","namediv")
    let name=document.createElement("h2")
    name.innerText=elem.item
    let company=document.createElement("p")
    company.innerText=man.innerText +elem.company
    company.style.fontWeight="bolder"
    company.style.color="grey"
    let storage=document.createElement("p")
    storage.innerText=store.innerText +"Store below "+elem.STORAGE
    storage.style.color="grey"
    let quan=document.createElement("p")
    quan.innerText=elem.quan
    quan.style.color="grey"
    let pre=document.createElement("p")
    pre.innerText="* "+elem.pre+" *"
    pre.style.color="red"
   namediv.append(name,company,storage,quan,pre)




    let infodiv=document.createElement("div")
    infodiv.setAttribute("class","infodiv")
    infodiv.append(imgdiv,namediv)

    //seconddiv

    let totdiv=document.createElement("div")
    totdiv.setAttribute("class","totdiv")
    let price=document.createElement("p")
    price.innerText=elem.mprice
    price.style.textDecoration="line-through"
    price.style.color="grey"
    let offprice=document.createElement("p")
    offprice.innerText="Price : "+elem.Price
    let dis=document.createElement("p")
    dis.style.color="rgb(55, 215, 55)"
    dis.style.fontWeight="bolder"
    dis.innerText="Discount : "+elem.discount
    


    let deleteitem=document.createElement("button")
    deleteitem.setAttribute("id","dltbtn")
    deleteitem.innerHTML="Remove from cart"
    deleteitem.addEventListener("click",function(){
        deleteitems(data,index)
    })
    let inc=document.createElement("button")
    inc.setAttribute("id","increment")
    let shipfee=60;
    let tot=document.createElement("p")
    tot.innerText="Total Price : ₹"+ elem.Pric
    let ship=document.createElement("p")
    ship.style.color="grey"
    ship.innerText="Shipping Fee : "+ shipfee;
    let text=document.createTextNode("+")
    inc.appendChild(text)
    let show=document.createElement("input")
    show.setAttribute("id","quanip")
    show.type="number"
    show.min="1"
    show.value=1;
    let dec=document.createElement("button")
    dec.setAttribute("id","decrement")
    let text2=document.createTextNode("-")
    dec.appendChild(text2)
    var val=eval(elem.Pric)+60;
    // total=total+val;
    
    let incdec=document.createElement("div")
    incdec.setAttribute("class","incdec")
    incdec.append(inc,show,dec)

    let orderinfo=document.createElement('div')
    orderinfo.setAttribute("class","orderinfo")
    orderinfo.append(price,dis,offprice,incdec,tot)
    let coupan=document.createElement("input")
    coupan.type="text"
    coupan.placeholder="Enter Coupon Code"
    let codebut=document.createElement("button")
    codebut.innerText="Apply"
    codebut.setAttribute("id","codebut")
    let paid=document.createElement("p")
   
    inc.addEventListener("click",function(){
        show.value++
         val=eval((elem.Pric * (show.value)));
        tot.innerText="Total Price : ₹"+val
        paid.innerText="To be Paid : ₹" +(val+60)
        total=total+val;
        totalitems=totalitems+1
        functotal(total,totalitems)
    })
    dec.addEventListener("click",function(){
        if(show.value==1){
            alert("Select atleast 1 item")
        }else{
            show.value--
             val=eval((elem.Pric * (show.value)))
            tot.innerText="Total Price : ₹"+val
            paid.innerText="To be Paid : ₹" +val
            total=total-(val+60);
            totalitems=totalitems-1
            functotal(total,totalitems)
        }
    })
    codebut.addEventListener("click",function(e){
        if(coupan.value=="MASAI22"){
            alert("Coupon Code Applied")
            let offs=Math.floor((val*22)/100)
            let off=val-offs
            paid.innerText="To be Paid : " + off
            total=total+off;
        }else{
            alert("Wrong Coupon Code")
        }
        
    })
    paid.innerText="To be Paid : ₹" + (val)
    total=total+val;
    paid.style.fontWeight="bolder"
    let bookor=document.createElement("button")
    bookor.innerText="Order Now"
    bookor.setAttribute("id","bookor")
    let order=document.createElement("div")
    order.setAttribute("class","order")
    order.append(ship,coupan,codebut,paid,deleteitem,bookor)
   
    totdiv.append(orderinfo,order)
    
    //append two div  (info) ,(total price)
    temp.append(infodiv,totdiv)
    document.querySelector(".midsec").append(temp)
    temp.style.marginBottom="30px"
    
});
functotal(total,totalitems)
}


function deleteitems(data,index){
    data.splice(index,1)
    localStorage.setItem("cartitems",JSON.stringify(data))
    display(data)
}

display(data)

function functotal(total,totalitems){
    let totalsave=0
    
    totalsave=(totalitems*10)*(totalitems*3)
    tobepaid=total-totalsave
    document.getElementById("totquan").innerText="₹"+totalitems
    document.getElementById("shipfee").innerText="₹"+0
    document.getElementById("totsav").innerText="₹"+totalsave
    let cou=document.querySelector("#masai")
    document.getElementById("totpaid").innerText="₹"+tobepaid
    document.getElementById("ccc").addEventListener("click",function(e){
         if(cou.value=="MASAI10"){
             alert("Coupon Code Applied")
             let offs=Math.floor((total*10)/100)
             let off=total-offs
             document.getElementById("totpaid").innerText="₹"+off
         }else{
             alert("Wrong Coupon Code")
         } 
     })
    
   
}

let lona=localStorage.getItem("name")

document.getElementById("lona").innerText=lona