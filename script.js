function dataAtual () {
    
    let data = new Date()
    let diaMes = data.getDate()
    let diaSemana = data.getDay()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const dSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    return document.querySelector('dataAtual').innerHTML = (`Hoje é ${dSemana[diaSemana]}, ${diaMes} de ${meses[mes]} de ${ano}.`)

}