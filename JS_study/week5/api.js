async function api() { // 비동기 함수 api 선언
    try {
        result = await fetch('https://jsonplaceholder.typicode.com/users/1') // 해당 url에서 데이터를 가져옴
            .then(res => res.json()); // 결과를 res 변수에 할당 후 json 형식으로 변환
        // 결과가 json 형태로 변환되어 result에 저장됨
    } catch (error) {
        console.log(error);
    }
    console.log(result); // 받아온 데이터 출력
}

api();