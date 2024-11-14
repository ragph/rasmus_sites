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