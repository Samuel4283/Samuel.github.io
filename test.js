const myHeading = document.querySelector("h1");
myHeading.textContent="hello world!"
alert("你好！");
//事件
document.querySelector("html").addEventListener("click",()=>{
    alert("别戳我，我怕疼！");
});

//換圖
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "D:/winter桌布/1.png") {
    myImage.setAttribute("src", "D:/winter桌布/2.png");
  } else {
    myImage.setAttribute("src", "D:/winter桌布/1.png");
  }
};
let changeUserButtom=document.querySelector("button");
function setuser(){
    const myname=prompt("Please enter your name");
    if(!myname){
        setuser();
    }else{
        localStorage.setItem("name",myname);
        myHeading.textContent=`wellcome to my page ${myname}`;
    }
}
if(!localStorage.getItem("name")){
    setuser();
}else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`wellcome to mypage ${storedName}`
}
changeUserButtom.onclick=function (){
    setuser();
}