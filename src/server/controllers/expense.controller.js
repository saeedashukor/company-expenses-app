const db = require("../models");
const Expense = db.expense;
const Op = db.Sequelize.Op;
const Sequelize = require('sequelize');

//const { Op } = require("sequelize");

// SELECT * from expenses
exports.getExpenses = async (req,res) => {
  let expenses = Expense.findAll()
  .then(data => {
    res.status(200).json(data);
    console.log(expenses);
  })
  .catch(err=> {
    res.status(500).send(err);
  });
}

// Create expense request (FOR EMPLOYEE)
exports.createExpense = async (req, res) => {
  // Create Expense
  var post = req.body;
  const expense_id="";
  const id = post.id;
  const date = post.date;
  const purpose = post.purpose;
  const amount = post.amount;
  const description = post.description;
  const category = post.category;
  const status = "Ongoing";
  const image = post.image;
  const created_at = Sequelize.literal('CURRENT_TIMESTAMP');

  // Save Expense in the database
  const expense = await Expense.create({
    expense_id: expense_id,
    id: id,
    date: date,
    purpose: purpose,
    amount: amount,
    description: description,
    category: category,
    status: status,
    image: image,
    created_at: created_at
  },{
    fields: ['expense_id','id','date','purpose','amount','description','category','status','image','created_at']
  })
    .then(data => {
      res.status(200).json(data);
      console.log(expense);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new Expense Request."
      });
    });
    
};



// Retrieve all ONGOING expenses by ID (FOR EMPLOYEE)
exports.getOngoingByID = (req,res) => {
    const employeeID = req.params.id;

    Expense.findAll({ 
        where: {
            id: employeeID,
            [Op.not]: [{status: "Successful" || "Unsuccessful"}]
        }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving expenses."
        });
      });
}

// Retrieve all PAST (COMPLETE) expenses by ID (FOR EMPLOYEE)
exports.getCompleteByID = (req, res) => {
    const employeeID = req.params.id;
    Expense.findAll({ 
        where: {
            id: employeeID,
            [Op.is]: [{status: "Successful" || "Unsuccessful"}]
        }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving expenses."
        });
      });
    
}

// Retrieve all expenses by employee ID
exports.getExpensesByID = (req, res) => {
  const employeeID = req.params.id;
  
  Expense.findAll({ 
      where: {
          id: employeeID,
      },
      order: [
        ['created_at','DESC']
      ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving expenses."
      });
    });
  
}

// Retrieve all ONGOING expenses by Department (FOR MANAGER)
exports.getOngoingByDept = (req, res) => {
    const department = req.query.department;
    Expense.findAll({ 
        where: {
            department: department,
            [Op.not]: [{status: "Successful" || "Unsuccessful"}]
        }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving expenses."
        });
      });

}

// Retrieve all REIMBURSED (COMPLETED) expenses (FOR MANAGER)
exports.getCompleteByDept = (req, res) => {
    const department = req.query.department;
    Expense.findAll({ 
        where: {
            department: department,
            [Op.is]: [{status: "Successful" || "Unsuccessful"}]
        }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving expenses."
        });
      });
}

// Update status (ACCEPT/DENY) expenses (FOR MANAGER)
exports.updateExpenseManager = async (req, res ) => {
  const department = req.query.department;

  const updated = await Expense.update({
    status: req.query.status
  },{
    where: {
      department: department
    }
  })
  .then(data => {
    res.status(200).json(data);
    console.log(updated);
  })
  .catch(err=> {
    res.status(500).send(err);
  });
}

// Retrieve all Flagged expenses (FOR AUDITOR)
exports.getFlagged = async (req, res) => {
    Expense.findAll({ 
        where: {
            [Op.is]: [{status: "Flagged"}]
        }
    })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving expenses."
      });
    });
}
// Update status (ACCEPT/DENY) flagged expenses (FOR AUDITOR)
exports.updateExpenseAuditor = async (req, res ) => {
  const updated = await Expense.update({
    status: req.query.status // Flagged - Accepted || Flagged - Denied
  },{
    where: {
      status: "Flagged"
    }
  })
  .then(data => {
    res.status(200).json(data);
    console.log(updated);
  })
  .catch(err=> {
    res.status(500).send(err);
  });
}


// Retrieve all Ongoing expenses (FOR ADMIN)
exports.getOngoingExpenses = async (req, res) => {
  Expense.findAll({
    where: {
      status: "Ongoing"
    }
  })
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).send(err);
  });
}

// Delete Expense Request with ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Expense.destroy({
    where: { id: id }
  })
    .then(data => {
        res.send({
          message: "Expense id="+id+ " was deleted successfully!"
        }).json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Expense with id=" + id
      });
    });
};