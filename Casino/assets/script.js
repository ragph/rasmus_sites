document.addEventListener('DOMContentLoaded', function () {
    var columnInput = document.getElementById('Opinion-button');

    if (!columnInput) return; // Sticky nav replaces the nav so element no longer exists for users in test.

    columnInput.addEventListener('keydown', function (e) {
        // keyCode: 13 => Enter key | keyCode: 32 => Space key
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault()
            document.getElementById('Opinion-checkbox-input').click();
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var columnInput = document.getElementById('Sport-button');

    if (!columnInput) return; // Sticky nav replaces the nav so element no longer exists for users in test.

    columnInput.addEventListener('keydown', function (e) {
        // keyCode: 13 => Enter key | keyCode: 32 => Space key
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault()
            document.getElementById('Sport-checkbox-input').click();
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var columnInput = document.getElementById('Culture-button');

    if (!columnInput) return; // Sticky nav replaces the nav so element no longer exists for users in test.

    columnInput.addEventListener('keydown', function (e) {
        // keyCode: 13 => Enter key | keyCode: 32 => Space key
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault()
            document.getElementById('Culture-checkbox-input').click();
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var columnInput = document.getElementById('Lifestyle-button');

    if (!columnInput) return; // Sticky nav replaces the nav so element no longer exists for users in test.

    columnInput.addEventListener('keydown', function (e) {
        // keyCode: 13 => Enter key | keyCode: 32 => Space key
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault()
            document.getElementById('Lifestyle-checkbox-input').click();
        }
    })
})

var winners = ["John D. won $500", "Sarah M. won $1,000", "Mike T. won $750", "Emma L. won $2,000"];
setInterval(function () {
    var winnerFeed = document.getElementById("winner-feed");
    var newWinner = winners[Math.floor(Math.random() * winners.length)];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newWinner));
    winnerFeed.insertBefore(li, winnerFeed.firstChild);
    if (winnerFeed.children.length > 5) {
        winnerFeed.removeChild(winnerFeed.lastChild);
    }
}, 5000); // Add a new winner every 5 seconds

// Simulated current players count
setInterval(function () {
    var currentPlayers = document.getElementById("current-players");
    var players = parseInt(currentPlayers.innerHTML.replace(/,/g, ''));
    var increase = Math.floor(Math.random() * 100) + 50; // Random increase between 50 and 149
    players += increase;
    currentPlayers.innerHTML = players.toLocaleString(); // Adds commas for thousands
}, 5000); // Update every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    const moment1_DateStr = "2024-10-15 10:30:00";
    const moment2_DateStr = "2024-10-14 10:30:00";
    const moment3_DateStr = "2024-10-13 10:30:00";
    const moment4_DateStr = "2024-10-12 10:30:00";
    const moment5_DateStr = "2024-10-11 05:30:00";
    const moment6_DateStr = "2024-10-10 07:30:00";
    const moment7_DateStr = "2024-10-09 09:30:00";

    function momentAgo(element, date) {
        let div = document.getElementById(element)
        date = moment(date, 'YYYY-MM-DD HH:mm:ss');
        div.textContent = date.startOf('hour').fromNow();
    }

    momentAgo('moment1', moment1_DateStr);
    momentAgo('moment2', moment2_DateStr);
    momentAgo('moment3', moment3_DateStr);
    momentAgo('moment4', moment4_DateStr);
    momentAgo('moment5', moment5_DateStr);
    momentAgo('moment6', moment6_DateStr);
    momentAgo('moment7', moment7_DateStr);
});



// const dateString = "2024-10-15 10:30:00";
// const now = moment(dateString, 'YYYY-MM-DD HH:mm:ss');
// console.log("Current date and time:", now.startOf('hour').fromNow());