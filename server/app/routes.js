module.exports = app => {
    const  { 
      create,
      findAll,
      findOne,
      findAllPublished,
      update,
      deleteSingle,
      deleteAll,
      logIn
} = require("./controllers/tutorial.ctrl.js");

  var tutorialrouter = require("express").Router();
  tutorialrouter.post("/create/", create);
  tutorialrouter.get("/findAll/", findAll);
  tutorialrouter.get("/findAllPublished/published", findAllPublished);
  tutorialrouter.get("/findOne/:id", findOne);
  tutorialrouter.put("/update/:id", update);
  tutorialrouter.delete("/deleteSingle/:id", deleteSingle);
  tutorialrouter.delete("/deleteAll/", deleteAll);
  tutorialrouter.post("/login/", logIn);
  app.use('/api/v1/users', tutorialrouter);
};
