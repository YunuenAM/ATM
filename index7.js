//Gera
const formulary= document.getElementById('formulary');

const dbPsw ='444'


//función que se ejucuta cada vez que se da click en formulario mediante submit y no click para que detecte el formulario, cada vez que pase eso se hace una función anónima

formulary.addEventListener('submit', (event)=>{
    event.preventDefault();
let passwordUser= document.getElementById('login').value;
console.log(passwordUser);
if( passwordUser=== dbPsw){
        location.href="./index2.html";
    }else{
        alert("Please enter a valid password");
    }
}
)