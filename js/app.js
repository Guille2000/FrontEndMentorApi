 const quote = document.getElementById('quote') // resultado

 const id = 200
const url = `https://api.adviceslip.com/advice/${id}`

 fetch(url)
         .then(respuesta => respuesta.json())
        //.then(resultado => console.log(resultado))
         .then(resultado => {
             const { slip } = resultado 
             quote.textContent = ` " ${slip.advice} " ` 
             quote.classList.add('centrar')
        })