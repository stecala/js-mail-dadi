const userNumber=Math.floor((Math.random()*6)+1);
const pcNumber=Math.floor((Math.random()*6)+1);
let message;
if(userNumber<pcNumber)
{
    message='Pc win';
}
else if( userNumber == pcNumber)
{
    message='Pareggio';
}
else{
    message='User win';
}
alert(message);