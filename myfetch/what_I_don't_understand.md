>different of "`${}`" and console.log(res); why result different


 
>.json() whyhave to use return to tranfer data but not inside even use variable to store data

#~~resolved because at that time in .then
still in que task not finish 
and other in function run in microque
so .then have to use return data.json()
.then to make sure it finished already~~
fix miss understanding .then() and callback inside it also in microtask  the flow is normaly go by queue but .json() create for
change promise to js object work as async
so when it didn't resolved it return promise
pendding and after it finish work it will return object.so when log data.json() in 
callback it retrun promise that why data didn't change  even use variable to collect that data also correct only promise
the finished object is in the return and to another .then() ***json() run in webapi***
not push in microtask


[ call stack ]

fetch()
   ↓
Web API (network)

-------------------------

response กลับมา
   ↓
Promise resolve
   ↓
then1 → microtask

-------------------------

run then1:
   res.json()
   ↓
   Web API (parse JSON async)

-------------------------

json เสร็จ
   ↓
Promise resolve
   ↓
then2 → microtask

-------------------------

run then2







>ERROR From https not go in catch but syntax error go to and not reject work why?
>
#solved becuase it recieved respond from server even it 500or 400 not and error will go in catch it have to be err that the real problem such as no internet connection or bug not recived package

>From above question what is my gap and what i missed?

*miss in term of how flow really work and parameter of .then( (res,rej)=>{}= 1parameter)
 have to use .then((res)=>{},(rej)=>{})

 *understand of flow of .json() didn't go to 
 microtask but to webapi 
