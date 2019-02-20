const elements = {
  users: document.querySelector('.users')
};

const users = [
  { name: 'Peter', age: 25 },
  { name: 'Mike', age: 29 },
  { name: 'Carrol', age: 26 },
  { name: 'Judy', age: 56 }
];

const renderUser = user => {
  return `
    <li>
      Name: ${user.name}, age ${user.age}
    </li>
  `;
};

const renderUsers = users => {
  const liUsers = users
    .map(user => renderUser(user))
    .reduce((acc, curr) => acc + curr);
  const markup = `
    <ul>${liUsers}</ul>
  `;
  elements.users.insertAdjacentHTML('beforeend', markup);
};

window.onload = () => {
  renderUsers(users);
};
