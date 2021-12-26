
var x = 0;

function addInput() {
  var profile = document.getElementById('profile');
  var div = document.createElement('div');
  div.id = 'input' + ++x;
  div.class = 'in0';
  // div.innerHTML = '<input type="text" class="num1" placeholder="Название"> <input type="text" class="num2" placeholder="цена"> <div class="counter" onclick="delInput()">-</div>';
  div.innerHTML = ' <div id="input0" class="in0">  <div class="insid">    <input type="text" class="num" id="" placeholder="Название">    <input type="text"  class="num" id="num1"   placeholder="цена">  </div>  <div class="counter" onclick="delInput()">-</div></div>';
  profile.appendChild(div);
}

function delInput() {
  var div = document.getElementById('input' + x);
  div.remove();
  --x;
}



// function func() {
//     var result; //переменная для результата

//     var num1 = Number(document.getElementById("num1").value);
//     var num2 = Number(document.getElementById("num2").value);

//     result = num1 + num2;
//     document.getElementById("result").innerHTML = result;
// }

function setBalance(){
  if (num1.value && num2.value) {
      // var sum = 0;
      result.value = parseFloat(num1.value) + parseFloat(num2.value)
       
  }
}

num1.addEventListener("input", setBalance)
num2.addEventListener("input", setBalance)