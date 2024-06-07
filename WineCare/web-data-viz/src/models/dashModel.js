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
function kpi2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpi2(): ")
    var instrucaoSql = `
    SELECT COUNT(*) AS numBarrisUmidadeAlta
FROM (
    SELECT fkSensor, umidadeAmbiente
    FROM dadosCaptados
    WHERE (fkSensor, horarioData) IN (
        SELECT fkSensor, MAX(horarioData)
        FROM dadosCaptados
        GROUP BY fkSensor
    )
    AND umidadeAmbiente > 80
) AS barrisUmidadeAlta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function kpi3() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpi3(): ")
    var instrucaoSql = `
    SELECT COUNT(*) AS numBarrisUmidadeAlta
FROM (
    SELECT fkSensor, umidadeAmbiente
    FROM dadosCaptados
    WHERE (fkSensor, horarioData) IN (
        SELECT fkSensor, MAX(horarioData)
        FROM dadosCaptados
        GROUP BY fkSensor
    )
    AND umidadeAmbiente < 60
) AS barrisUmidadeAlta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function kpi4() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpi4(): ")
    var instrucaoSql = `
    SELECT COUNT(*) AS numBarrisTempAlta
FROM (
    SELECT fkSensor, temperaturaAmbiente
    FROM dadosCaptados
    WHERE (fkSensor, horarioData) IN (
        SELECT fkSensor, MAX(horarioData)
        FROM dadosCaptados
        GROUP BY fkSensor
    )
    AND temperaturaAmbiente > 20
) AS barrisTempAlta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function kpi5() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpi4(): ")
    var instrucaoSql = `
    SELECT COUNT(*) AS numBarrisTempAlta
    FROM (
        SELECT fkSensor, temperaturaAmbiente
        FROM dadosCaptados
        WHERE (fkSensor, horarioData) IN (
            SELECT fkSensor, MAX(horarioData)
            FROM dadosCaptados
            GROUP BY fkSensor
        )
        AND temperaturaAmbiente < 15
    ) AS barrisTempAlta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    dashResultados,
    dashResultados2,
    dashResultados3,
    dashResultados4,
    kpi1,
    kpi2,
    kpi3,
    kpi4,
    kpi5

};