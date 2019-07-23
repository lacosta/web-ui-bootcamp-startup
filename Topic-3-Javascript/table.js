function myTable(matrixOfData) {
  const table = document.createElement('table');
  table.setAttribute("border","2")
  table.setAttribute("bordercolor","blue")
  matrixOfData.forEach(row => {
    let newRow = table.insertRow();
    row.forEach(cell => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(cell));
    });
  });
  return table;
}
 const dataTable = [['M', 'o', 't', 'o', 'r', 'o', 'l', 'a'], [1,2,3,4,5,6,7,8], ['M', 'o', 't', 'o', 'r', 'o', 'l', 'a']];
document.querySelector('body').appendChild(myTable(dataTable));