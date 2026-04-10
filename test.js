let myObj={value:0}
let myObj2={value:0}



function isertvalue(param1,param2){
    param1.value=5;
    param2.value=8;
}

isertvalue(myObj,myObj2);

console.log(myObj.value+myObj2.value);