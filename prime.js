function prime(number){
let count=0;
for(let i=1;i<=number;i++){
if(number%i==0){
count++;
}
}
if(count==2)
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
console.log(Number+ " is Prime");
}
else{
console.log(Number+" is not Prime");
}