function proxyCheck(){


let respo = true;


return respo;
}
$(document).ready(function() {


let li = 0;
var de = 0;



$('.start').click(async function(){
    
    let pro = $('#tar').val().split(/\n/);
    let cantidad = pro.length;
    $('#prxi').text(cantidad);
    
    if(cantidad >= 1){
    
        //window.alert(pro+' - '+cantidad);
        for(var i = 0; i < cantidad && chkIsPrx(pro[i]);i++){
        var ip = pro[i].split(':')[0];
        var port = pro[i].split(':')[1];


       //const proxy = { host: ip, port: port, proxytype: 'socks5' };
       await axios.get('./checker.php?ip='+ip+'&port='+port+'&timeout=1')
       .then(function(response){


        if(response.data.result.success){
            li++;
            $('#prxl').text(li);
            $('#tx-live').append(response.data.result.proxy.ip+":"+response.data.result.proxy.port+"<br>");
        }else{
            de++;
            $('#prxd').text(de);
            $('#tx-dead').append(response.data.result.proxy.ip+":"+response.data.result.proxy.port+"<br>");
    } 
    
    
    
    })
   .catch(function(error){window.alert(error); console.error(error); //For Debug :) }) 
    
    
   
    
    } 
    
    }else{
        window.alert(" Ingresa tus proxys prr >:v ");
        console.error("Need all input data")
    }
   
    
    });
});

fuction chkIsPrx(prx){ //chk if input contain ip:port
if(prx.split(":").length == 2){ 
  return true
}else{ return false}
}
