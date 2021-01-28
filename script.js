var players = [
    {
        name: 'Henderson',
        position: 'gk',
        rating: 80,
    },
    {
        name: 'De Gea',
        position: 'gk',
        rating: 86
    },
    {
        name: 'Ramero',
        position: 'gk',
        rating: 80
    },
    {
        name: 'Grant',
        position: 'gk',
        rating: 69
    },
    {
        name: 'Baily',
        position: 'rb',
        rating: 79
    },
    {
        name: 'Maguire',
        position: 'lb',
        rating: 82
    },
    {
        name: 'Williams',
        position: 'lb',
        rating: 75
    },
    {
        name: 'Lindelof',
        position: 'rb',
        rating: 79
    },
    {
        name: 'L. Shaw',
        position: 'lb',
        rating: 80
    },
    {
        name: 'A. Wan Bissaka',
        position: 'rb',
        rating: 83
    },
    {
        name: 'Fred',
        position: 'cm',
        rating: 81
    },
    {
        name: 'Pogba',
        position: 'cm',
        rating: 86
    },
    {
        name: 'Fernandes',
        position: 'cm',
        rating: 88
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
        rating: 83
    },
    {
        name: 'J. Mata',
        position: 'cm',
        rating: 79
    },
    {
        name: 'Rashford',
        position: 'fw',
        rating: 85
    },
    {
        name: 'E. Cavani',
        position: 'fw',
        rating: 84
    },
    {
        name: 'Martial',
        position: 'fw',
        rating: 83
    },
    {
        name: 'Greenwood',
        position: 'fw',
        rating: 77
    },
    {
        name: 'Daniel James',
        position: 'fw',
        rating: 77
    }
]

function generateTeam (opponent = []) {
    var team = [];

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
