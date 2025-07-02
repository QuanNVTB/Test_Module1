class workerManagement{
    constructor(stt, name, date, address, wage, position) {
        this.stt = stt;
        this.name = name;
        this.date = date;
        this.address = address;
        this.wage = wage;
        this.position = position;
    }
}
const arraysWorker = [];
arraysWorker.push(new workerManagement("1", "Truong Tan A", "11-11-1997", "Quang Nam", 2000, "Abc"))
arraysWorker.push(new workerManagement("2", "Truong Tan B", "11-11-1998", "Da Nang", 2000, "Abc"))
arraysWorker.push(new workerManagement("3", "Truong Tan C", "11-11-1999", "Hue", 2000, "Abc"))

function showWorker() {
    let workerList = document.getElementById("data");
    workerList.innerHTML = "";
    for(let i = 0; i < arraysWorker.length; i++) {
        workerList.innerHTML +=
            `<tr>
                <td>${arraysWorker[i].stt}</td>
                <td>${arraysWorker[i].name}</td>
                <td>${arraysWorker[i].date}</td>
                <td>${arraysWorker[i].address}</td>
                <td>${arraysWorker[i].wage}</td>
                <td>${arraysWorker[i].position}</td>
            </tr>`
    }
}

function sortByName() {
    arraysWorker.sort((a, b)=> {
        const nameA = a.name.trim().split(" ").pop().toLowerCase();
        const nameB = b.name.trim().split(" ").pop().toLowerCase();
        if (nameA > nameB) {
            return 1;
        } else if (nameA < nameB) {
            return -1;
        } else {
            return 0;
        }
    }
);
    showWorker();
}
sortByName();