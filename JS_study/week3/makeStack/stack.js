// 스택으로 사용할 배열이 들어있는 객체를 리턴하는 함수
const stackCreate = () => ({
    arr: []
});

// 배열이 비어있는지 확인
const stackEmpty = (stack) => stack.arr.length === 0; // boolean 값 리턴

// data를 가장 위에 추가
const stackPush = (stack, data) => {
    stack.arr.push(data); // stack 배열 안에 data 값을 push 한다. 리턴 값 없음
}

// 맨 위의 자료를 리턴
const stackPeek = (stack) => stack.arr[stack.arr.length - 1]; // stack의 가장 상단의 데이터를 리턴

// 맨 위의 자료를 제거
const stackPop = (stack) => {
    if (!stackEmpty(stack)) {
        stack.arr.pop(); // 마지막 요소를 제거하고 그 값을 반환
    }
}

// 단일 표현식의 경우 암묵적으로 반환되기 때문에 별도로 return 사용하지 않아도 됨.

// 스택 생성
const myStack = stackCreate();

console.log("초기 값 : ", myStack); // arr에 접근한 것을 알 수 있음.

console.log("비어있는지 확인", stackEmpty(myStack)); // true, 비어있는 상태 확인

stackPush(myStack, 1);
stackPush(myStack, 2);
stackPush(myStack, 3);
stackPush(myStack, 4);
stackPush(myStack, 5);
stackPush(myStack, 6); // 값들을 넣음

console.log("stackPush 이후의 값 : ", myStack); // push한 후 배열

console.log("stackPeek : ", stackPeek(myStack)); // 맨 위의 자료 리턴

stackPop(myStack);
stackPop(myStack);

console.log("stackPop 이후의 값 : ", myStack); // pop한 후 배열

console.log("비어있는지 확인", stackEmpty(myStack)); // false, 비어있는 상태 확인