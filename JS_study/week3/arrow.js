// 함수 선언식, 호이스팅O
function main() {
    console.log("hello");
}

// 함수 표현식, 익명함수를 선언함과 동시에 변수 main에 할당, 호이스팅X
const main = function() {
    console.log("hello");
}

// 화살표 함수, 함수 표현식에서 function 지우고 화살표 붙임
const main = () => {
    console.log("hello");
}

function add(a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
}

const add = (a, b) => a + b; // 중괄호, 리턴 생략 / 결과값 자동 리턴

function print(text) {
    console.log(text);
}

const print = (text) => console.log(text);

const print = text => console.log(text);

function main() {
    // 매개변수 명시하지 않아도 arguments를 암묵적으로 전달받음
    // arguments 배열 형태로 들어가 있음
    // 인자를 담고 있는 배열 형태의 객체, 정확하게 배열은 아님
    // argumnets -> 인자의 갯수가 정해지지 않은 가변인자가 전달되는 함수를 쓸 때 유용
    console.log(arguments);
}

main(1, 2, 3);