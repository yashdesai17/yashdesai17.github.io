
const heartButton = document.querySelector('.heart');
heartButton.addEventListener('click', () => {
    heartButton.classList.toggle('liked');
});

document.querySelector('#subscribeButton').addEventListener('click', function() {
    const email = document.querySelector('#email').value;
    if (isValidEmail(email)) {
        alert('Subscription successful');
    } else {
        alert('Invalid email. Please enter a valid email address.');
    }
});

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}
