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
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
