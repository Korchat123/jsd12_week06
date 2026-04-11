>different of "`${}`" and console.log(res); why result different


 
>.json() whyhave to use return to tranfer data but not inside even use variable to store data

#resolved because at that time in .then
still in que task not finish 
and other in function run in microque
so .then have to use return data.json()
.then to make sure it finished already



>ERROR From https not go in catch but syntax error go to and not reject work why?
>
#solved becuase it recieved respond from server even it 500or 400 not and error will go in catch it have to be err that the real problem such as no internet connection or bug not recived package

>From above question what is my gap and what i missed?

 miss in term of how flow really work and parameter of .then( (res,rej)=>{}= 1parameter)
 have to use .then((res)=>{},(rej)=>{})
