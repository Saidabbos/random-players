var players = [
    {
        name: 'Henderson',
        position: 'gk',
        rating: 80,
    },
    {
        name: 'De Gea',
        position: 'gk',
        rating: 93
    },
    {
        name: 'Ramero',
        position: 'gk',
        rating: 65
    },
    {
        name: 'Grant',
        position: 'gk',
        rating: 50
    },
    {
        name: 'Baily',
        position: 'rb',
        rating: 75
    },
    {
        name: 'Maguire',
        position: 'lb',
        rating: 85
    },
    {
        name: 'Williams',
        position: 'lb',
        rating: 74
    },
    {
        name: 'Lindelof',
        position: 'rb',
        rating: 80
    },
    {
        name: 'L. Shaw',
        position: 'lb',
        rating: 85
    },
    {
        name: 'A. Wan Bissaka',
        position: 'rb',
        rating: 90
    },
    {
        name: 'Fred',
        position: 'cm',
        rating: 80
    },
    {
        name: 'Pogba',
        position: 'cm',
        rating: 90
    },
    {
        name: 'Fernandes',
        position: 'cm',
        rating: 95
    },
    {
        name: 'McTominay',
        position: 'cm',
        rating: 70
    },
    {
        name: 'Matic',
        position: 'cm',
        rating: 80
    },
    {
        name: 'Van De Beek',
        position: 'cm',
        rating: 75
    },
    {
        name: 'J. Mata',
        position: 'cm',
        rating: 80
    },
    {
        name: 'Rashford',
        position: 'fw',
        rating: 95
    },
    {
        name: 'E. Cavani',
        position: 'fw',
        rating: 92
    },
    {
        name: 'Martial',
        position: 'fw',
        rating: 90
    },
    {
        name: 'Greenwood',
        position: 'fw',
        rating: 80
    },
    {
        name: 'Igholo',
        position: 'fw',
        rating: 70
    }
]

function generateTeam (opponent = []) {
    var team = [];
    // for (var i= 0; i < 5; i++) {
    //     switch (i) {
    //         case 0: team[i] = getPlayer('gk', opponent); break
    //         case 1: team[i] = getPlayer('rb', opponent); break
    //         case 2: team[i] = getPlayer('lb', opponent); break
    //         case 3: team[i] = getPlayer('cm', opponent); break
    //         case 4: team[i] = getPlayer('fw', opponent); break
    //     }
    // }

    ['gk', 'rb', 'lb', 'cm', 'fw'].map((item, index) => {
        team[index] = getPlayer(item, opponent.concat(team));
    })
    return team
}

function getPlayer (position, opponent) {
    var filtered = players.filter(player => {
        return player.position === position;
    });

    if (opponent.length) {
        filtered = filtered.filter(player => {
            return !opponent.includes(player)
        })
    }

    return filtered[Math.floor(Math.random() * filtered.length)]
}

var firstTeam = generateTeam();
var secondTeam = generateTeam(firstTeam);
var thirdTeam = generateTeam(firstTeam.concat(secondTeam));

window.onload = function () {
    var firstStadium = document.getElementById('firstTeam');
    var secondStadium = document.getElementById('secondTeam');
    var thirdStadium = document.getElementById('thirdTeam');
    var ratingFirst = 0
    var ratingSecond = 0
    var ratingThird = 0

    firstTeam.map((player) => {
        firstStadium.innerHTML+= `<div class="player ${player.position}"><span class="position">${player.position}</span><span class="player-name">${player.name}</span></div>`
        ratingFirst+= player.rating
    })

    secondTeam.map((player) => {
        secondStadium.innerHTML+= `<div class="player ${player.position}"><span class="position">${player.position}</span><span class="player-name">${player.name}</span></div>`
        ratingSecond+=player.rating;
    })

    thirdTeam.map((player) => {
        thirdStadium.innerHTML+= `<div class="player ${player.position}"><span class="position">${player.position}</span><span class="player-name">${player.name}</span></div>`
        ratingThird+=player.rating;
    })

    ratingThird = ratingThird / 5
    ratingSecond = ratingSecond / 5
    ratingFirst = ratingFirst / 5

       firstStadium.innerHTML = firstStadium.innerHTML + `<span class="rating">${ratingFirst}</span>`
       secondStadium.innerHTML += `<span class="rating">${ratingSecond}</span>`
       thirdStadium.innerHTML += `<span class="rating">${ratingThird}</span>`
}
