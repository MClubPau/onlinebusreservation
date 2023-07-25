// Sample data for demonstration purposes
const busesData = [
    { id: 1, departure: 'City A', destination: 'City B', date: '2023-07-30', seatsAvailable: 30 },
    { id: 2, departure: 'City B', destination: 'City C', date: '2023-08-05', seatsAvailable: 15 },
    // Add more data as needed...
  ];
  
  function searchBuses() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    const filteredBuses = busesData.filter(bus =>
      bus.departure.toLowerCase().includes(departure.toLowerCase()) &&
      bus.destination.toLowerCase().includes(destination.toLowerCase()) &&
      bus.date === date
    );
  
    displaySearchResults(filteredBuses);
  }
  
  function displaySearchResults(buses) {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';
  
    if (buses.length === 0) {
      resultsDiv.innerHTML = '<p>No buses found for the selected criteria.</p>';
      return;
    }
  
    buses.forEach(bus => {
      const busInfo = document.createElement('div');
      busInfo.innerHTML = `
        <p>Bus ID: ${bus.id}</p>
        <p>Departure: ${bus.departure}</p>
        <p>Destination: ${bus.destination}</p>
        <p>Date: ${bus.date}</p>
        <p>Seats Available: ${bus.seatsAvailable}</p>
      `;
      resultsDiv.appendChild(busInfo);
    });
  }
  