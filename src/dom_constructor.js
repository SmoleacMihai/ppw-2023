export const task_3_constructor = () => {
  const element = document.createElement("button");
  element.innerHTML = "Change background to orange";
  document.body.appendChild(element);
}

export const task_4_constructor = () => {
  const list = document.createElement('ol');
  list.id = 'list';
  document.body.appendChild(list);
}

export const task_5_constructor = () => {
  const task5_content = document.createElement('div');
  task5_content.id = 'task5_content';
  document.body.appendChild(task5_content);

  const increment = document.createElement('button');
  increment.id = 'increment';
  increment.innerHTML = '+';
  task5_content.appendChild(increment);

  const counter = document.createElement('input');
  counter.id = 'counter';
  counter.value = 0;
  counter.style.textAlign = 'center';
  task5_content.appendChild(counter);

  const decrement = document.createElement('button');
  decrement.id = 'decrement';
  decrement.innerHTML = '-';
  task5_content.appendChild(decrement);
}

export const task_6_constructor = () => {
  const task6_content = document.createElement('div');
  task6_content.id = 'task6_content';
  document.body.appendChild(task6_content);

  const table = document.createElement('table');

  for (let i = 0; i < 8; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

  
      for (let j = 0; j < 8; j++) {
        const td = document.createElement('td');

        if ((i + j) % 2 === 0) {
          td.className = "whiteSquare";
        } else {
          td.className = "blackSquare";
        }

        tr.appendChild(td);
      }
    // } else {
    //     for (let j = 0; j < 8; j++) {
    //       const td = document.createElement('td');


    //     tr.appendChild(td);
    //   }
    // }
  }

  task6_content.appendChild(table);
}

export const task_7_constructor = () => {
  const container = document.createElement('div');
  container.className = 'task7_content';
  const list_of_links = [
  "https://stackoverflow.com/questions/55619926/how-to-remove-all-the-numbers-from-an-array",
  "https://stackoverflow.com/questions/55619926/how-to-remove-all-the-numbers-from-an-array",
  "https://stackoverflow.com/questions/55619926/how-to-remove-all-the-numbers-from-an-array",
  "./index.html",
  "https://www.youtube.com/watch?v=For9VtrQx58&ab_channel=Codecademy",
  "https://www.youtube.com/watch?v=For9VtrQx58&ab_channel=Codecademy",
  "https://www.youtube.com/watch?v=For9VtrQx58&ab_channel=Codecademy",
  "https://www.youtube.com/watch?v=For9VtrQx58&ab_channel=Codecademy",
  "./index2.html",
  "https://www.youtube.com/watch?v=For9VtrQx58&ab_channel=Codecademy",
  ];

  list_of_links.forEach(link => {
    const link_element = document.createElement('a');
    link_element.href = link;
    link_element.innerHTML = link;
    link_element.className = 'link';
    container.appendChild(link_element);
  });

  document.body.appendChild(container);
}

export const task_8_constructor = () => {
  const inputName = document.createElement('input');
  inputName.id = 'inputName';
  inputName.placeholder = 'Name';
  inputName.type = 'text';
  document.body.appendChild(inputName);

  const btnAddName = document.createElement('button');
  btnAddName.id = 'addName';
  btnAddName.innerHTML = 'Add';
  document.body.appendChild(btnAddName);

  const list = document.createElement('ol');
  list.id = 'listOfNames';
  document.body.appendChild(list);

}

export const task_10_constructor = () => {
  const field = document.createElement('div');
  field.id = 'field';
  document.body.appendChild(field);

  const ball = document.createElement('div');
  ball.id = 'ball';
  field.appendChild(ball);

  const btnCenter = document.createElement('button');
  btnCenter.id = 'center';
  btnCenter.innerHTML = 'Center';
  document.body.appendChild(btnCenter);

  const leftUp = document.createElement('button');
  leftUp.id = 'leftUp';
  leftUp.innerHTML = 'Left Up';
  document.body.appendChild(leftUp);

  const rightUp = document.createElement('button');
  rightUp.id = 'rightUp';
  rightUp.innerHTML = 'Right Up';
  document.body.appendChild(rightUp);
  
  const leftDown = document.createElement('button');
  leftDown.id = 'leftDown';
  leftDown.innerHTML = 'Left Down';
  document.body.appendChild(leftDown);

  const rightDown = document.createElement('button');
  rightDown.id = 'rightDown';
  rightDown.innerHTML = 'Right Down';
  document.body.appendChild(rightDown);

  field.style.width = "600px";
  field.style.height = "400px";
  field.style.backgroundColor = "green";
  field.style.position = "relative";

  ball.style.width = "50px";
  ball.style.height = "50px";
  ball.style.position = "absolute";
  ball.style.backgroundColor = "red";
  ball.style.borderRadius = "50%";
}

export const task_18_constructor = () => {
  const img = document.createElement('img');
  img.src = 'img/player.svg';
  img.id = 'player';
  document.body.appendChild(img);

  const viewport = document.createElement('div');
  viewport.id = 'viewport';
  document.body.appendChild(viewport);

  const player2 = document.createElement('div');
  player2.id = 'player2';
  viewport.appendChild(player2);             
}

export const task_19_constructor = () => {

  const parents = document.createElement('div');
  parents.id = 'parents';
  document.body.appendChild(parents);

  const parent_left = document.createElement('div');
  parent_left.id = 'parent-left';
  parent_left.classList.add('parent');
  parents.appendChild(parent_left);

  const parent_right = document.createElement('div');
  parent_right.id = 'parent-right';
  parent_right.classList.add('parent');
  parents.appendChild(parent_right);

  const child = document.createElement('p');
  child.id = 'child';
  child.classList.add('draggable');
  child.innerHTML = 'Im a child';
  child.draggable = true;
  parent_left.appendChild(child);
}

export const task_20_constructor = () => {
  const firstRow = document.createElement('div');
  firstRow.classList.add('firstRow');
  // firstRow.innerHTML = 'Name';
  document.body.appendChild(firstRow);

  const tableNames = document.createElement('div');
  tableNames.className = 'tableNames';
  document.body.appendChild(tableNames);


  const column1 = document.createElement('div');
  column1.classList.add('col');
  column1.classList.add('name');
  column1.innerHTML = 'Name';
  firstRow.appendChild(column1);

  const addSection = document.createElement('div');
  addSection.classList.add('addSection');
  document.body.appendChild(addSection);

  const input = document.createElement('input');
  input.id = 'nameToAdd';
  input.placeholder = 'Guest';
  input.type = 'text';
  addSection.appendChild(input);

  const btnAdd = document.createElement('div');
  btnAdd.classList.add('inputSubmit');
  addSection.appendChild(btnAdd);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Add';
  btnAdd.appendChild(paragraph);

  // const teamplateRow = document.createElement('div');
  // teamplateRow.classList.add('row');
  // document.body.innerHTML = `
  // <div class="tableNames">
    //   <div class="row firstRow">
    //     <div class="col name">Name</div>
    //     <div class="col"></div>
    //   </div>
    //   <div class="row">
    //     <div class="col name">John</div>
    //     <div class="col remove">X</div>
//       </div>
  // </div>
//<div class="addSection">
//   <div class="input">
//     <input type="text" placeholder="Guest" id="nameToAdd">
//   </div>
//   <div class="inputSubmit">
//     <p>Add</p>
//   </div>
//</div>`;
}