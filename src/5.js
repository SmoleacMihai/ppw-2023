// Создайте JSON в котором будет хранится информация о сотруднике:
// ФИО, дата рождения, номер мобильного телефона, адрес проживания, е-мэйл,
// пол, должность, дата начала работы, IDNP, сумма ЗП, место рождения, общий стаж работы (в годах)
// отдел (подразделение где работает сотрудник)
// номер домашнего телефона, рабочий график (с 8:00 до 17:00 и обед с 12: до 13:00)
// Важно: разделите структуру на несколько уровней.

// Создайте эту структуру при помощи https://jsoneditoronline.org/ 
// и сохраните так чтобы созданный JSON был доступен по ссылке. 
// Ссылку добавьте в JS файл (в комментариях).
// Выводите созданный JSON в страницу (создайте для этого HTML+CSS шаблон)

const userJson = `{
  "personal_info": {
      "name": "Smoleac",
      "surname": "Mihai",
      "birthDate": "2002-11-21",
      "birthPlace": "Bucuresti",
      "IDNP": "1234567890123",
      "sex": "M"
  },
  "contacts": {
      "email": "mihaismoleac2002@gmail.com",
      "phone": "074908908",
      "adress": "Strada Mihai Eminescu nr. 1",
      "homePhone": "065751"
  },
  "work_info": {
      "company": "PowerIT",
      "position": "Software Engineer",
      "startDate": "2016-01-01",
      "experience": "5",
      "salary": "1000",
      "schedule": "8:00-17:00",
      "lunch": "12:00-13:00"
  }
}`;

const user = JSON.parse(userJson);

document.body.innerHTML = `
  <div class="informationSpace">
      <h2>Personal information:</h2>
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
      <div id="position">${user.work_info.positon}</div>
      <div id="startDate">${user.work_info.startDate}</div>
      <div id="experience">${user.work_info.experience}</div>
      <div id="salary">${user.work_info.salary}</div>
      <div id="schedule">${user.work_info.schedule}</div>
      <div id="lunch">${user.work_info.lunch}</div>
  </div>`;

  // peredelati cerez for in libo object entries