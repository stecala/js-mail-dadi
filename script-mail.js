let userArray = ['ginopino@gmail.com', 'cavallo@gmail.com', 'bottiglia@gmail.com', 'telefono@gmail.com', 'joystick@gmail.com', 'cuffie@gmail.com', 'mouse@gmail.com', 'laptop@gmail.com', 'cassa@gmail.com', 'occhiali@gmail.com'];
const userMail = prompt('inserisci la tua mail per validare');

let messageValidator=false;
for ( let i = 0 ; i<userArray.length-1 ; i++ )
{   
    if( userMail === userArray[i] )
    {
        messageValidator=true;
    }
}
let message;
if(messageValidator==true){
    message=console.log('mail presente')
}else{
    message=console.log('mail assente')
}