var calcDisplay = "";

function btnClick(e) {
  if (e == "AC") {
    calcDisplay = "";
  } else if (/^[0-9\+\-\*\/\.]$/.test(e)) {
    console.log(e);
    calcDisplay += e;
  } else {
    console.log("Input harus berupa angka dan simbol");
  }
  document.getElementById("display").value = calcDisplay;
}

document.getElementById("display").addEventListener('input', function displayChange() {
  console.log(this.value);
  let e = this.value;
  
  let chars = /^[0-9\+\-\*\/\.]+$/;

  if (chars.test(e)) {
    console.log("digits");
  } else {
    alert("Input tidak valid");
  }
});
