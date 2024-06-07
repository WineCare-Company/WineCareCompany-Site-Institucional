var dashModel = require("../models/dashModel");

function dashResultados(req, res){
    
    var fkSensor = req.body.fkSensor;
    console.log("fk do Sensor" + fkSensor);
    dashModel.dashResultados(fkSensor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao finalizar o quiz! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        ); 
}
function dashResultados2(req, res){
    
    var fkSensor = req.body.fkSensor;
    console.log("fk do Sensor" + fkSensor);
    dashModel.dashResultados2(fkSensor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao finalizar o quiz! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        ); 
}
function dashResultados3(req, res){
    
    var fkSensor = req.body.fkSensor;
    console.log("fk do Sensor" + fkSensor);
    dashModel.dashResultados3(fkSensor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao finalizar o quiz! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        ); 
}
function dashResultados4(req, res){
    
    var fkSensor = req.body.fkSensor;
    console.log("fk do Sensor" + fkSensor);
    dashModel.dashResultados4(fkSensor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao finalizar o quiz! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        ); 
}
function kpi1(req, res){
    dashModel.kpi1().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado da segunda pergunta!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    dashResultados,
    dashResultados2,
    dashResultados3,
    dashResultados4,
    kpi1
}