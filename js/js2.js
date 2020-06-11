var btn6= document.getElementsByClassName('customer')[0];
btn6.addEventListener('click',getRatings);
function getRatings(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET','/json/ratings.json',true);
    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var res= JSON.parse(this.responseText);
            console.log(res);
            var output='';
            for(var i in res){
                output += '<div class="rates">'+
                '<img src='+ res[i].image + ' width="120" height="120" class="imrates">'+
                 '<ul>'+
                '<br>'+
                '<li class="infor"> <b> Username:</b> ' + res[i].username +'</li>' +
                '<li class="infor"> <b>Name:</b> ' + res[i].name +'</li>' +
                '<li class="infor"><b>Rating:</b> ' + res[i].ratings +'</li>' +
                '</ul>'+
                '</div>'+
                '<br>'+
                '<br>';
                }
    
                document.getElementsByClassName('matterrev')[0].innerHTML= output;
        }
    }
    xhr.send();
}

var btn7= document.getElementsByClassName('contact')[0];
btn7.addEventListener('click',getContact);
function getContact(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','/json/contact.json',true);
    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var res=JSON.parse(this.responseText);
            console.log(res);
            var output='';
            for(var i in res){
                output += '<div class="conts">'+
                '<img src='+ res[i].image + ' width="80" height="80" class="imrates">'+
                '<ul>'+
                '<br>' +
                '<li class="infor"> ' + res[i].username + '</li>' +
                '</ul>'+
                '</div>' +
                '<br>';
                }
    
                document.getElementsByClassName('matterrev')[0].innerHTML= output;
        }
    }
    xhr.send();
}