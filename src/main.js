document.getElementById("calculate").addEventListener("click", calculate);

let showResult = document.getElementById("result");

cardTitle = document.querySelector('#card-title')
cardText = document.querySelector('#card-info')

function clearElement(elementId) {
    elementId.innerHTML = ''
}

function calculate() {
    clearElement(showResult);

    let hoursDay = document.getElementById("hours-day").value,
        daysWeek = document.getElementById("days-week").value,
        projectHoliday = document.getElementById("project-holiday").value,
        projectCost = document.getElementById("project-cost").value;

    costHour = (projectCost / (daysWeek * 4 * hoursDay)) + ((projectHoliday * daysWeek * hoursDay));

    let resultShow = `Seu valor/hora é: R$${costHour.toFixed(2)}`

    newContent = document.createTextNode(resultShow)
    showResult.appendChild(newContent)
    document.innerHTML = showResult
}

function editInfo(title, info) {
    clearElement(cardTitle);
    clearElement(cardText);

    let titleCard = title,
        newTitle = document.createTextNode(titleCard),
        infoCard = info,
        newInfo = document.createTextNode(infoCard);

    cardTitle.appendChild(newTitle);
    cardText.appendChild(newInfo);
}

document.getElementById("hours-day").addEventListener("click", () => {
    editInfo("Tempo diário investido no projeto",
        "Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.")
});

document.getElementById("days-week").addEventListener("click", () => {
    editInfo("Dias efetivos trabalhando",
        "Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.")
});

document.getElementById("project-holiday").addEventListener("click", () => {
    editInfo("Dias de Férias por projeto",
        "Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar 'férias' com o valor total projeto.")
});

document.getElementById("project-cost").addEventListener("click", () => {
    editInfo("Valor total do Projeto",
        "Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.")
});