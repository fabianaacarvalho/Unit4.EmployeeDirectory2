import express from "express";
const router = express.Router();
export default router;

import {
  getEmployees,
  getRandomEmployee,
  getEmployeeById,
  addEmployee,
} from "../db/employees.js";

router
  .route("/")
  .get((req, res) => {
    const employees = getEmployees();
    res.send(employees);
  })
  .post((req, res) => {
    if (!req.body) return res.status(400).send("Request must have a body.");

    const { name } = req.body;
    if (!name) return res.status(400).send("New employee must have text.");

    const emp = addEmployee(name);
    res.status(201).send(emp);
  });

router.route("/random").get((req, res) => {
  const emp = getRandomEmployee();
  res.send(emp);
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  const emp = getEmployeeById(+id);

  if (!emp) {
    return res.status(404).send("Employee not found");
  }

  res.send(emp);
});
