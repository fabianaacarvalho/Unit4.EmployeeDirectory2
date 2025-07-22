const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export function getEmployees() {
  return employees;
}

export function getEmployeeById(id) {
  return employees.find((e) => e.id === +id);
}

export function getRandomEmployee(randomId) {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}

export function addEmployee(name) {
  const emp = { id: employees.length + 1, name };
  employees.push(emp);
  return emp;
}

export default employees;
