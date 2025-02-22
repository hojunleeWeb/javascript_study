//숫자 타입으로 변환
console.log(1 - `1`); //0
console.log(1 * `1`); //1
console.log(1 / `one`); //NaN

//+ 단항 연산자는 피연산자가 숫자 타입이 아니라면 숫자 타입으로 변환한다.
console.log(+`1`); //1
console.log(+`string`); //NaN
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10, 20]); // NaN

//빈 문자열 (``), 빈 배열([]), 빈 객체({}), null, false는 0으로 true는 1로 반환된다.
//객체와 빈 배열이 아닌 배열, undefineds는 변환되지 않아 NaN으로 반환된다.

//논리곱 연산자와 논리합 연산자는 논리 연산의 결과를 결정하는 피연산자를 타입변환 하지 않고 그대로 변환한다.
//표현식을 평가하는 도중 평가 결과라 확정된 경우 나머지 평가 과정을 생략해 값을 반환하는데 이를 단축 평가(short-circuit evaluation)이라고 한다.

`cat` || `dog`; //cat -> 논리합 연산자에서 `cat`은 명시적으로 true으로 평가되므로 ||값의 원리에 의거 뒤의 피연산자의 값이 무엇이 되었든간에
//결과가 고정된다. 결국 결과값은 true가 되지만 이때 `cat`이 타입 변환된 true가 아닌 `cat`이 반환되는 것이다.
`cat` && `dog`; //dog

//함수의 매개변수에 기본값을 설정할때 -> 함수를 호출할때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.
//이때 단축 평가를 사용하여 매개변수에 기본값을 설정하면 undefined로 인해 발생하는 문제를 방지할 수 있다.

function getStringLength(str) {
    str = str || ``; //단축 평가를 사용하여 str이 falsy 값이면 빈 문자열을 할당한다.
    //str이 truthy값이면 그 순간 표현문의 평가 결과가 확정되므로 뒤의 표현문은 평가하지 않는다.
    return str.length;
}

//옵셔널 체이닝 연산자
//ES11(ECMAScript2020)에서 도입된 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
//옵셔널 체이닝 연산자는 좌항의 피연산자가 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.

var elem = null;
var value = elem?.value; //elem이 null또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
//var value = elem && elem.value; //옵셔널 체이닝 연산자의 등장 이전에는 논리곱 연산자로 null 또는 undefined를 체크했다.
console.log(value); //undefined

//null 병합 연산자
//ES11(ECMAScript2020)에서 도입된 null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고,
//그렇지 않으면 좌항의 피연산자를 반환한다.
//null 병합 연산자는 변수에 기본값을 설정할 때 유용하다.

var foo = null ?? `default string`; //foo는 null이므로 우항의 피연산자인 `default string`이 반환된다.
console.log(foo); //default string
