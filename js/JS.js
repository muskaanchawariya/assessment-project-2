/* Makeup page */

var btn1 = document.getElementById('may');
btn1.addEventListener('click',getMay);
function getMay(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET','/json/may.json',true);
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var products = JSON.parse(this.responseText);
            console.log(products);
            var output = '';
            for(var i in products){
            output += '<div class="mays">'+
            '<img src=' + products[i].image + ' width="120" height="120" class="immays">' +
            '<ul>'+
            '<br>'+
            '<li class="products"> <b> Name:</b> ' + products[i].name +'</li>' +
            '<li class="products"> <b> Shade: </b> ' + products[i].shade +'</li>' +
            '<li class="products"> <b> Price: </b>' + products[i].rate +'</li>' +
            '</ul>' +
            '</div>'+
            '<br>'+ 
            '<br>';
            }

            document.getElementsByClassName('matter')[0].innerHTML= output;
        }
    }
    xhr.send();
}

var btn2= document.getElementsByClassName('lakme')[0];
btn2.addEventListener('click',getLak);
function getLak(){
     var xhr=new XMLHttpRequest();
     xhr.open('GET','/json/lakme.json', true);
     xhr.onreadystatechange = function(){
         if(this.readyState==4 && this.status==200){
             var products=JSON.parse(this.responseText);
             console.log(products);
             var output = '';
             for(var i in products){
             output += '<div class="lakmes">' +
             '<img src=' + products[i].image + ' width="120" height="120" class="immays">'+
             '<ul>'+
             '<br>'+
             '<li class="products"> <b> Name: </b>' + products[i].name +'</li>' +
             '<li class="products"> <b>Shade: </b> ' + products[i].shade +'</li>' +
             '<li class="products"> <b> Price:</b> ' + products[i].rate +'</li>' +
             '</ul>'+
             '</div>'+
             '<br>'+
             '<br>';
             }
 
             document.getElementsByClassName('matter')[0].innerHTML= output;
         }
     }
     xhr.send();
}

var btn3= document.getElementsByClassName('huda')[0];
btn3.addEventListener('click',getHuda);
function getHuda(){
     var xhr=new XMLHttpRequest();
     xhr.open('GET','/json/huda.json',true);
     xhr.onreadystatechange=function(){
         if(this.readyState==4 && this.status==200){
             var products= JSON.parse(this.responseText);
             console.log(products);
             var output = '';
             for(var i in products){
             output += '<div class="hudas">'+
             '<img src='+ products[i].image + ' width="120" height="120" class="immays">'+
             '<ul>'+
             '<br>'+
             '<li class="products"> <b> Name:</b> ' + products[i].name +'</li>' +
             '<li class="products"> <b>Shade:</b> ' + products[i].shade +'</li>' +
             '<li class="products"> <b>Price: </b> ' + products[i].rate +'</li>' +
             '</ul>'+
             '</div>'+
             '<br>'+
             '<br>';
             }
 
             document.getElementsByClassName('matter')[0].innerHTML= output;
         }
     }
     xhr.send();
}

var btn4= document.getElementsByClassName('loreal')[0];
btn4.addEventListener('click',getLor);
function getLor(){
     var xhr=new XMLHttpRequest();
     xhr.open('GET','/json/loreal.json',true);
     xhr.onreadystatechange=function(){
         if(this.readyState==4 && this.status==200){
             var products= JSON.parse(this.responseText);
             console.log(products);
             var output = '';
             for(var i in products){
             output += '<div class="loreals">'+
             '<img src='+ products[i].image + ' width="120" height="120" class="immays">'+
             '<ul>'+
             '<br>'+
             '<li class="products"> <b>Name:</b> ' + products[i].name +'</li>' +
             '<li class="products"><b>Shade:</b> ' + products[i].shade +'</li>' +
             '<li class="products"><b>Price:</b> ' + products[i].rate +'</li>' +
             '</ul>'+
             '</div>'+
             '<br>'+
             '<br>';
             }
 
             document.getElementsByClassName('matter')[0].innerHTML= output;
         }
     }
     xhr.send();
 }

 var btn5= document.getElementsByClassName('mac')[0];
 btn5.addEventListener('click',getMac);
 function getMac(){
     var xhr= new XMLHttpRequest();
     xhr.open('GET','/json/mac.json',true);
     xhr.onreadystatechange=function(){
         if(this.readyState==4 && this.status==200){
             var products=JSON.parse(this.responseText);
             console.log(products);
             var output = '';
             for(var i in products){
             output += '<div class="macs">'+
             '<img src=' + products[i].image + ' width="120" height="120" class="immays">'+ 
             '<ul>'+
             '<br>'+
             '<li class="products"> <b> Name: </b>' + products[i].name +'</li>' +
             '<li class="products"> <b> Shade:</b> ' + products[i].shade +'</li>' +
             '<li class="products"> <b>Price:</b> ' + products[i].rate +'</li>' +
             '</ul>'+
             '</div>'+
             '<br>'+
             '<br>';
             }
 
             document.getElementsByClassName('matter')[0].innerHTML= output;
         }
     }
     xhr.send();
 }