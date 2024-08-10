var show=document.getElementById("tolog")
if(localStorage.getItem("currentUser")!=null){
    var userName= JSON.parse(localStorage.getItem("currentUser"));  
}
show.textContent=userName;
var carte= document.getElementById("cartNum")
var body=document.getElementById("innerTable")
window.addEventListener("load",display)
var index=JSON.parse(localStorage.getItem("index"));
console.log(index);
var carry;
carry=JSON.parse(localStorage.getItem("count"));
var carr=`cart(${carry}) `;
carte.innerText=carr;
/*var index=indexes;
for (m=0;m<=index.length;m++){
    for (var j = m + 1; j < index.length; j++){
        if(index[m]==index[j]){
            var num=0;
            index.splice(index[m],1)
            num++;
        }else{
            num=1;
            display(num,index[m])
        }
    }
}*/
var count;
var data= JSON.parse(localStorage.getItem("data"));


function display(){
    if(index.length==''){
        body.innerHTML=`<h1 class="m-auto">Your cart is emrty </h1>`
    }else{
    var contain=``;
    count =0;
    console.log(data.products[0].productName);


        for(i=0;i<index.length;i++){
            contain +=` 
            <tr>
            <td>${i+1}</td>
            <td>${data.products[index[i]].productPrice}
            <td> ${data.products[index[i]].productName}</td>              
            </td>
            <td><div class="del"><button onclick="add(${index[i]})" class="remove">+</button>
            </div></td>
            <td><div class="del"><button onclick="deleted(${i})" class="remove">Delete</button>
            </div></td>
            </tr>
            `
            count+= (data.products[index[i]].productPrice);
            console.log(count)
        }
    

    body.innerHTML=contain;
    total.innerText=count +"LE";
 }
}
var total = document.getElementById("total");
function deleted(i){
    index.splice(i,1)
    console.log(index)
    localStorage.setItem("index",JSON.stringify(index))
    carry--;
    localStorage.setItem("count",JSON.stringify(carry))
    display();
}
function add(i){
    index.push(i)
    localStorage.setItem("index",JSON.stringify(index))
    carry++;
    localStorage.setItem("count",JSON.stringify(carry))
    display();
}

var buy = document.getElementById("buy") 
buy.addEventListener("click",function(){
    localStorage.setItem("total",count)
    window.location.href="final.html"
})

/*let counts = {numbers:[{}]};
for (m=0;m<=index.length;m++){
    if(index[m]==index[m+1]){
        var num = index[m];
        counts.numbers[num] = counts.numbers[num] ? counts.numbers[num] + 1 : 1;
        index.splice(index[m+1],1)
        num++;
        display(num,index[m])
    }else{
        counts.numbers[num] = counts.numbers[num] ? counts[num]: 1;
        num=1;
        display(num,index[m])
    }
}
console.log(counts.numbers)
for (m=0;m<=counts.numbers;m++)
    var contain=``;
    console.log(index);
    console.log(index.length);
    var int;
    var count =0;
    for(i=0;i<index.length;i++){
        contain +=` 
                        <tr>
                        <td>${i+1}</td>
                        <td> ${data.products[index[i]].productName}</td>              
                        <td>${data.products[index[i]].productPrice}
                        </td>
                        <td><div class="del"><button onclick="add(${index[i]})" class="remove">+</button>
                        </div></td>
                        <td><div class="del"><button onclick="deleted(${i})" class="remove">Delete</button>
                        </div></td>
                        <td>${x}</td>
                        </tr>
                        `
                        //int+=parseInt(data.products[index[i]].productPrice)
                        count+= (data.products[index[i]].productPrice);
                        console.log(count)

}*/
var out= document.getElementById("logout")
out.addEventListener("click",function(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('ViewProduct');
    localStorage.removeItem('index');
    localStorage.removeItem('count');
}
)