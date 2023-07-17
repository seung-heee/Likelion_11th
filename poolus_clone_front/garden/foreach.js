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