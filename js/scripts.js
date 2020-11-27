

let link = document.body.classList;
console.log(link);

let num;

for (num=0; num<99; num++){
    document.write("Bangladesh is a small country" + "<br>");
}

let arr = ['md', 'kabir'];
console.log(typeof arr);
let obj = {
    name: 'md',
    lassName: 'shahjahan',
    id : '2020'
}
console.log(typeof obj);


let pStyle = document.getElementsByClassName("addInput");

// document.getElementsByClassName("addInput")[1].children[0].style.color = 'red'

let addInput = document.getElementsByClassName("addInput");
let addInputChildren = [];
for(let i=0; i<addInput.length; i++) {
    addInputChildren = addInput[i].children;
    for(let j=0; j<addInputChildren.length; j++) {
        if(i == 0){
            addInputChildren[j].style.color = 'blue';
        }else {
            addInputChildren[j].style.color = 'red';
        };
    }
}

for (let m1=1; m1<=100; m1++) {
    let count = document.getElementById('count');
    count.innerHTML += '<p>' + m1 + '</p>';
}

//document.querySelector(".addInput p").style.color = "red";
/*pStyle.background = 'red';
pStyle['font-size'] = '';*/















/*
let id1 = 0;
let newinput = function() {
    let parent = document.getElementsByClassName("addInput")
    let field1 = document.getElementsByClassName("addInputClass")
    field1.id1 = "input" + id1;
    parent.appendChild('addInput');
    id1 += 1;
}




let price1 = 5;
let price2 = 10;
let totalPrice = price1 + price2;
document.getElementById('inner-html-Show').innerHTML = "This value is:" + totalPrice;



function add(){
    let a,b,c;
    a = document.getElementById("first").value;
    b = document.getElementById("second").value;
    c=  Number(a) + Number(b);
    document.getElementById("answer").value= c;

    let a1,b2,c3;
    a1 = document.getElementsByClassName("first11")[0].value;
    b2 = document.getElementsByClassName("second12")[0].value;
    c3=  Number(a1) + Number(b2);
    document.getElementsByClassName("answer11")[0].value= c3;

    let fastAns, secAns, totalAns;
    fastAns = document.getElementById("answer").value;
    secAns = document.getElementsByClassName("answer11")[0].value;
    totalAns =  Number(fastAns) + Number(secAns);
    document.getElementById("totalAnswer").value= totalAns;
}

let manDetails = {
    firstName : "Md",
    lastName : "Shahjahan Kabir",
    rollNumber : 201811050039,
    bachNumber : 50
}
document.getElementById('object')*/
