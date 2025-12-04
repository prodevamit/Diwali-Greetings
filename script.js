const greetings = [
    "May your life be filled with light and joy!",
    "Wishing you happiness and prosperity!",
    "Let the light of Diwali brighten your path!",
    "May Diwali bring abundance to your home!",
    "Celebrate the victory of light over darkness!"
];

function generateGreeting() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim() || 'Friend';
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const customGreeting = `Happy Diwali, ${name}! ${randomGreeting}`;
    
    document.getElementById('customGreeting').textContent = customGreeting;
}

function shareGreeting() {
    const greeting = document.getElementById('customGreeting').textContent;
    if (!greeting) {
        alert('Please generate a greeting first!');
        return;
    }
    
    const text = encodeURIComponent(greeting);
    const url = `https://twitter.com/intent/tweet?text=${text}%20🪔`;
    window.open(url, '_blank');
}

function copyGreeting() {
    const greeting = document.getElementById('customGreeting').textContent;
    if (!greeting) {
        alert('Please generate a greeting first!');
        return;
    }
    
    navigator.clipboard.writeText(greeting).then(() => {
        alert('Greeting copied to clipboard!');
    });
}

function downloadGreeting() {
    const greeting = document.getElementById('customGreeting').textContent;
    if (!greeting) {
        alert('Please generate a greeting first!');
        return;
    }
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(greeting));
    element.setAttribute('download', 'diwali-greeting.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Generate greeting on Enter key
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nameInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateGreeting();
    });
});
