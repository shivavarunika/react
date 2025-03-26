export default function WordCount(){
    function countword(){
        const text=document.getElementById("text").value;
        let cnt=text.length>0?1:0;
        for(let i=0;i<text.length-1;i++){
            if(text[i]===' ')
                cnt++;
        }
        document.getElementById("resulti").innerText=cnt;
    }
    return(
        <>
            <h2>count word:</h2>
            <textarea id="text"></textarea>
            <button onClick={countword}>find count</button>   
            <p id="resulti"></p>
        </>
    );
} 