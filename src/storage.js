console.log('I am storage.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  setEventOnAddUserButton();
  showSavedUsers();
});

// wyswietla dane uzytkownikow zapisanych w localStorage
const showSavedUsers = () => {
  const users = JSON.parse(localStorage.getItem('users'));
  users.forEach(user => {
    addUser(user.name, user.lastName, user.age);
  });
}

// dodaje uzytkownika do localStorage
const addUserToStorage = (name, lastName, age) => {
  const user = {
    name: name,
    lastName: lastName,
    age: age
  };
  let users = JSON.parse(localStorage.getItem('users'));
  if (!users) {
    users = [];
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

const addUser = (name, lastName, age) => {
  const tbody = document.querySelector('#users tbody');
  const noUsers = document.querySelector('#no-users-message');
  if (noUsers) {
    tbody.removeChild(noUsers);
  }

  const user = document.createElement('tr');
  const userName = document.createElement('td');
  userName.innerText = name;
  const userLastName = document.createElement('td');
  userLastName.innerText = lastName;
  const userAge = document.createElement('td');
  userAge.innerText = age;
  user.appendChild(userName);
  user.appendChild(userLastName);
  user.appendChild(userAge);

  tbody.appendChild(user);
}

// ustawia nasluch na przycisk
const setEventOnAddUserButton = () => {
  const button = document.querySelector('#new-user button');
  button.addEventListener('click', (e) => {
    const name = document.querySelector('input[name="name"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const age = document.querySelector('input[name="age"]').value;
    addUser(name, lastName, age);
    addUserToStorage(name, lastName, age);
  });
}