/*const pauseDuration = 800; // Pause duration in milliseconds
const scrollDuration = 100; // Duration to scroll to the next item

	async function fetchWinnerData() {
		try {
			const response = await fetch('response.xml');
			const data = await response.text();
			return data;
		} catch (error) {
			console.error('Error fetching winner data:', error);
		}
	}
	
	function parseWinnerData(xml) {
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xml, "application/xml");
		const winnerNodes = xmlDoc.getElementsByTagName("jackpot");
		const splicedArray = [];
		
		const itemsArray = Array.from(winnerNodes);
		
		itemsArray.forEach(item => {
			const amount = parseInt(item.getElementsByTagName("sum")[0].textContent.replace(/\s+/g, ''), 10);
			const nameH = item.getElementsByTagName("name")[0].textContent;
			
			if(nameH == 'Atlantean Treasures') {
				//if (amount > 10000 && nameH != 'Totals') {
					const item = {
							name: nameH,   // Key
							amount: amount // Value
						};

					splicedArray.push(item);
				}
			//}
		});
	
		const uniqueById = Array.from(new Set(splicedArray.map(item => item.amount))).map(amount => splicedArray.find(item => item.amount === amount));

		return uniqueById;
	}	
	
	function displayWinner(winner) { 
		const winnerItem = document.createElement('div');
		const tickerContainer = document.getElementById('ticker1');

		winnerItem.className = 'ticker-item';
		winnerItem.innerHTML = '$'+winner.amount.toLocaleString()+'';
		//tickerContainer.innerHTML = '';
		tickerContainer.appendChild(winnerItem);

		// Trigger reflow to ensure the transition works
		//winnerItem.offsetHeight;

		// Fade in
		//winnerItem.style.opacity = 1;
	}	
	
	async function initTicker() {
		
		const xmlData = await fetchWinnerData();
        winners = parseWinnerData(xmlData);
		let totalItemsU = winners.length; 
		const tickers = document.querySelectorAll('.ticker');
		let currentIndex = 0;
			
		for (let i = 0; i < winners.length; i++) {
			displayWinner(winners[i]); 
		} 
		
		const ticker = document.getElementById('ticker1');
		const items = ticker.querySelectorAll('.ticker-item');

		// Clone the items to create a seamless effect
		const clonedItems = [...items].map(item => item.cloneNode(true));
		clonedItems.forEach(item => ticker.appendChild(item));

		// Calculate the height of the items
		const itemHeight = items[0].offsetHeight;

		// Set the initial height of the ticker
		ticker.style.height = `${itemHeight}px`;
			
		// Function to scroll to the next item
		function scrollToNextItem() {
			// Set the ticker position to scroll to the next item
			ticker.style.transition = `transform ${scrollDuration}ms ease`;
			ticker.style.transform = `translateY(-${(currentIndex + 1) * itemHeight}px)`;

			// Pause before scrolling to the next item
			setTimeout(() => {
				currentIndex++;
				// Reset the position if we reach the end of the original items
				if (currentIndex === items.length) {
					ticker.style.transition = 'none'; // Disable transition for instant reset
					ticker.style.transform = 'translateY(0)'; // Reset position
					currentIndex = 0; // Reset index
				}
				// Call the function again to continue scrolling
				setTimeout(scrollToNextItem, pauseDuration);
			}, scrollDuration);
		}

		// Start the scrolling for the ticker
		scrollToNextItem();
	}

document.addEventListener("DOMContentLoaded", function() {	
	initTicker();
});*/


	let count = 0; // Initialize the counter
	let interval = 0;
	let increment = 0;

	// Function to update the ticker
	function updateTicker() {
		const tickerElement = document.getElementById('ticker1Val');
		tickerElement.textContent = '$'+count.toLocaleString(); // Update the text content
		tickerElement.style.animation = 'fadeIn 0.5s'; // Trigger animation
		
		count+=increment; // Increment the counter

		// Reset animation
		tickerElement.addEventListener('animationend', () => {
			tickerElement.style.animation = 'none'; // Remove animation
			setTimeout(() => {
				tickerElement.style.animation = ''; // Reapply animation
			}, 10); // Small timeout to allow re-triggering
		}, { once: true });
	}

	loadxmlData();

	async function loadxmlData() {
		const data = await getXmlApi(); 

		// Get the list element to display the items
		const itemList = document.getElementById('jackpot');
		const items = data['jackpot'];		
		let megaMoolah = [];
		
		// Loop through the JSON data
		items.forEach(item => {
			if(item['name'] == 'Atlantean Treasures: Mega Moolah') {
				megaMoolah.push(item);
			}
		});

		// Find the item with the largest value
		const maxItem = megaMoolah.reduce((max, item) => {
			return item.sum > max.sum ? item : max;
		}); 

		if(maxItem) {
			count = parseInt(maxItem['sum'].replace(/\s+/g, ''), 10);; // Initialize the counter
			interval = parseInt(maxItem['increase_interval']);
			increment = parseInt(maxItem['increase_amount']);

			// Start the ticker to update every second
			setInterval(updateTicker, interval);
		}
	}

	function getXmlApi() {
		// Fetch the JSON data from the PHP API
		return fetch('api.php')
			.then(response => {
				// Check if the response is ok (status code 200)
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json(); // Parse the JSON data
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error);
		});
	}