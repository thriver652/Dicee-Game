var randomnumber1=Math.random()
var h=Math.floor(randomnumber1*6)+1;
var rimg="dice"+h+".png";
var func="images/"+rimg;
var img1=document.querySelectorAll('img')[0];
img1.setAttribute('src',func);

var randomnumber2=Math.random()
var q=Math.floor(randomnumber2*6)+1;
var ring="dice"+q+".png";
var fork="images/"+ring;
var img2=document.querySelectorAll('img')[1];
img2.setAttribute('src',fork);
if(h==q){h=h+1;}
if(h>q)
{
  document.querySelector('h1').textContent='🚩 Player1 Wins!!'
}
if(q>h)
{
  document.querySelector('h1').textContent='Player2 Wins 🚩!!'
}
