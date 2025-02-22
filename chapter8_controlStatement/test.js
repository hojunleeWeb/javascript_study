//switch statement
var day = 2;
switch (
    day //표현식
) {
    case 1: //표현식1
        console.log(`월요일`); //
        break; // break문이 없으면 case의 표현식과 switch문의 표현식의 비교는 끝나지 않는다.
    case 2: //표현식2
        console.log(`화요일`);
        break;
    case 3: //표현식3
        console.log(`수요일`);
        break;
    default: //표현식과 case의 표현식 중에서 일치하는 case 문이 없을때 실행
        console.log(`일요일`);
}

//while문은 괄호 내의 조건식의 평과 결과가 참일때 반복문을 반복 실행한다. -> 조건식이 거짓이 되면 반복문을 종료한다.
//만약 조건식의 평가 결과가 bool 값이 아니면 bool 값으로 강제 변환된다.
while (true) {
    var answer = confirm(`계속할까요?`);
    if (!answer) break;
}
