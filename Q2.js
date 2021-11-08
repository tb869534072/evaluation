const data = [
    { region: 'US', model: 'A', sales: 150 },
    { region: 'US', model: 'B', sales: 120 },
    { region: 'US', model: 'C', sales: 350 },
    { region: 'EU', model: 'A', sales: 200 },
    { region: 'EU', model: 'B', sales: 100 },
    { region: 'EU', model: 'C', sales: 250 },
    { region: 'CA', model: 'A', sales: 200 },
    { region: 'CA', model: 'B', sales: 100 },
    { region: 'CA', model: 'C', sales: 230 },
    { region: 'CA', model: 'D', sales: 400 },
];

let set = new Set();
data.forEach(obj => {
    set.add(obj["region"]);
});
const regions = Array.from(set);

set.clear();
data.forEach(obj => {
    set.add(obj["model"]);
});
const models = Array.from(set);

regions.forEach(region => {
    let option = document.createElement("option");
    option.text = region;
    document.getElementById("box1").add(option);
})

models.forEach(model => {
    let option = document.createElement("option");
    option.text = model;
    document.getElementById("box2").add(option);
})





let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
tbody.setAttribute("id", "tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);

let row1 = document.createElement("tr");
let heading1 = document.createElement("th");
heading1.innerHTML = "region";
let heading2 = document.createElement("th");
heading2.innerHTML = "model";
let heading3 = document.createElement("th");
heading3.innerHTML = "sales";

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);






data.forEach(obj => {
    let newRow = document.createElement("tr");
    let newCol1 = document.createElement("td");
    newCol1.innerHTML = obj["region"];
    let newCol2 = document.createElement("td");
    newCol2.innerHTML = obj["model"];
    let newCol3 = document.createElement("td");
    newCol3.innerHTML = obj["sales"];

    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    tbody.appendChild(newRow);
});

window.onload = () => {
    document.getElementById("box1").addEventListener("change", (event) => {sync1(event);});
    document.getElementById("box2").addEventListener("change", (event) => {sync2(event);});
}

const sync1 = (event) => {
    let body = document.getElementById("tbody");
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    let input = event.target.value;

    if (input === "all") {
        data.forEach(obj => {
            let newRow = document.createElement("tr");
            let newCol1 = document.createElement("td");
            newCol1.innerHTML = obj["region"];
            let newCol2 = document.createElement("td");
            newCol2.innerHTML = obj["model"];
            let newCol3 = document.createElement("td");
            newCol3.innerHTML = obj["sales"];
        
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            tbody.appendChild(newRow);
        });
    } else {
        data.filter(ele => ele["region"] === input).forEach(obj => {
            let newRow = document.createElement("tr");
            let newCol1 = document.createElement("td");
            newCol1.innerHTML = obj["region"];
            let newCol2 = document.createElement("td");
            newCol2.innerHTML = obj["model"];
            let newCol3 = document.createElement("td");
            newCol3.innerHTML = obj["sales"];
    
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            tbody.appendChild(newRow);
        });
    }    
}

const sync2 = (event) => {
    let body = document.getElementById("tbody");
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    let input = event.target.value;

    if (input === "all") {
        data.forEach(obj => {
            let newRow = document.createElement("tr");
            let newCol1 = document.createElement("td");
            newCol1.innerHTML = obj["region"];
            let newCol2 = document.createElement("td");
            newCol2.innerHTML = obj["model"];
            let newCol3 = document.createElement("td");
            newCol3.innerHTML = obj["sales"];
        
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            tbody.appendChild(newRow);
        });
    } else {
        data.filter(ele => ele["model"] === input).forEach(obj => {
            let newRow = document.createElement("tr");
            let newCol1 = document.createElement("td");
            newCol1.innerHTML = obj["region"];
            let newCol2 = document.createElement("td");
            newCol2.innerHTML = obj["model"];
            let newCol3 = document.createElement("td");
            newCol3.innerHTML = obj["sales"];
    
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            tbody.appendChild(newRow);
        });
    }    
}
