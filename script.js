// Music Player
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🎵';
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.textContent = '⏸️';
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
});

window.addEventListener('load', () => {
    bgMusic.muted = false;
    bgMusic.play().catch(() => {
        console.log('Auto-play prevented. User must click music button.');
    });
});

// Story Parts (Full Apology Speech)
const storyParts = [
    "Roja, I am sorry. I know every fault is mine. I did everything, and every mistake was created by me.",
    "I have been trying to find a way to say sorry to you for the last 5 or 6 days because I feel so much guilt.",
    "If I can't say this to you, I will never be able to forgive myself for the rest of my life.",
    "I know I did so many foul things and I hurt you so deeply.",
    "I know you are a girl with the softest heart, but I made you into a hard-hearted person because of my actions.",
    "I hate myself for changing the beautiful person you are.",
    "Every single human being, from Adam until now, makes mistakes. We are built to fail, but humanity survives because people get a chance to fix what they broke.",
    "I am begging for that one chance. I want to live with you for my whole life.",
    "If I made the biggest mistake, please forgive me this one last time. I promise I will listen and learn. Please forgive me. I am so sorry. 💔"
];

let currentPart = 0;

function nextPart() {
    if (currentPart < storyParts.length - 1) {
        currentPart++;
        updateDialogue();
    }
}

function previousPart() {
    if (currentPart > 0) {
        currentPart--;
        updateDialogue();
    }
}

function updateDialogue() {
    document.getElementById('dialogueText').textContent = storyParts[currentPart];
    document.getElementById('partNum').textContent = currentPart + 1;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentPart === 0;
    document.getElementById('nextBtn').disabled = currentPart === storyParts.length - 1;
}

// Scene Navigation
function goToScene(sceneNum) {
    // Hide all scenes
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });
    
    // Show target scene
    document.getElementById('scene' + sceneNum).classList.add('active');
    
    // Initialize scene if needed
    if (sceneNum === 2) {
        updateDialogue();
    } else if (sceneNum === 4) {
        startChaseAnimation();
    } else if (sceneNum === 5) {
        createFallingHearts();
    }
    
    window.scrollTo(0, 0);
}

// Slap Game Logic
let angerLevel = 100;
let slapCount = 0;
const slapMessages = [
    "Ouch! That hurt! 😢",
    "She's still furious! 😠",
    "Another slap! He deserves it!",
    "She's not holding back! 💢",
    "Her anger is burning! 🔥",
    "One more slap! 💥",
    "She's getting tired... 😤",
    "Almost there... 😓",
    "He can feel her pain... 😢",
    "She's releasing all her anger!",
    "Just a few more slaps needed..."
];

function getSlapped() {
    if (angerLevel <= 0) return;
    
    // Hit animation
    const slapTarget = document.getElementById('slapTarget');
    slapTarget.classList.add('hit');
    setTimeout(() => slapTarget.classList.remove('hit'), 300);
    
    // Slap arm animation
    const slapArm = document.querySelector('.slapper .slap-arm');
    slapArm.style.animation = 'none';
    setTimeout(() => {
        slapArm.style.animation = 'slapSwing 0.4s ease';
    }, 10);
    
    // Decrease anger
    angerLevel -= 15;
    slapCount++;
    
    // Update UI
    document.getElementById('angerPercent').textContent = Math.max(0, angerLevel);
    document.getElementById('angerBar').style.width = Math.max(0, angerLevel) + '%';
    document.getElementById('slapCount').textContent = slapCount;
    
    // Update anger text
    const angerTexts = [
        'She\'s FURIOUS! 😠',
        'Her anger is INTENSE! 🔥',
        'She\'s getting tired... 😤',
        'Almost there... 😓',
        'Her anger is fading... 😌',
        'She\'s calming down... 💭',
        'Finally... some relief... 😔'
    ];
    
    const textIndex = Math.floor((100 - angerLevel) / 15);
    document.getElementById('angerText').textContent = angerTexts[Math.min(textIndex, angerTexts.length - 1)];
    
    // Show random slap message
    document.getElementById('slapMessage').textContent = slapMessages[Math.floor(Math.random() * slapMessages.length)];
    
    // Enable continue button
    if (angerLevel <= 0) {
        document.getElementById('continueBtn').disabled = false;
        document.getElementById('slapMessage').textContent = "Her anger is gone... She's ready to talk 💭";
    }
}

// Chase Animation
function startChaseAnimation() {
    const runningChar = document.getElementById('runningChar');
    const chasingChar = document.getElementById('chasingChar');
    const chaseMessage = document.getElementById('chaseMessage');
    
    const chaseMessages = [
        "He's running away! 🏃💨",
        "She's chasing him! 😠",
        "He's getting tired... 😓",
        "She's gaining on him! 💪",
        "He's slowing down... 😰",
        "She finally catches up to him!",
        "They're both standing there... 😶",
        "The tension is unbearable... 😰",
        "She takes a deep breath... 💭",
        "Her anger is fading into sadness... 😢"
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        if (messageIndex < chaseMessages.length) {
            chaseMessage.textContent = chaseMessages[messageIndex];
            messageIndex++;
        } else {
            clearInterval(messageInterval);
        }
    }, 1000);
}

// Falling Hearts Animation
function createFallingHearts() {
    const container = document.getElementById('heartsContainer');
    container.innerHTML = '';
    
    const hearts = ['💖', '💕', '💓', '💗', '💝', '❤️'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.delay = Math.random() * 2 + 's';
        heart.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(heart);
    }
}

// End Story
function endStory() {
    alert('💖 Thank you for experiencing this emotional journey! 💖\n\nRemember: Forgiveness is the greatest gift we can give to ourselves and others.');
    goToScene(1);
}

// Initialize
window.addEventListener('load', () => {
    console.log('🎵 Website loaded! Click the music button to play "Tum Hi Ho"');
    console.log('🎬 Start the story by clicking "Begin The Story"');
});
