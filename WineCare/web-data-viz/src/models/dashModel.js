var database = require("../database/config")


function dashResultados(fkSensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dashResultados(): ", fkSensor)
    var instrucaoSql = `

select temperaturaAmbiente as 'temperaturaHoras', horarioData as 'HoraTemp' from dadosCaptados where fkSensor = '${fkSensor}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function dashResultados2(fkSensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dashResultados2(): ", fkSensor)
    var instrucaoSql = `
    select umidadeAmbiente as 'umidadeHoras', horarioData as 'HoraTemp' from dadosCaptados where fkSensor = '${fkSensor}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dashResultados3(fkSensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dashResultados3(): ", fkSensor)
    var instrucaoSql = `
    select temperaturaAmbiente  as 'temperaturaAtual' from dadosCaptados where fkSensor = '${fkSensor}' ORDER BY horarioData DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dashResultados4(fkSensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dashResultados4(): ", fkSensor)
    var instrucaoSql = `
    select umidadeAmbiente as 'umidadeAtual' from dadosCaptados where fkSensor = '${fkSensor}' ORDER BY horarioData DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function kpi1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpi1(): ")
    var instrucaoSql = `
    SELECT COUNT(*) AS numBarrisNull
FROM (
    SELECT fkSensor
    FROM dadosCaptados
    WHERE temperaturaAmbiente IS NULL OR umidadeAmbiente IS NULL
    GROUP BY fkSensor
) AS barrisNull;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    dashResultados,
    dashResultados2,
    dashResultados3,
    dashResultados4,
    kpi1
};