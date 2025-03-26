export default function MathResult(){
    function add(){
  const n1=document.getElementById("num1").value;
  const n2=document.getElementById("num2").value;
  const result=parseInt(n1)+parseInt(n2);
  document.getElementById("result").innerText=result;
  }
  return(
<>
<h2>Math operation:</h2>
<label for="num1">num1:</label>
<input id="num1"type="number"></input>
<label for="num2">num2:</label>
<input id="num2"type="number"></input>
<button onClick={add}>add</button>
<p id="result"></p>
</>
    );
}