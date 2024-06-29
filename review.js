document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const breweryId = urlParams.get('id');
    const reviewForm = document.getElementById('review-form');
    const breweryIdInput = document.getElementById('brewery-id');

    breweryIdInput.value = breweryId;

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('review-text').value;

        const reviewData = {
            breweryId: breweryId,
            rating: rating,
            text: reviewText
        };

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Review submitted successfully!');
            window.location.href = `brewery.html?id=${breweryId}`;
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
    });
});
