const exidMethodChaining = {
    count: 40,
    up() {
        this.count++;
        return this;
    },
    down() {
        this.count--;
        return this;
    },
    showCount() {
        console.log(this.count);
        return this;
    },
};

// 메서드 체이닝을 위해 this를 반환
exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount()