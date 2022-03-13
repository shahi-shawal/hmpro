function admin() {
var maindiv= document.getElementById('mainmenu');
var h1= maindiv.getElementsByTagName('h1')[0];
h1. innerHTML= "Hi, Shawal!!";
document.getElementById('mainmenu').setAttribute('class','custommenu');
var maindiv=document.getElementById('maincontent');
document.getElementById('maincontent').setAttribute('class','customcontent');
document.getElementById('adminauthor').setAttribute('class','customauthor');
}


function user() {
    var maindiv= document.getElementById('mainmenu');
    var h1= maindiv.getElementsByTagName('h1')[0];
    h1. innerHTML= "Hi,you";
    document.getElementById('mainmenu').setAttribute('class','menu');
    var maindiv=document.getElementById('maincontent');
    document.getElementById('maincontent').setAttribute('class','content');
    document.getElementById('adminauthor').setAttribute('class','author');
    }
