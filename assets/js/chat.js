/*!
=========================================================
* AquaReach Chat JS
=========================================================

* Copyright: 2024 AquaReach (https://AquaReach.github.io)
* Licensed: (https://AquaReach.github.io/licenses)
* Coded by AquaReach.github.io

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function toggleNavigation() {
    $('#nav-toggle').toggleClass('is-active');
    $('ul.nav').toggleClass('show');
}

const showCardButton = document.getElementById('show-chat-button');
const showContactCardButton = document.getElementById('show-contact-chat-button');
const cardContainer = document.getElementById('chat-card-container');

// All Chat Elements and Buttons
const chatMessages = document.querySelector('.chat-messages');
const sayHiButton = document.getElementById('say-hi-button');
const mentorButton = document.getElementById('mentor-button');
const hireButton = document.getElementById('hire-button');
const contactButton = document.getElementById('contact-me-button');
const optionButton = document.getElementById('option-button');

showCardButton.addEventListener('click', function (event) {
    cardContainer.classList.toggle('visible');
    
    contactButton.style.display = 'none';
    optionButton.style.display = 'none';

    toggleNavigation();
});

showContactCardButton.addEventListener('click', function (event) {
    cardContainer.classList.toggle('visible');
    
    contactButton.style.display = 'none';
    optionButton.style.display = 'none';
});

function hideChatCard() {
    cardContainer.classList.toggle('visible');
    
    // After appending messages, move the Say Hi button
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('suggestion-card');

    suggestionCard.appendChild(sayHiButton); // Append button to the end of the container
    suggestionCard.appendChild(mentorButton); // Append button to the end of the container
    suggestionCard.appendChild(hireButton); // Append button to the end of the container

    chatMessages.appendChild(suggestionCard);
}

sayHiButton.addEventListener('click', function () {
    // Append message from  (right side)
    const senderMessage = document.createElement('div');
    senderMessage.classList.add('chat-card', 'chat-right');

    const senderBubble = document.createElement('div');
    senderBubble.classList.add('chat-bubble');
    senderBubble.innerHTML = '<p>Just saying hi!</p>';

    senderMessage.appendChild(senderBubble);
    chatMessages.appendChild(senderMessage);

    // Append message from  (left side)
    // Message 1:
    const receiverMessage = document.createElement('div');
    receiverMessage.classList.add('chat-card');

    const receiverBubble = document.createElement('div');
    receiverBubble.classList.add('chat-bubble', 'chat-left');
    receiverBubble.innerHTML = '<p>Hello!</p>';

    receiverMessage.appendChild(receiverBubble);
    chatMessages.appendChild(receiverMessage);

    // Message 2:
    const receiverMessage1 = document.createElement('div');
    receiverMessage1.classList.add('chat-card');

    const receiverBubble1 = document.createElement('div');
    receiverBubble1.classList.add('chat-bubble', 'chat-left');
    receiverBubble1.innerHTML = '<p>Nice to meet you.</p>';

    receiverMessage1.appendChild(receiverBubble1);
    chatMessages.appendChild(receiverMessage1);

    // After appending messages, move the Say Hi button
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('suggestion-card');

    suggestionCard.appendChild(sayHiButton); // Append button to the end of the container
    suggestionCard.appendChild(mentorButton); // Append button to the end of the container
    suggestionCard.appendChild(hireButton); // Append button to the end of the container

    chatMessages.appendChild(suggestionCard);

});

mentorButton.addEventListener('click', function () {
    // Append message from  (right side)
    const senderMessage = document.createElement('div');
    senderMessage.classList.add('chat-card', 'chat-right');

    const senderBubble = document.createElement('div');
    senderBubble.classList.add('chat-bubble');
    senderBubble.innerHTML = '<p>Interested in mentorship!</p>';

    senderMessage.appendChild(senderBubble);
    chatMessages.appendChild(senderMessage);

    // Append message from  (left side)
    // Message 1:
    const receiverMessage = document.createElement('div');
    receiverMessage.classList.add('chat-card');

    const receiverBubble = document.createElement('div');
    receiverBubble.classList.add('chat-bubble', 'chat-left');
    receiverBubble.innerHTML = '<p>Thanks for reaching out</p>';

    receiverMessage.appendChild(receiverBubble);
    chatMessages.appendChild(receiverMessage);

    // Message 2:
    const receiverMessage1 = document.createElement('div');
    receiverMessage1.classList.add('chat-card');

    const receiverBubble1 = document.createElement('div');
    receiverBubble1.classList.add('chat-bubble', 'chat-left');
    receiverBubble1.innerHTML = '<p>Unfortunately, I don not have capacity to take on the role of mentor for any new students this year.</p>';

    receiverMessage1.appendChild(receiverBubble1);
    chatMessages.appendChild(receiverMessage1);

    // Message 3:
    const receiverMessage2 = document.createElement('div');
    receiverMessage2.classList.add('chat-card');

    const receiverBubble2 = document.createElement('div');
    receiverBubble2.classList.add('chat-bubble', 'chat-left');
    receiverBubble2.innerHTML = '<p>Thanks for understanding. Can I help you with anything else?</p>';

    receiverMessage2.appendChild(receiverBubble2);
    chatMessages.appendChild(receiverMessage2);

    // After appending messages, move the Say Hi button
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('suggestion-card');

    suggestionCard.appendChild(sayHiButton); // Append button to the end of the container
    suggestionCard.appendChild(mentorButton); // Append button to the end of the container
    suggestionCard.appendChild(hireButton); // Append button to the end of the container

    chatMessages.appendChild(suggestionCard);

});

hireButton.addEventListener('click', function () {
    // Append message from  (right side)
    const senderMessage = document.createElement('div');
    senderMessage.classList.add('chat-card', 'chat-right');

    const senderBubble = document.createElement('div');
    senderBubble.classList.add('chat-bubble');
    senderBubble.innerHTML = '<p>We would like to hire you!</p>';

    senderMessage.appendChild(senderBubble);
    chatMessages.appendChild(senderMessage);

    // Append message from  (left side)
    // Message 1:
    const receiverMessage = document.createElement('div');
    receiverMessage.classList.add('chat-card');

    const receiverBubble = document.createElement('div');
    receiverBubble.classList.add('chat-bubble', 'chat-left');
    receiverBubble.innerHTML = '<p>Ok, great!</p>';

    receiverMessage.appendChild(receiverBubble);
    chatMessages.appendChild(receiverMessage);

    // Message 2:
    const receiverMessage1 = document.createElement('div');
    receiverMessage1.classList.add('chat-card');

    const receiverBubble1 = document.createElement('div');
    receiverBubble1.classList.add('chat-bubble', 'chat-left');
    receiverBubble1.innerHTML = '<p>Exciting times 🕺</p>';

    receiverMessage1.appendChild(receiverBubble1);
    chatMessages.appendChild(receiverMessage1);

    // Message 3:
    const receiverMessage2 = document.createElement('div');
    receiverMessage2.classList.add('chat-card');

    const receiverBubble2 = document.createElement('div');
    receiverBubble2.classList.add('chat-bubble', 'chat-left');
    receiverBubble2.innerHTML = '<p>Send me a message and lets chat further!</p>';

    receiverMessage2.appendChild(receiverBubble2);
    chatMessages.appendChild(receiverMessage2);

    // After appending messages, move the Say Hi button
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('suggestion-card');

    // Hide the Say Hi button
    contactButton.style.display = 'block';
    optionButton.style.display = 'block';

    suggestionCard.appendChild(contactButton); // Append button to the end of the container
    suggestionCard.appendChild(optionButton); // Append button to the end of the container

    chatMessages.appendChild(suggestionCard);

});

optionButton.addEventListener('click', function () {
    // Append message from  (right side)
    const senderMessage = document.createElement('div');
    senderMessage.classList.add('chat-card', 'chat-right');

    const senderBubble = document.createElement('div');
    senderBubble.classList.add('chat-bubble');
    senderBubble.innerHTML = '<p>Options Again!</p>';

    senderMessage.appendChild(senderBubble);
    chatMessages.appendChild(senderMessage);


    // Append message from  (left side)
    // Message 1:
    const receiverMessage = document.createElement('div');
    receiverMessage.classList.add('chat-card');

    const receiverBubble = document.createElement('div');
    receiverBubble.classList.add('chat-bubble', 'chat-left');
    receiverBubble.innerHTML = '<p>Ok, here you go!</p>';

    receiverMessage.appendChild(receiverBubble);
    chatMessages.appendChild(receiverMessage);

    // After appending messages, move the Say Hi button
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('suggestion-card');

    suggestionCard.appendChild(sayHiButton); // Append button to the end of the container
    suggestionCard.appendChild(mentorButton); // Append button to the end of the container
    suggestionCard.appendChild(hireButton); // Append button to the end of the container

    chatMessages.appendChild(suggestionCard);
});

contactButton.addEventListener('click', function () {
    const emailAddress = 'AquaReach.info@gmail.com';
    const subject = 'Job Opportunity! From Website';
    const body = 'Hi, Vandana! I am reaching out to you from your website. I would like to discuss a job opportunity with you. Please let me know when you are available to chat. Thanks!';

    const mailtoLink = `mailto:<span class="math-inline">\{emailAddress\}?subject\=</span>{encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    chatMessages.innerHTML = ''; // Clear the chat messages

    // Append message from  (left side)
    const senderMessage = document.createElement('div');
    senderMessage.classList.add('chat-card');

    const senderBubble = document.createElement('div');
    senderBubble.classList.add('chat-bubble', 'chat-left');
    senderBubble.innerHTML = '<p>How can I help you today?</p>';

    senderMessage.appendChild(senderBubble);
    chatMessages.appendChild(senderMessage);

    // After appending messages, move the Say Hi button
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('suggestion-card');

    suggestionCard.appendChild(sayHiButton); // Append button to the end of the container
    suggestionCard.appendChild(mentorButton); // Append button to the end of the container
    suggestionCard.appendChild(hireButton); // Append button to the end of the container

    chatMessages.appendChild(suggestionCard);
});
