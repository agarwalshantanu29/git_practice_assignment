//check prime
function prime(number){
let flag=0;
for(let i=1;i<=number;i++){
if(number%i==0){
flag++;
}
}
if(flag==2)
{
return true;
}
else
{
return false;
}
}
let check=prime(24)
if(check==true){
console.log("Number is Prime");
}
else{
console.log("Number is not Prime");
}