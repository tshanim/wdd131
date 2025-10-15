document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const socialContent = `
        <a href="https://github.com/tshanim" target="_blank" title="GitHub"><img
                class="icon github-logo" src="images/logos/github_logo.png"
                alt="GitHub icon" width="512" height="512"></a>
        <a href="https://x.com/btatshani" target="_blank" title="X"><img class="icon x-logo"
                src="images/logos/X_logo.png" alt="X logo" width="960" height="960"></a>
        <a href="https://www.linkedin.com/in/william-tshani-1a254860/" target="_blank" title="LinkedIn"><img
                class="icon linkedin-logo" src="images/logos/linkedin_logo.png"
                alt="LinkedIn icon" width="200" height="200"></a>
    `;

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Contact form message logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const name = nameInput.value.trim();

            const message = document.createElement('p');
            message.textContent = `Hello ${name}! Thank you for your message. We will get back to you as soon as possible`;
            message.classList.add('confirmation-message');

            contactForm.parentElement.appendChild(message);
            contactForm.reset();

            // Auto-remove after 10 seconds
            setTimeout(() => {
                message.remove();
            }, 10000);
        });
    }
});