const idly=document.getElementById("idlyprice")
function idlybtn(){
  document.getElementById("idlyprice").value=idly.value*10;
}
const dosa=document.getElementById("dosaprice")
function dosabtn(){
  document.getElementById("dosaprice").value=dosa.value*15;
}
const valu1=document.getElementById("search-input").options[0].value;
const valu2=document.getElementById("search-input").options[1].value;
const valu3=document.getElementById("search-input").options[2].value;
const valu4=document.getElementById("search-input").options[3].value;
const valu5=document.getElementById("search-input").options[4].value;
const val=document.getElementById("search-input-box");
console.log(val.value)
function btnfun(){
if(val.value===valu1){
  console.log("yes")
  document.getElementById("breakfast1").style.display="flex";
  document.getElementById("breakfast2").style.display="flex";
  document.getElementById("breakfast3").style.display="flex";
  document.getElementById("Lunch1").style.display="none";
  document.getElementById("Lunch2").style.display="none";
  document.getElementById("Lunch3").style.display="none";
  document.getElementById("Dinner1").style.display="none";
  document.getElementById("Dinner2").style.display="none";
  document.getElementById("Dinner3").style.display="none";
  document.getElementById("Souprecipes1").style.display="none";
  document.getElementById("Souprecipes2").style.display="none";
  document.getElementById("Souprecipes3").style.display="none";
  document.getElementById("snacksrecpiecs1").style.display="none";
  document.getElementById("snacksrecpiecs2").style.display="none";
  document.getElementById("snacksrecpiecs3").style.display="none";
}else if(val.value===valu2){
  document.getElementById("breakfast1").style.display="none";
  document.getElementById("breakfast2").style.display="none";
  document.getElementById("breakfast3").style.display="none";
  document.getElementById("Lunch1").style.display="flex";
  document.getElementById("Lunch2").style.display="flex";
  document.getElementById("Lunch3").style.display="flex";
  document.getElementById("Dinner1").style.display="none";
  document.getElementById("Dinner2").style.display="none";
  document.getElementById("Dinner3").style.display="none";
  document.getElementById("Souprecipes1").style.display="none";
  document.getElementById("Souprecipes2").style.display="none";
  document.getElementById("Souprecipes3").style.display="none";
  document.getElementById("snacksrecpiecs1").style.display="none";
  document.getElementById("snacksrecpiecs2").style.display="none";
  document.getElementById("snacksrecpiecs3").style.display="none";
}else if(val.value===valu3){
  console.log("3")
  document.getElementById("Dinner1").style.display="flex";
  document.getElementById("Dinner2").style.display="flex";
  document.getElementById("Dinner3").style.display="flex";
  document.getElementById("Souprecipes1").style.display="none";
  document.getElementById("Souprecipes2").style.display="none";
  document.getElementById("Souprecipes3").style.display="none";
  document.getElementById("snacksrecpiecs1").style.display="none";
  document.getElementById("snacksrecpiecs2").style.display="none";
  document.getElementById("snacksrecpiecs3").style.display="none";
  document.getElementById("breakfast1").style.display="none";
  document.getElementById("breakfast2").style.display="none";
  document.getElementById("breakfast3").style.display="none";
  document.getElementById("Lunch1").style.display="none";
  document.getElementById("Lunch2").style.display="none";
  document.getElementById("Lunch3").style.display="none";
}else if(val.value===valu4){
  document.getElementById("Souprecipes1").style.display="flex";
  document.getElementById("Souprecipes2").style.display="flex";
  document.getElementById("Souprecipes3").style.display="flex";
  document.getElementById("snacksrecpiecs1").style.display="none";
  document.getElementById("snacksrecpiecs2").style.display="none";
  document.getElementById("snacksrecpiecs3").style.display="none";
  document.getElementById("breakfast1").style.display="none";
  document.getElementById("breakfast2").style.display="none";
  document.getElementById("breakfast3").style.display="none";
  document.getElementById("Lunch1").style.display="none";
  document.getElementById("Lunch2").style.display="none";
  document.getElementById("Lunch3").style.display="none";
  document.getElementById("Dinner1").style.display="none";
  document.getElementById("Dinner2").style.display="none";
  document.getElementById("Dinner3").style.display="none";
}else if(val.value===valu5){
  document.getElementById("snacksrecpiecs1").style.display="flex";
  document.getElementById("snacksrecpiecs2").style.display="flex";
  document.getElementById("snacksrecpiecs3").style.display="flex";
  document.getElementById("breakfast1").style.display="none";
  document.getElementById("breakfast2").style.display="none";
  document.getElementById("breakfast3").style.display="none";
  document.getElementById("Lunch1").style.display="none";
  document.getElementById("Lunch2").style.display="none";
  document.getElementById("Lunch3").style.display="none";
  document.getElementById("Dinner1").style.display="none";
  document.getElementById("Dinner2").style.display="none";
  document.getElementById("Dinner3").style.display="none";
  document.getElementById("Souprecipes1").style.display="none";
  document.getElementById("Souprecipes2").style.display="none";
  document.getElementById("Souprecipes3").style.display="none";
}
}