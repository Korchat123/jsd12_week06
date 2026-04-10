const url=`https://fake-coffee-api.vercel.app/api`;
const url2=`https://api.api-ninjas.com/v1/carmakes`;
const url3=`https://api.api-ninjas.com/v1/cats?name=abyssinian`;
const option={
    method:"GET",
    headers:{
       "X-Api-Key":"338wWx4qt5nqhSKrIMWrWIwLEFEHQldip9kubuce"
    }
}
// const testCoffee= fetch(url);
//const testCoffee= fetch(url2,option);
//const testCoffee= fetch(url3,option);

testCoffee.then((res,rej)=>{
    console.log("first .then after fetch");

    if(res){
    console.log(`this inside respond ${res}`);
    console.log(res);
    }
    else{
    console.log(`this inside reject ${rej}`);
    console.log(rej);
    }
    console.log("-----------------END .Then1----------------------");
    return res;
}
)
.catch((err)=>{
 console.log("vvvvvvvvvvvvv");
    console.log(`ERROR${err}`);
    return err;
});





for(let i=0;i<10;i++){
console.log(`normal loop after call fetch ${i}`); 
}





testCoffee.then((data)=>{

console.log("second .then after fetch");

    console.log(`this inside respond ${data}`);
    console.log(data);
    console.log("---------------change json to js---------------");
     //console.log(data.json());

   // const dataAfter= data.json();
   //console.log(`log data again after tranfer value to dataafter ${dataAfter}`);
   //console.log(dataAfter);
    data.json();console.log(`log data again after tranfer value to data ${data}`);
   console.log(data);
   console.log("-----------------END .Then2 return data.json----------------------");
    //return data.json();
    return data;
} )






.catch((data)=>{
 console.log("vvvvvvvvvvvvv");
    console.log(`ERROR${data}`);
})


.then((data)=>
    {
        
    console.log("third .then after return .json()");
    console.log(`this inside respond  ${data}`);
    console.log(data);
    }
)
.catch((data)=>{
 console.log("vvvvvvvvvvvvv");
    console.log(`ERROR${data}`);
})