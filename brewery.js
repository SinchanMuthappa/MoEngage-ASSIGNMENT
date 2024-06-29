document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const breweryId = urlParams.get('id');
    const breweryName = document.getElementById('brewery-name');
    const breweryAddress = document.getElementById('brewery-address');
    const breweryPhone = document.getElementById('brewery-phone');
    const breweryWebsite = document.getElementById('brewery-website');
    const reviewsDiv = document.getElementById('reviews');
    const reviewLink = document.getElementById('review-link');

    fetch(`https://api.openbrewerydb.org/breweries/${breweryId}`)
        .then(response => response.json())
        .then(data => {
            breweryName.textContent = data.name;
            breweryAddress.textContent = `Address: ${data.street}, ${data.city}, ${data.state}`;
            breweryPhone.textContent = `Phone: ${data.phone}`;
            breweryWebsite.innerHTML = `Website: <a href="${data.website_url}" target="_blank">${data.website_url}</a>`;
            reviewLink.href = `MoEngage- ASSIGNMENT/review.html?id=${breweryId}`;

            // Load reviews from backend
            fetch(`http://localhost:3000/reviews/${breweryId}`)
                .then(response => response.json())
                .then(reviews => {
                    reviews.forEach(review => {
                        const reviewDiv = document.createElement('div');
                        reviewDiv.classList.add('review');
                        reviewDiv.innerHTML = `
                            <p><strong>Rating:</strong> ${review.rating}</p>
                            <p>${review.text}</p>
                        `;
                        reviewsDiv.appendChild(reviewDiv);
                    });
                });
        })
        .catch(error => {
            breweryName.textContent = `Error: ${error.message}`;
        });
});
