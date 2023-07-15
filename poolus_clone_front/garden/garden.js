const boothTitle = document.querySelector('.boothtitle');
const boothSub = document.querySelector('.boothsub');

console.log(boothTitle)

const item = {
    department: '동아리연합회 부스',
    menus: [
        { name: '바나나 브륄레 + 아이스크림', price: '2,000원' },
        { name: '바나나 브륄레', price: '1,500원' }
    ]
};

boothTitle.textContent = item.department;

item.menus.forEach(menu => {
    const span = document.createElement('span');
    span.textContent = menu.name;
    boothSub.appendChild(span);
    boothSub.appendChild(document.createElement('br'));
});