var userName;
if(localStorage.getItem("currentUser")!=null){
    userName= JSON.parse(localStorage.getItem("currentUser"));  
}
var show=document.getElementById("tolog")
show.textContent=userName;
var out= document.getElementById("logout")
out.addEventListener("click",function(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('ViewProduct');
    localStorage.removeItem('index');
    localStorage.removeItem('count');
}
)
var data = JSON.parse(localStorage.getItem("data"))
var index= [JSON.parse(localStorage.getItem("ind"))]
var total= localStorage.getItem("total")
var inn = document.getElementById("money")
inn.innerText="Total Amount:"+ total + "LE"
var add;
console.log(data.products[1].productId)
var ul= document.getElementById("ul")
for(i=0;i<=data.products.length;i++){
    for(l=0;l<=index.length;l++){
        if(data.products[i].productId==index[l]){
            add = `<li>${data.products[i].productName}</li>`
        }
    }
}
ul.innerHTML=add;