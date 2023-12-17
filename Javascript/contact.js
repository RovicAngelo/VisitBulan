
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = 'New Message from Your Website';
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

        const mailtoLink = `mailto:rovicangelolanuza9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        showConfirmationMessage();
    });

    function showConfirmationMessage() {

        const existingMessages = document.querySelectorAll('.confirmation-message');
        if (existingMessages.length >= 2) {
            return; 
        }
    
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Message submitted';
        confirmationMessage.style.color = 'green';
        confirmationMessage.classList.add('confirmation-message'); 
    
        form.insertAdjacentElement('afterend', confirmationMessage);
    
        setTimeout(() => {
            confirmationMessage.remove();
        }, 1000);
    }
    
});
