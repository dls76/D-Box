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

// function atualizarDatasTabelas() {
//     let linha = document.querySelectorAll("linha")
//     let dia = document.querySelectorAll(".dia")
//     let mes = document.querySelectorAll(".mes")
//     for (i=0; i<dia.length; i++) {
//         if (dia[i].innerHTML < diaMes) {
//             alert(`${dia[i].innerHTML} é menor que ${diaMes}`)
//         }
//     }
// }


/*
Script da tabela:
<table class="table" id="table_estagio">
        <thead>
            <td>Nome</td>
            <td>Curso</td>
            <td>Turma</td>
            <td>Pontuação</td>
            <td>Ações</td>
        </thead>
        <tbody>

            <tr>
                <td>Leonardo Vales</td>
                <td>Sistemas de informação</td>
                <td>Turma 05</td>
                <td><p>5</p></td>
                <td>
                    <input type="checkbox" name="check_estagio" id="check_estagio">
                </td>
            </tr>


            <tr>
                <td>Pollyana Ruggio</td>
                <td>Fisioterapia</td>
                <td>Turma 05</td>
                <td><p>75</p></td>
                <td>
                    <input type="checkbox" name="check_estagio" id="check_estagio">
                </td>
            </tr>

            <tr>
                <td>Gilson Júnior</td>
                <td>Engenharia</td>
                <td>Turma 20</td>
                <td><p>100</p></td>
                <td>
                    <input type="checkbox" name="check_estagio" id="check_estagio">
                </td>
            </tr>

        </tbody>
    </table>



    const alunos = document.querySelectorAll('.aluno');

                for (let i = 0; i < alunos.length; i++) {

                    let aluno = alunos[i]

                    let tdPontuacao = aluno.querySelector('.tdPontuacao').textContent

                    let inputCheck = aluno.querySelector('#check_estagio')

                    if (tdPontuacao == 100) {    
                        inputCheck.checked = true;
                    } else {
                        inputCheck.checked = false;
                    }

                }*/

                