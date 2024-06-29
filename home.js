document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const citySearch = document.getElementById('city-search');
    const resultsDiv = document.getElementById('results');

    searchButton.addEventListener('click', function () {
        const city = citySearch.value;
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(brewery => {
                    const breweryDiv = document.createElement('div');
                    breweryDiv.classList.add('brewery');
                    breweryDiv.innerHTML = `
                        <h3>${brewery.name}</h3>
                        <p><strong>Address:</strong> ${brewery.street}, ${brewery.city}, ${brewery.state}</p>
                        <p><strong>Phone:</strong> ${brewery.phone}</p>
                        <p><strong>Website:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                        <p><strong>Rating:</strong> N/A</p> 
                        <a href="MoEngage Assignment brewery.html?id=${brewery.id}">View Details</a>
                    `;
                    resultsDiv.appendChild(breweryDiv);
                });
            })
            .catch(error => {
                console.log("ignored",error)
            });
            fetch(`https://api.openbrewerydb.org/breweries?by_type=${city}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(brewery => {
                    const breweryDiv = document.createElement('div');
                    breweryDiv.classList.add('brewery');
                    breweryDiv.innerHTML = `
                        <h3>${brewery.name}</h3>
                        <p><strong>Address:</strong> ${brewery.street}, ${brewery.city}, ${brewery.state}</p>
                        <p><strong>Phone:</strong> ${brewery.phone}</p>
                        <p><strong>Website:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                        <p><strong>Rating:</strong> N/A</p> 
                        <a href="MoEngage Assignment brewery.html?id=${brewery.id}">View Details</a>
                    `;
                    resultsDiv.appendChild(breweryDiv);
                });
            })
            .catch(error => {
                console.log("ignored",error)

            });
   
            fetch(`https://api.openbrewerydb.org/breweries?by_name=${city}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(brewery => {
                    const breweryDiv = document.createElement('div');
                    breweryDiv.classList.add('brewery');
                    breweryDiv.innerHTML = `
                        <h3>${brewery.name}</h3>
                        <p><strong>Address:</strong> ${brewery.street}, ${brewery.city}, ${brewery.state}</p>
                        <p><strong>Phone:</strong> ${brewery.phone}</p>
                        <p><strong>Website:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                        <p><strong>Rating:</strong> N/A</p> 
                        <a href="MoEngage Assignment brewery.html?id=${brewery.id}">View Details</a>
                    `;
                    resultsDiv.appendChild(breweryDiv);
                });
            })
            .catch(error => {
                console.log("ignored",error)
            });
   
    });
    
});
