module.exports = app => {
  const expense = require("../controllers/expense.controller");
  var router = require("express").Router();

  // SELECT * from expenses
  router.post("/getExpenses", expense.getExpenses);

  /* 
    FOR EMPLOYEES 
  */

  // Create a new Expense Request 
  router.post("/emp/create", expense.createExpense);

  // Retrieve all ONGOING expenses by ID
  router.get("/emp/ongoing", expense.getOngoingByID);

  // Retrieve all PAST (COMPLETE) expenses by ID
  router.get("/emp/complete", expense.getCompleteByID);

  router.get("/emp/expense/:id", expense.getExpensesByID);

  /////////////////////////////////////////////////////
  /*
    FOR MANAGER
  */

  // Retrieve all ONGOING expenses by Department (FOR MANAGER)
  router.get("/man/ongoing", expense.getOngoingByDept);

  // Retrieve all REIMBURSED (COMPLETED) expenses (FOR MANAGER)
  router.get("/man/complete", expense.getCompleteByDept);

  // Update status (ACCEPT/DENY) expenses (FOR MANAGER)
  router.put("/man/update", expense.updateExpenseManager);

  /////////////////////////////////////////////////////
  /*
    FOR AUDITOR
  */

  // Retrieve all Flagged expenses (FOR AUDITOR)
  router.get("/aud/flagged", expense.getFlagged);

  // Update status (Flagged -- ACCEPT/DENY) flagged expenses (FOR AUDITOR)
  router.put("/aud/update", expense.updateExpenseAuditor);

  /////////////////////////////////////////////////////
  /* 
    FOR ADMIN
  */

  // Retrieve all Ongoing expenses (FOR ADMIN)
  router.get("/admin/ongoing", expense.getOngoingExpenses);

  // Delete expense by ID
  router.delete("/admin/:id", expense.delete);

  app.use('/api', router);
}