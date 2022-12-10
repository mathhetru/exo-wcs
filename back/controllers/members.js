const Member = require("../models/member");
const mongoose = require('mongoose'); 

exports.createMember = (req, res, next) =>  {
  const memberName = req.body.name; 
  const member = new Member({
    name : memberName
  });
  member.save()
  .then(() => res.status(201).json({ message: "Le membre est ajouté à la liste !"}))
  .catch((error) => res.status(400).json({ error }));
};

exports.getOneMember = (req, res, next) => {
  Member.findOne({_id: req.params.id})
  .then((member) => res.status(200).json(member))
  .catch((error) => res.status(404).json({error: error}));
};

exports.getAllMembers = (req, res, next) => {
  Member.find()
    .then((members) => res.status(200).json(members))
    .catch((error) => res.status(400).json({error: error}));
};