const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// SELECT * from users
exports.getUsers = async (req,res) => {
  let users = User.findAll()
  .then(data => {
    res.status(200).json(data);
    console.log(users);
  })
  .catch(err=> {
    res.status(500).send(err);
  });
}

// Get all users details for Profile (except password!)
exports.getUserDetails = async (req,res) => {
  const email = req.query.email;
  const user = User.findOne({
    attributes: ['id','email','first_name','last_name','department','role'],
    where: {
      email: email
    }
  })
  .then(data => {
    res.status(200).json(data);
    console.log(user);
  })
  .catch(err=> {
    res.status(500).send(err);
  });
}

// Create and Save a new User (FOR ADMIN)
exports.createUser = async (req, res) => {
  // Create User
  const id = req.query.id;
  const email = req.query.email;
  const password = req.query.password;
  const first_name =req.query.first_name;
  const last_name = req.query.last_name;
  const role = req.query.role;
  const department = req.query.department;

  // Save User in the database
  const user = await User.create({
    id: id,
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    role: role,
    department: department,
  },{
    fields: ['id', 'email', 'password', 'first_name', 'last_name', 'role', 'department']
  })
    .then(data => {
      res.status(200).json(data);
      console.log(user);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new User."
      });
    });
    
};

// Retrieve all Employees from Department (FOR MANAGER)
exports.findEmployeeByDept = (req, res) => {
    const department = req.query.department;

    User.findAll({ 
        where: {
            role:`Employee`,
            department: department
        }
    })
      .then(data => {
        res.status(200).json(data);
        })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

exports.findUserByID = (req, res) => {
  const id = req.params.id;
  User.findOne({
    where: {
      id: id
    },
    fields: ['id', 'email', 'first_name', 'last_name', 'role', 'department']
  })
  .then(data => {
    res.status(200).json(data[0]);
    })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving user by ID."
    });
  });
}

// Find a single user by login details (FOR USERS)
exports.findUserByLogin = (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  User.findOne({
        attributes: ['id','email', 'password','first_name','last_name','role','department'],
        where: {
            email: email,
            password: password,
        }
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};
// Retrieve all users (employee, auditor, manager) except for Admin (FOR ADMIN)
exports.findAllExceptAdmin = (req, res) => {
    User.findAll({ 
        where: {
            [Op.not]: [{role: "Admin"}]
        }
    })
      .then(data => {
        res.status(200).json("Number of rows affected: "+data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

// Update User Details (Email & Password) by ID (FOR USERS)
exports.update = async (req, res) => {

  const updated = await User.update({ 
    email: req.query.email,
    password: req.query.password
  }, {
    where: { id: req.query.id }
  })
  .then( data => {
    res.status(200).json(data);
    console.log(updated);
  })
  .catch(err => {
    res.status(500).send(err);
  });

};

// Delete a User with ID (FOR ADMIN)
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(data => {
          res.send({
            message: "User id="+id+ " was deleted successfully!"
          }).json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };
