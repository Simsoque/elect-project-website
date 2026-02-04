// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeChat = document.getElementById('closeChat');
const sendChat = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const newsletterForm = document.getElementById('newsletterForm');
const collabForm = document.getElementById('collabForm');
const facultyLoginBtn = document.getElementById('facultyLoginBtn');
const facultyUser = document.getElementById('facultyUser');
const facultyPass = document.getElementById('facultyPass');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form Submissions
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to the ELECT newsletter!');
        this.reset();
    });
}

if (collabForm) {
    collabForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! The ELECT team will contact you soon.');
        this.reset();
    });
}

// Faculty Login Simulation
if (facultyLoginBtn) {
    facultyLoginBtn.addEventListener('click', () => {
        if (facultyUser && facultyPass) {
            const user = facultyUser.value;
            const pass = facultyPass.value;
            if (user && pass) {
                alert('Login simulated. In a real implementation, this would redirect to the faculty portal.');
                facultyUser.value = '';
                facultyPass.value = '';
            } else {
                alert('Please enter username and password.');
            }
        }
    });
}

// Chatbot Logic
chatbotBtn.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
});

closeChat.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// Function to add messages to chat
function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to generate bot responses
function botResponse(userInput) {
    const input = userInput.toLowerCase();
    
    if (input.includes('course') || input.includes('curriculum') || input.includes('learn')) {
        return "Check the 'Courses & Labs' section for virtual labs, curriculum materials, and DIALux simulations.";
    } else if (input.includes('partner') || input.includes('industry') || input.includes('collaboration')) {
        return "ELECT partners with Aalto, Hellenic Open, CBU, and MU. See the 'Partners' section for details.";
    } else if (input.includes('event') || input.includes('hackathon') || input.includes('workshop')) {
        return "Our next event is the Mulungushi Hackathon on Feb 6. See 'News & Events' for more.";
    } else if (input.includes('faculty') || input.includes('teacher') || input.includes('portal')) {
        return "Faculty members can access teaching resources in the 'Faculty Zone' (login required).";
    } else if (input.includes('contact') || input.includes('email') || input.includes('get involved')) {
        return "Use the 'Get Involved' section to sign up for newsletters or send collaboration inquiries.";
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
        return "Hello! How can I help you today?";
    } else if (input.includes('thank')) {
        return "You're welcome! Is there anything else I can help with?";
    } else if (input.includes('what is elect') || input.includes('about elect')) {
        return "ELECT is an Erasmus+ project to improve energy-efficient lighting education in Zambian universities.";
    } else {
        return "I can help with info about courses, partners, events, and resources. Try asking specifically!";
    }
}

// Send chat message
sendChat.addEventListener('click', () => {
    if (chatInput.value.trim()) {
        const userMessage = chatInput.value;
        addMessage(userMessage, 'user');
        
        setTimeout(() => {
            const botMessage = botResponse(userMessage);
            addMessage(botMessage, 'bot');
        }, 500);
        
        chatInput.value = '';
    }
});

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChat.click();
    }
});

// Initialize chat with welcome message
window.addEventListener('DOMContentLoaded', () => {
    // Welcome message already in HTML
});