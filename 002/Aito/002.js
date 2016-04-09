$(function(){
  var result = ["大吉","中吉","小吉","吉","凶","大凶"];

  $('#btn').click(function(){
    $('#result').text(result[Math.floor(Math.random()*result.length)]);
  })
})
