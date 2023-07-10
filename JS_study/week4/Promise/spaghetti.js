function boilNoodles() {
    console.log("면 삶기 시작");
    //면 삶기 작업 Promise를 리턴할 것.
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A작업, 면 삶기 완료");
            resolve(1);
        }, 8000);
    });
}

function processB1() {
    console.log("브로콜리 대치기 시작");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("브로콜리 대치기 완료");
            resolve(2);
        }, 1000);
    });
}

function processB2() {
    console.log("마늘과 양파 볶기");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("마늘과 양파 볶기 완료");
            resolve(2);
        }, 2000);
    });
}

function processB3() {
    console.log("베이컨과 햄 볶기");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("베이컨과 햄 볶기 완료");
            resolve(2);
        }, 2000);
    });
}

function processB4() {
    console.log("소스, 남은 야채 넣고 다같이 볶기");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("소스, 남은 야채 넣고 다같이 볶기 완료");
            resolve(2);
        }, 3000);
    });
}

async function processB() {
    try {
        await processB1();
        await processB2();
        await processB3();
        await processB4();
    } catch (error) {
        console.log("B 작업 실패....")
    }
    return new Promise((resolve) => {
        console.log("B 작업 모두 완료");
        resolve(2);
    });
}

function mixAllTogether() {
    console.log("면까지 넣고 다 같이 볶기 시작");
    //프로미스 리턴
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("면까지 넣고 다 같이 볶기 완료");
            resolve();
        }, 3000);
    });
}

async function makeSpaghetti() {
    //두 개의 프로미스를 한번에 실행4
    const results = await Promise.all([boilNoodles(), processB()]);
    console.log("모든 작업 완료, 결과 : ", results)
    await mixAllTogether();
}

makeSpaghetti();