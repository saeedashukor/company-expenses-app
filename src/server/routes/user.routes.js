module.exports = app => {
    const user = require("../controllers/user.controller");
    var router = require("express").Router();
  
    // SELECT * from users
    router.post("/getUsers", user.getUsers);

    // FIND user BY ID
    router.post("/user/:id", user.findUserByID);

    /////////////////////////////////////////////////////
    /* FOR ALL USERS */

    // Retrieve user details (except password) for profile page
    router.post("/user/profile",user.getUserDetails);

    // Retrieve User with Login (Email & Password)
    router.post("/login", user.findUserByLogin);

    // Update User (EMAIL and PASSWORD) with id
    router.put("/user/update", user.update);
  
    /////////////////////////////////////////////////////
    /* FOR MANAGERS */
  
    // Retrieve all Employees by Department
    router.post("/man/getEmp", user.findEmployeeByDept);

    /////////////////////////////////////////////////////
    /* FOR ADMIN */

    // Retrieve all Users except for Admin
    router.get("/admin/getUsers", user.findAllExceptAdmin);
  
    // Delete a User with id
    router.delete("/admin/delete/:id", user.delete);
  
    // Create a new User for Admin
    router.post("/admin/create", user.createUser);

    app.use('/api', router);
  }