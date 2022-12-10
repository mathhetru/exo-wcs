const express = require("express"); 
const router = express.Router(); 
const membersCtrl = require("../controllers/members"); 

router.post("/members", membersCtrl.createMember); 
router.get("/members/:id", membersCtrl.getOneMember);
router.get("/members", membersCtrl.getAllMembers);

module.exports = router; 