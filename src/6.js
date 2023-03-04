// Используя структуру из предыдущей задачи, создайте массив сотрудников и напишите следующий функционал:
// - вывод в странице всех сотрудников;
// - вывод в отдельный HTML блок общей информации о ЗП сотрудников;
// - средняя ЗП по всем сотрудникам;
// - минимальная ЗП;
// - максимальная ЗП;
// - сумма всех ЗП;


const users = `[{
  "personal_info": {
      "name": "Smoleac",
      "surname": "Mihai",
      "birthDate": "2002-11-21",
      "birthPlace": "Balti",
      "IDNP": "1234567890123",
      "sex": "M"
  },
  "contacts": {
      "email": "mihaismoleac2002@gmail.com",
      "phone": "074908908",
      "adress": "Strada Mihai Eminescu nr. 1",
      "homePhone": "075751"
  },
  "work_info": {
      "company": "Google",
      "position": "Software Engineer",
      "startDate": "2016-01-01",
      "experience": "5",
      "salary": "1000",
      "schedule": "8:00-17:00",
      "lunch": "12:00-13:00"
  }
},
{
  "personal_info": {
      "name": "Dmitri",
      "surname": "Cojocari",
      "birthDate": "2001-09-21",
      "birthPlace": "Bucuresti",
      "IDNP": "1234252490123"
  },
  "contacts": {
      "email": "cojocarida@gmail.com",
      "phone": "074908408",
      "adress": "Lesecico 4",
      "homePhone": "056471"
  },
  "work_info": {
      "company": "PowerIT",
      "position": "Backend Developer",
      "startDate": "2021-01-01",
      "experience": "10",
      "salary": "100",
      "schedule": "8:00-17:00",
      "lunch": "12:00-13:00"
  }
},
{
  "personal_info": {
      "name": "Popescu",
      "surname": "Mihai",
      "birthDate": "2001-09-21",
      "birthPlace": "Bucuresti",
      "IDNP": "1234252490123"
  },
  "contacts": {
      "email": "popescu2@gmail.com",
      "phone": "074908408",
      "adress": "Lesecico 4",
      "homePhone": "056471"
  },
  "work_info": {
      "company": "PowerIT",
      "position": "Frontend Developer",
      "startDate": "2021-01-01",
      "experience": "10",
      "salary": "100",
      "schedule": "8:00-17:00",
      "lunch": "12:00-13:00"
  }
},
{
  "personal_info": {
      "name": "Smantana",
      "surname": "Ion",
      "birthDate": "2001-09-21",
      "birthPlace": "Bucuresti",
      "IDNP": "1234252490123"
  },
  "contacts": {
      "email": "smantana",
      "phone": "074908408",
      "adress": "Lesecico 4",
      "homePhone": "056471"
  },
  "work_info": {
      "company": "PowerIT",
      "position": "Devops",
      "startDate": "2021-01-01",
      "experience": "10",
      "salary": "2341",
      "schedule": "8:00-17:00",
      "lunch": "12:00-13:00"
  }
},
{
  "personal_info": {
      "name": "Popescu",
      "surname": "Mihai",
      "birthDate": "2001-09-21",
      "birthPlace": "Bucuresti",
      "IDNP": "1234252490123"
  },
  "contacts": {
      "email": "sadads@gmail.com",
      "phone": "074908408",
      "adress": "Lesecico 4",
      "homePhone": "056471"
  },
  "work_info": {
      "company": "PowerIT",
      "position": "Devops",
      "startDate": "2021-01-01",
      "experience": "10",
      "salary": "2453",
      "schedule": "8:00-17:00",
      "lunch": "12:00-13:00"
  }
}
]`;

const usersArr = JSON.parse(users);

const averageSalary = (users) => {
  const salaries = users.map(user => Number(user.work_info.salary));

  return salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;;
}

const maxSalary = (users) => {
  const salaries = users.map(user => Number(user.work_info.salary));

  return Math.max(...salaries);
}

const minSalary = (users) => {
  const salaries = users.map(user => +user.work_info.salary);

  return Math.min(...salaries);
}

const sumSalary = (users) => {
  const salaries = users.map(user => +user.work_info.salary);

  return salaries.reduce((acc, curr) => acc + curr, 0);
}

let count = 0;

usersArr.forEach(user => {
  count++;
  document.body.innerHTML += `
  <div class="informationSpace">
      <h2>Personal information for User ${count}:</h2>
      <div id="name">${user.personal_info.name} ${user.personal_info.surname}</div>
      <div id="birthDate">${user.personal_info.birthDate}</div>
      <div id="birthPlace">${user.personal_info.birthPlace}</div>
      <div id="IDNP">${user.personal_info.IDNP}</div>
      <div id="sex">${user.personal_info.sex}</div>
  </div>
  <div class="informationSpace">
      <h2>Contact information:</h2>
      <div id="email">${user.contacts.email}</div>
      <div id="phone">${user.contacts.phone}</div>
      <div id="adress">${user.contacts.adress}</div>
      <div id="homePhone">${user.contacts.homePhone}</div>
  </div>
  <div class="informationSpace">
      <h2>Work information:</h2>
      <div id="company">${user.work_info.company}</div>
      <div id="position">${user.work_info.position}</div>
      <div id="startDate">${user.work_info.startDate}</div>
      <div id="experience">${user.work_info.experience}</div>
      <div id="salary">${user.work_info.salary}</div>
      <div id="schedule">${user.work_info.schedule}</div>
      <div id="lunch">${user.work_info.lunch}</div>
  </div>`;
});

document.body.innerHTML += `
  <div class="informationSpace">
    <h2>Salary information:</h2>
    <div id="averageSalary">Average salary: ${averageSalary(usersArr)}</div>
    <div id="maxSalary">Max salary: ${maxSalary(usersArr)}</div>
    <div id="minSalary">Min salary: ${minSalary(usersArr)}</div>
    <div id="sumSalary">Sum of salaries: ${sumSalary(usersArr)}</div>
  </div>`;

  // vivesti v metod