import { task_20_constructor } from "./dom_constructor.js";
// global array names soderjit masiv obiectov
// metod renderArray() - pereresuet dom pri liubom deistvii
// addItem()
// deleteItem(index)
// editItem(index) - beret index elementa iz masiva
task_20_constructor();

const array_of_names = ['Mihai', 'Ion', 'Vasia', 'Petya', 'Sasha', 'Vasya', 'Kolya', 'Masha'];
const addBtn = document.querySelector('.inputSubmit');

const renderArray = () => {
  const tableNames = document.querySelector('.tableNames');
  tableNames.innerHTML = '';

  const input = document.querySelector('#nameToAdd');
  input.value = '';

  for(const name of array_of_names) {
    const row = document.createElement('div');
    row.classList.add('row');
    tableNames.appendChild(row);

    const column1 = document.createElement('div');
    column1.classList.add('col');
    column1.classList.add('name');
    column1.innerHTML = name;
    row.appendChild(column1);
    
    const column2 = document.createElement('div');
    column2.classList.add('col');
    column2.classList.add('remove');
    column2.innerHTML = 'X';
    row.appendChild(column2);

    const column3 = document.createElement('div');
    column3.classList.add('col');
    column3.classList.add('edit');
    column3.innerHTML = 'Edit';
    row.appendChild(column3);
    
  }

  const removeBtns = document.querySelectorAll('.remove');

  removeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      deleteItem(index);
    });
  });

  const editBtns = document.querySelectorAll('.edit');

  editBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      editItem(index);
    }); 
  });

  removeEventListener('click', editItem);
}

const addItem = () => {
  const input = document.querySelector('#nameToAdd');

  if ((input.value) && (document.querySelector('.inputSubmit').firstChild.innerHTML === 'Add')) {
    array_of_names.push(input.value);

    renderArray();
  }
}

const deleteItem = (index) => {
  array_of_names.splice(index, 1);

  console.log(array_of_names);

  renderArray();
}

const editItem = (index) => {
  // TODO
}

addBtn.addEventListener('click', () => {
  addItem();
});

renderArray();

// const submitName = document.querySelector(".inputSubmit");
// const namesTable = document.querySelector(".tableNames");

// submitName.addEventListener("click", () => {
//   const valueToAdd = document.querySelector("#nameToAdd").value;

//   if (!(valueToAdd === "")) {
//     // creating new row
//     const newRow = document.createElement("div");
//     newRow.classList.add("row");

//     // creating name column for new row
//     const nameCol = document.createElement("div");
//     nameCol.classList.add("name");
//     nameCol.classList.add("col");
//     nameCol.innerHTML = valueToAdd;
//     document.querySelector("#nameToAdd").value = "";
    
//     // creating remove column for new row
//     const removeCol = document.createElement("div");
//     removeCol.classList.add("remove");
//     removeCol.classList.add("col");
//     removeCol.innerHTML = "X";

//     // connecting the tags to their parents tags
//     newRow.append(nameCol);
//     newRow.append(removeCol);
    
//     // connecting the newly created row to the table
//     namesTable.append(newRow); 
    
//     const removeBtn = document.querySelectorAll(".remove");
    
//     removeBtn.forEach(btn => {
//         btn.addEventListener("click", () => {
//             btn.parentElement.remove();
//         });
//     });
//   }  
// });