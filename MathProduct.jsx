export default function MathProductt(){
    function mul(){
  const n1=document.getElementById("nu1").value;
  const n2=document.getElementById("nu2").value;
  const result=parseInt(n1)*parseInt(n2);
  document.getElementById("resultm").innerText=result;
  }
  return(
<>
<h2>Math Product:</h2>
<label for="nu1">num1:</label>
<input id="nu1"type="number"></input>
<label for="nu2">num2:</label>
<input id="nu2"type="number"></input>
<button onClick={mul}>multiply</button>
<p id="resultm"></p>
</>
    );
}