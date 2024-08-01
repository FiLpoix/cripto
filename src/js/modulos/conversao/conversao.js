const btnConverter = document.querySelector('[data-converte]');

btnConverter.addEventListener("click", async (event) => {
    event.preventDefault()

    let moedaOrigem = document.querySelector('#moedasOrigem').value;
    let moedaDestino = document.querySelector('#moedasDestino').value;
    let valor = document.querySelector('#valor').value;
    
    let url = await fetch(`https://v6.exchangerate-api.com/v6/e619eca78331436f30deda1b/pair/${moedaDestino}/${moedaOrigem}/${valor}`)
    let data = await url.json()

    if ((moedaOrigem != "") && (moedaDestino != "") && (valor != "")) {
        
        // let calculo = 
        
        // let apiKey = encodeURI('e619eca78331436f30deda1b')
        console.log(data)

        let resultado = document.querySelector('#resultado')
        resultado.style.display = "block"

        let convertido = document.querySelector("#valorConvert");
        let taxa = document.querySelector('#taxaCambio');

        convertido.innerHTML = data.conversion_result.toFixed(2);
        taxa.innerHTML = data.conversion_rate.toFixed(2);
    }
});