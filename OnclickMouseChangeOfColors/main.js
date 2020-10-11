document.body.addEventListener("click", () => {
  let x = event.clientX;
  let y = event.clientY;
  console.log(x, y);

  if (x % 2 === 0 && y % 2 === 0) {
    document.querySelector("body").style.backgroundColor = "red";
  }

  if (x % 2 !== 0 && y % 2 !== 0) {
    document.querySelector("body").style.backgroundColor = "blue";
  }
  if ((x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0)) {
    document.querySelector("body").style.backgroundColor = "green";
  }
});
