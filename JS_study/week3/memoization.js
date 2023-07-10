function factorial(n) {
    if (Number.isInteger(n) && n > 0) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1); // 재귀적으로 결과를 구해 n의 값을 저장, 캐시로 저장된다.
        }
        return factorial[n];
    } else {
        return '잘못된 숫자가 입력되었습니다.';
    }
}

factorial[1] = 1; // 캐시를 초기화합니다.
factorial(6); // => 720
factorial[5]; // => 120 / 이 값은 이미 캐시에 존재합니다.

console.log(factorial[5]);