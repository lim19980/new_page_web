function getlist(){
var sockslist=document.frm.sockslist.value;
var fuck=sockslist.match(/\d{1,3}([.])\d{1,3}([.])\d{1,3}([.])\d{1,3}((:)|(\s)+)\d{1,8}/g);
if(fuck){
  var list="";
  for(var i=0;i<fuck.length;i++){

    if(fuck[i].match(/\d{1,3}([.])\d{1,3}([.])\d{1,3}([.])\d{1,3}(\s)+\d{1,8}/g)){
    fuck[i]=fuck[i].replace(/(\s)+/,':');

  }
  list=list+fuck[i];
  if(i!=(fuck.length-1)){
  list=list+"\n";
  }
}
  document.frm.sockslist.value=list;
}
else{
document.frm.sockslist.value="";
}



}

function isprox(inpx){
if(inpx[0].split(":").lenght == 2){ retrn true}else{ return false }
}

// For requuest

function check(jdat, url){ // Send parameters: data and url to the function & obtain async response
  return new Promise((resolve, reject) => {
    axios.post('http://40.121.181.97:8080/adobe',jdat)
  .then(function (response) {
    // handle success
    resolve(response);
  })
  .catch(function (error) {
    // handle error
    reject(error);
  })
  });
}
