function positions(arrayCompetidores){
    let positionDaniel = arrayCompetidores.indexOf("Daniel")
    let newArrayResultado = []
    if (positionDaniel === 0) {
        return 'Daniel é o vencedor'
    }
    for (let i = 0; i < arrayCompetidores.length; i++) {
        if (arrayCompetidores[i+1] === "Daniel") {
            newArrayResultado.push("Daniel")
            newArrayResultado.push(arrayCompetidores[i])
            newArrayResultado.push(arrayCompetidores[i+2])
            return 'Daniel é o vencedor'
        } else if (arrayCompetidores[i+2] === "Daniel") {
            newArrayResultado.push(arrayCompetidores[i])
            newArrayResultado.push("Daniel")
            newArrayResultado.push(arrayCompetidores[i+1])
            return `Este é o pódio ${newArrayResultado}`
        }
    }
  }