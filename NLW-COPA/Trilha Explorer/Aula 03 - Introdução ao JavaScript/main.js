function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
`
}

function createCard(date, day,games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
    </div>
`
}
document.querySelector('#app').innerHTML = `
    <div id="app">
        <header>
            <img src="./assets/logo.svg" alt="Logo da NLW" />
        </header>
        <main id="cards">
            ${createCard('24/11','quinta',
                createGame('switzererland', '16:00', 'cameroon') +
                createGame('portugal', '13:00', 'ghana') +
                createGame('brazil', '16:00','serbia')
            )}
            ${createCard('28/11', 'segunda',
                createGame('south-sudan', '10:00', 'ghana') +
                createGame('brazil', '13:00', 'switzererland') + 
                createGame('portugal', '13:00', 'uruguay')
            )}
            ${createCard('02/12', 'sexta',
                createGame('south-sudan','12:00', 'portugal') + 
                createGame('ghana', '12:00', 'switzererland') +
                createGame('brazil', '16:00', 'cameroon')
            )}
        </main>
    </div>
`