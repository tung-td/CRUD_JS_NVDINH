const students = [
    {
        id: '1',
        name: "Dinh",
        address: "hue"
    },
    {
        id: '2',
        name: "Nam",
        address: "quang nam"
    },
    {
        id: '3',
        name: "Tan",
        address: "da nang"
    },
    {
        id: '4',
        name: "Hung",
        address: "hue"
    },
    {
        id: '5',
        name: "Tri",
        address: "quang tri"
    },
    {
        id: '6',
        name: "Anh",
        address: "hue"
    },
    {
        id: '7',
        name: "Binh",
        address: "da nang"
    }
];

const ul = document.getElementById("list-students");
const nameInput = document.querySelector('input[name="name"]');
const addressInput = document.querySelector('input[name="address"]');
const createButton = document.getElementById("create");

renderStudents();

function renderStudents() {
    ul.innerHTML = ''
    students.forEach(student => {
        const li = document.createElement("li")
        const p = document.createElement("p")
        const del = document.createElement("button")
        const edt = document.createElement("button")

        li.textContent = `Name: ${student.name}`
        li.style.fontWeight = "Bolder"
        li.style.fontSize = "20px"
        p.textContent = `Address: ${student.address}`
        del.textContent = `Xóa`
        edt.textContent = `Sửa`

        del.addEventListener("click", function () {
            const delStudent = students.findIndex(function (item) {
                return item.id === student.id
            })
            if (delStudent !== -1) {
                students.splice(delStudent, 1)
                renderStudents()
            }
            nameInput.value = ''
            addressInput.value = ''
        })

        edt.addEventListener("click", function () {
            const name = nameInput.value;
            const address = addressInput.value;

            const edtStudent = students.findIndex(function (item) {
                return item.id = student.id
            })
            if (edtStudent !== -1) {
                student.name = name
                student.address = address
                renderStudents()
            }
            nameInput.value = ''
            addressInput.value = ''
        })

        ul.appendChild(li)
        ul.appendChild(p)
        ul.appendChild(del)
        ul.appendChild(edt)
    });
}

createButton.addEventListener("click", function () {
    const name = nameInput.value;
    const address = addressInput.value;

    const newStudent = {
        id: (students.length + 1).toString(),
        name: name,
        address: address
    }

    students.push(newStudent);
    renderStudents();
})







