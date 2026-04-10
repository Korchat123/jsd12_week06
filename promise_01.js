// In JS, a Promise is an object representing
// the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

// There are 3 states when a promise runs.
// 1. Pending
// 2. Fulfilled
// 3. Rejected

const myPromise = new Promise((resolve, reject) => {
  const status = true;

  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
}); // output an object

 console.log(myPromise);

  
  const testthen = myPromise.then((data) => {
    console.log("Success",typeof data);
    return data;
  })

console.log(testthen );
testthen.then((x)=>{
  console.log("log from last then");
  console.log(x);
})
  // .catch((error) => {
  //   console.error("Fail",error);
  // })
  // .finally(() => {
  //   console.log("Process finished.");
  // });