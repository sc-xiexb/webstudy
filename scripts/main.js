const myImage = document.querySelector("img");
myImage.onclick = () => {
  const src = myImage.getAttribute("src");
  if (src === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const name = prompt("请输入你的名字");
  if (!name) {
    setUserName();
  } else {
    localStorage.setItem("name", name);
    myHeading.textContent = `Mozilla is cool,${name}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storeName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool,${storeName}`;
}

myButton.onclick = function () {
  setUserName();
};
