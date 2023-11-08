function addReview() {
    var newReviewText = document.getElementById('newReview').value.trim();

    if (newReviewText !== '') {
        var newReviewElement = document.createElement('section');
        newReviewElement.className = 'review';

        var newReviewHeading = document.createElement('h2');
        newReviewHeading.textContent = 'Отзыв';

        var newReviewParagraph = document.createElement('p');
        newReviewParagraph.textContent = newReviewText;
        newReviewElement.appendChild(newReviewHeading);
        newReviewElement.appendChild(newReviewParagraph);
        var reviewsContainer = document.getElementById('reviews');
        reviewsContainer.appendChild(newReviewElement);

        document.getElementById('newReview').value = '';

        var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(newReviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }
}

window.addEventListener('load', function () {
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    var reviewsContainer = document.getElementById('reviews');

    reviews.forEach(function (reviewText) {
        var reviewElement = document.createElement('section');
        reviewElement.className = 'review';

        var reviewHeading = document.createElement('h2');
        reviewHeading.textContent = 'Отзыв';

        var reviewParagraph = document.createElement('p');
        reviewParagraph.textContent = reviewText;

        reviewElement.appendChild(reviewHeading);
        reviewElement.appendChild(reviewParagraph);

        reviewsContainer.appendChild(reviewElement);
    });
});