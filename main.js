let target = document.querySelector("#dynamic");

function selectt(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to python", "Learn to Ruby"]
    let selectArr = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectString = selectArr.split("");
    
    return selectString;
}


// 타이머 
function resetTyping(){
    target.textContent="";
    select(selectt());
    
}


// 한글자씩 텍스트 출력
function select(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            select(randomArr);
        },80);
    }
    else{
        setTimeout(resetTyping ,3000);
    }
}

select(selectt());



// 커서 깜빡임
function blink () {
    target.classList.toggle("active");
}
setInterval(blink, 500);