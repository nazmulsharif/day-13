$('#img1').click(function () {
  var img1SrcValue = $(this).attr('src');
  $('#mainImage').attr('src',img1SrcValue);
})
$('#img2').click(function () {
  var img2SrcValue = $(this).attr('src');
  $('#mainImage').attr('src',img2SrcValue);
})
$('#img3').click(function () {
  var img3SrcValue=$(this).attr('src');
  $('#mainImage').attr('src',img3SrcValue);
})





/*
function myfunction(){
  var headingElement = document.createElement('h1');
  var paragraphElement = document.createElement('p');
  headingElement.innerText="this is a heading";
  paragraphElement.innerText="this is a paragraph";
  document.getElementById('div').appendChild(headingElement);
  document.getElementById('div').appendChild(paragraphElement);
}
var btnElement=document.getElementById('button');
btnElement.onclick=function(){
  myfunction();
}
*/




/*
var firstNameValue = document.getElementById('firstName');
firstNameValue.onkeyup=function(){
  var firstNameValue= document.getElementById('firstName').value;
  document.getElementById('res1').innerText=firstNameValue;
}

var lastNameValue = document.getElementById('lastName');
lastNameValue.onkeyup=function () {
  var lastNameValue = document.getElementById('lastName').value;
  document.getElementById('res2').innerText=lastNameValue;

}
var fullNameValue = document.getElementById('fullName');
fullNameValue.onblur=function(){
  var firstNameValue= document.getElementById('firstName').value;
  var lastNameValue = document.getElementById('lastName').value;
  var fullNameValue=document.getElementById('fullName').value=firstNameValue+' '+lastNameValue;
  document.getElementById('res3').innerText=fullNameValue;
}*/

/*
// $('#firstName').keyup(function () {
//   var firstNameValue = $('#firstName').val();
//   $('#res1').text(firstNameValue);
// })
// $('#lastName').keyup(function () {
//   var lastNameValue = $('#lastName').val();
//   $('#res2').text(lastNameValue);
// })
// $('#fullName').blur(function () {
//   var firstNameValue = $('#firstName').val();
//   var lastNameValue = $('#lastName').val();
//   var fullNameValue = firstNameValue + ' ' +lastNameValue;
//   $('#res3').text(fullNameValue);
// })
*/
