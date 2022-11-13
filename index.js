var myImage = document.getElementById("mainImage");
var imageArray = ["https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/a5495530-beb6-48b5-8554-3ae7271fe7e8.png","https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/b/a/baby_diapers_offers_web_5.jpg","https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/a/y/ayurveda_offers_web_13.jpg","https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/h/e/health_devices_offers_web_10.jpg","https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/c/a/cardiac_care_offers_web_13.jpg","https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/s/u/super30_homepage_944x174.jpg"];

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage,3000);

fetch("./JSON_Files/brands.json")
.then((res)=>res.json())
.then((data)=>{
  displaybrands(data)
})

let brand=document.querySelector(".showbrand")
function displaybrands(data){
 data.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.brand
    div.append(img,name)
    document.querySelector(".showbrand").append(div)
 });

}
fetch("./JSON_Files/health_consrn.json")
.then((res)=>res.json())
.then((datacon)=>{
  displayconcern(datacon)
})
let concern=document.querySelector(".showconc")
function displayconcern(datacon){
 datacon.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.concern
    div.append(img,name)
    document.querySelector(".showconc").append(div)
 });
}


 fetch("./JSON_Files/Popular_cat.json")
.then((res)=>res.json())
.then((datapopcat)=>{
  displaypopcat(datapopcat)
})
let popcat=document.querySelector(".showpopcat")
function displaypopcat(datapopcat){
 datapopcat.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.items
    div.append(img,name)
    document.querySelector(".showpopcat").append(div)
 });
}


fetch("./JSON_Files/winter_care.json")
.then((res)=>res.json())
.then((datawinc)=>{
  displaywinc(datawinc)
})
let winc=document.querySelector(".showwincare")
function displaywinc(datawinc){
 datawinc.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.type
    div.append(img,name)
    document.querySelector(".showwincare").append(div)
 });
}

fetch("./JSON_Files/mask.json")
.then((res)=>res.json())
.then((datamask)=>{
  displaymask(datamask)
})
let mask=document.querySelector(".showmasks")
function displaymask(datamask){
 datamask.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.items
    let desc=document.createElement("p")
    desc.innerText=elem.desc
    let main=document.createElement("p")
    main.innerText=elem.mprice
    main.style.textDecoration='line-through';
    let dis=document.createElement("p")
    dis.innerText=elem.discount
    dis.style.color="green"
    let price=document.createElement("p")
    price.innerText=elem.Price
    div.append(img,name,desc,main,dis,price)
    document.querySelector(".showmasks").append(div)
 });
}

fetch("./JSON_Files/trend_cat.json")
.then((res)=>res.json())
.then((datatrecat)=>{
  displaytrecat(datatrecat)
})
let trecat=document.querySelector(".showtrecat")
function displaytrecat(datatrecat){
 datatrecat.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.items
    let desc=document.createElement("p")
    desc.innerText=elem.desc
    let main=document.createElement("p")
    main.innerText=elem.mprice
    main.style.textDecoration='line-through';
    let dis=document.createElement("p")
    dis.innerText=elem.discount
    dis.style.color="green"
    let price=document.createElement("p")
    price.innerText=elem.Price
    div.append(img,name,desc,main,dis,price)
    document.querySelector(".showtrecat").append(div)
 });
}


fetch("./JSON_Files/top_cc_cat.json")
.then((res)=>res.json())
.then((datacccat)=>{
  displaycccat(datacccat)
})
let cccat=document.querySelector(".showcccat")
function displaycccat(datacccat){
 datacccat.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.items
    let desc=document.createElement("p")
    desc.innerText=elem.desc
    let main=document.createElement("p")
    main.innerText=elem.mprice
    main.style.textDecoration='line-through';
    let dis=document.createElement("p")
    dis.innerText=elem.discount
    dis.style.color="green"
    let price=document.createElement("p")
    price.innerText=elem.Price
    div.append(img,name,desc,main,dis,price)
    document.querySelector(".showcccat").append(div)
 });
}

fetch("./JSON_Files/new_at_tata.json")
.then((res)=>res.json())
.then((datanewar)=>{
  displaynewar(datanewar)
})
let newar=document.querySelector(".shownewar")
function displaynewar(datanewar){
 datanewar.forEach(elem => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    img.setAttribute("width", "80px")
    let name=document.createElement("h4")
    name.innerText=elem.items
    let desc=document.createElement("p")
    desc.innerText=elem.desc
    let main=document.createElement("p")
    main.innerText=elem.mprice
    main.style.textDecoration='line-through';
    let dis=document.createElement("p")
    dis.innerText=elem.discount
    dis.style.color="green"
    let price=document.createElement("p")
    price.innerText=elem.Price
    div.append(img,name,desc,main,dis,price)
    document.querySelector(".shownewar").append(div)
 });
}

let ans=localStorage.getItem("name")
if (ans==null||ans==undefined){
  document.getElementById("name").innerText="Login | Sign Up"
}else{
  document.getElementById("name").innerText=ans
}

