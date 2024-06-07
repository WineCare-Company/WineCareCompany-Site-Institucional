var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");
router.post("/dashResultados", function(req,res){
    dashController.dashResultados(req,res);
});
router.post("/dashResultados2", function(req,res){
    dashController.dashResultados2(req,res);
});
router.post("/dashResultados3", function(req,res){
    dashController.dashResultados3(req,res);
});
router.post("/dashResultados4", function(req,res){
    dashController.dashResultados4(req,res);
});
router.get("/kpi1", function(req,res){
    dashController.kpi1(req,res);
});

module.exports = router;