var result = ary["大吉","中吉","小吉","吉","凶","大凶"];
var result_random = " ";

function lot(){
  result_random = result[Math.floor(Math.random() * result.length)]
  form1.textbox.value = result_random
}
