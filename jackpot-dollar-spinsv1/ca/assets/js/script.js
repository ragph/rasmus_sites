document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto', // Adjust for automatic width
    // spaceBetween: 10,
    // centeredSlides: true, // Center the active slide
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // centeredSlides: true,
    breakpoints: {
      // 640: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      // },
      // 768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      // },
      // 1024: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      // },
    },
  });

	/*var winners = ["John D. won $500", "Sarah M. won $1,000", "Mike T. won $750", "Emma L. won $2,000"];
	setInterval(function () {
	  var winnerFeed = document.getElementById("winner-feed");
	  var newWinner = winners[Math.floor(Math.random() * winners.length)];
	  var li = document.createElement("li");
	  li.appendChild(document.createTextNode(newWinner));
	  winnerFeed.insertBefore(li, winnerFeed.firstChild);
	  if (winnerFeed.children.length > 5) {
		winnerFeed.removeChild(winnerFeed.lastChild);
	  }
	}, 5000); // Add a new winner every 5 seconds */

	// Simulated current players count
	setInterval(function () {

	  var currentPlayers = document.getElementById("current-players");

		if (currentPlayers) {
			var players = parseInt(currentPlayers.innerHTML.replace(/,/g, ''));
			var increase = Math.floor(Math.random() * 100) + 50; // Random increase between 50 and 149
			players += increase;
			currentPlayers.innerHTML = players.toLocaleString(); // Adds commas for thousands
		}
	}, 5000); // Update every 5 seconds
});

