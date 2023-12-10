//Global Variables
var row = null;

function Submit() {
  var dataEntered = retrieveData();
  var readData = readFromLocal(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = `<h3 style="color: red;">Please Enter Complete Data!</h3>`;
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = `<h3 style="color: lightgreen;">Data Inserted!</h3>`;
    } else {
      update();
      msg.innerHTML = `<h3 style="color: yellow;">Data Updated!</h3>`;
    }
  }
  document.getElementById("form").reset();
}

//CREATE
function retrieveData() {
  var nama = document.getElementById("nama").value;
  var npm = document.getElementById("npm").value;
  var kelas = document.getElementById("kelas").value;
  var jurusan = document.getElementById("jurusan").value;

  var arr = [nama, npm, kelas, jurusan];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

//READ
//Date in LocalStorage
function readFromLocal(dataEntered) {
  //Storing in LS
  var n = localStorage.setItem("Nama", dataEntered[0]);
  var r = localStorage.setItem("NPM", dataEntered[1]);
  var b = localStorage.setItem("Kelas", dataEntered[2]);
  var j = localStorage.setItem("Jurusan", dataEntered[3]);

  //Getting from LS to Table
  var n1 = localStorage.getItem("Nama", n);
  var r1 = localStorage.getItem("NPM", r);
  var b1 = localStorage.getItem("Kelas", b);
  var j1 = localStorage.getItem("Jurusan", j);

  var arr = [n1, r1, b1, j1];
  return arr;
}

//INSERT
function insert(readData) {
  var row = table.insertRow();
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = readData[3];

  row.insertCell(4).innerHTML = `<button onclick = edit(this)> Edit </button> 
                                 <button onclick = remove(this)> Delete </button>`;
}

// //EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("nama").value = row.cells[0].innerHTML;
  document.getElementById("npm").value = row.cells[1].innerHTML;
  document.getElementById("kelas").value = row.cells[2].innerHTML;
  document.getElementById("jurusan").value = row.cells[3].innerHTML;
}

// //UPDATE
function update() {
  row.cells[0].innerHTML = document.getElementById("nama").value;
  row.cells[1].innerHTML = document.getElementById("npm").value;
  row.cells[2].innerHTML = document.getElementById("kelas").value;
  row.cells[3].innerHTML = document.getElementById("jurusan").value;

  row = null;
}

//DELETE
function remove(td) {
  var ans = confirm("Apa kamu yakin ingin menghapus data ini");
  if (ans == true) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
  }
}
