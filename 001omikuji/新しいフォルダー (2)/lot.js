var num =0;

function lot(){
  num=Math.floor(Math.random()*4);
  if(num==0){
    message="大吉";
  }else if(num==1){
    massage="吉";
  }else if(num==2){
    message="小吉";
  }else{
    massage="凶"
  }
  form1.textbox.value=massage;
}
