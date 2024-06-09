var newtext = document.getElementById('text');

newtext.addEventListener("mouseout", function() {
    newtext.textContent = "Can I help you"
  })

newtext.addEventListener("mouseover", function() {
    newtext.textContent = "Hello World"})



   


function image(){
   var y=document.getElementById("change").value;
if(y=="jordan"){
     document.getElementById ("im").src=`"/image/"${value}".jpeg"`;
    

}
else(     document.getElementById ("im").src="valve");


    }


//   //////////////////////////// 
const fonttype=document.getElementById("font");
fonttype.addEventListener("click",changefont);



function changefont(){
    let x=document.getElementById("par");
    if(fonttype.value=="Times New Roman")
        {
            x.style.fontFamily="Times New Roman";
        }
else( x.style.fontFamily="Fantasy")
}


let size=document.getElementById("font-size");
size.addEventListener("click",changesize);

function changesize(){
let s=document.getElementById("par");
if(size.value== "10pt"){
s.style.fontSize="10pt"
}
else(
    s.style.fontSize="15pt"
)
}



let I=document.getElementById("Italic");
I.addEventListener("click" ,checked);

function checked(){
  var a=document.getElementById("par");
  if(I.checked) { a.style.fontStyle="Italic";
}
else{a.style.fontStyle="normal";}
}


let b=document.getElementById("Bold");
b.addEventListener("click" ,checked1);

function checked1(){
  var a=document.getElementById("par");
  if(b.checked) { a.style.fontWeight="Bold";
}
else{a.style.fontWeight="normal";}
}





let U=document.getElementById("Underline");
U.addEventListener("click" ,checked2);

function checked2(){
  var a=document.getElementById("par");
  if(U.checked) { a.style.textDecorationLine="Underline";
}
else{a.style.textDecorationLine="none";}
}


let images=document.images[1];
images.src=""
console.log(images.src);