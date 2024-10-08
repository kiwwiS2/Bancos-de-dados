async function quantidadedeUsuarioPorRede() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.js';
const res = await fetch (url)
const dados = await res.json()
const  nomeDasRedes = Object.keys(dados);

const data = [
    {
      x: nomeDasRedes,
      y: quntidadedeusuariosPorRede,
      type: 'bar'
        
    }
]

const grafico = document.createElement ('div')
grafico.className = 'grafico'
document.getElementById('grafico-container').appendChild(grafico)
Ploty.newPlot(grafico,data)


}
 quantidadedeUsuarioPorRede();