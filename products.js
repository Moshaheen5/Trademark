var illus= document.getElementById("detail")
var show=document.getElementById("tolog")
var data= JSON.parse(localStorage.getItem("data"))
if(localStorage.getItem("currentUser")!=null){
    var userName= JSON.parse(localStorage.getItem("currentUser"));  
}

var id;
show.textContent=userName;
var prod=localStorage.getItem("ViewProduct")
var carte= document.getElementById("cartNum")
var carry=JSON.parse(localStorage.getItem("count"));
var carr=`(${carry}) `;
carte.innerText=carr;
for(i=0;i<data.products.length;i++){
    if( i== prod){
      id=data.products[i].productId;
        var ship =`
            <div class="col col-md-5 img">
            <img class="w-100 inimg" src="${data.products[i].productImage}" alt="">
            </div>
            <div class=" col col-md-7 name">
            <h2 class="inname">${data.products[i].productName}</h2>
            <h3 class="mb-3">Describtion :</h3>
            <p class="instruction mb-3">${data.products[i].productDesc}</p>
            <h4> Availability:<span> 10 left in stock</span></h4>
            <p><span>Category:</span>${data.products[i].productCategorey}</p>
            <p><span>Price:</span>${data.products[i].productPrice} LE</p>
            <div class="shop">
                    <div class="pro-qty d-inline-block mx-0 pt-0">
                      <span class="dec" id="dec">-</span>
                      <input id="val" type="num" name="quantity" value="1" totalqty="10">
                      <span class="inc" id="inc">+</span>
                    </div>
                  </div>
            <a class="tolog mt-3" id="add" href="cart.html">Add To Cart</a>`          
            illus.innerHTML=ship;


    }
}
var inc= document.getElementById("inc")
var dec= document.getElementById("dec")
var val= document.getElementById("val")
var add= document.getElementById("add")
var c=JSON.parse(localStorage.getItem("count"));
inc.addEventListener("click",function(){
  carry=JSON.parse(localStorage.getItem("count"));
  val.value++;
  carry++;
  carr=`(${carry}) `;
  carte.innerText=carr;
  localStorage.setItem("count",JSON.stringify(carry))
});
dec.addEventListener("click",function(){
  if(val.value>0){
    carry=JSON.parse(localStorage.getItem("count"));
    val.value--;
    carry--;
    carr=`(${carry}) `;
    carte.innerText=carr;
    localStorage.setItem("count",JSON.stringify(carry))
  }
});
var holder=[];
add.addEventListener("click",function(){
  for(var t=1; t<=val.value;t++){
    holder.push(id)
    console.log(t)
    localStorage.setItem("index",JSON.stringify(holder))
  }
})
var out= document.getElementById("logout")
out.addEventListener("click",function(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('ViewProduct');
    localStorage.removeItem('index');
    localStorage.removeItem('count');
}
)