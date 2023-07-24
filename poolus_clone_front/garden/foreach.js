const students = [{
        "name": "김현준",
        "department": "산업경영공학과",
    },
    {
        "name": "노승희",
        "department": "미디어소프트웨어학과",
    },
]

students.forEach(
    function myFunction(student) {
        console.log(student.name);
        console.log(student.department);
        console.log('------')
    }

);


const template = `
    <button>
        <div class="booth d-flex">
            <div class="boothimg"><img src="./gardenImg/booth.png" alt="부스이미지"></div>
            <div class="boothinfo d-flex flex-column justify-content-center text-start">
                <p class="boothtitle mb-1">${item.department}</p>
                <p class="boothsub mb-0">${menusToShow.map(menu => `<span>${menu.name}</span><br/>`).join('')}</p>
            </div>
        </div>
    </button>
    `;
    $(".boothSection").append(template);
