* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f1428 100%);
    color: #e0e0e0;
    overflow-x: hidden;
    min-height: 100vh;
}

/* Background & Stars */
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.95), rgba(26, 26, 62, 0.95));
    z-index: -2;
}

.stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
}

.stars::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    box-shadow: 100px 200px white, 200px 50px white, 300px 300px white,
                400px 100px white, 500px 250px white, 600px 150px white,
                700px 300px white, 800px 50px white, 900px 200px white,
                1000px 100px white, 1100px 300px white, 1200px 150px white;
    animation: twinkle 3s infinite;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

/* Music Player */
.music-player {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
}

.music-btn {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff1744, #d32f2f);
    border: 3px solid #ffd700;
    color: white;
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 25px rgba(255, 23, 68, 0.6);
    animation: float 3s ease-in-out infinite;
}

.music-btn:hover {
    transform: scale(1.15);
    box-shadow: 0 0 40px rgba(255, 215, 0, 1);
}

.music-btn.playing {
    animation: pulse-music 0.6s infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
}

@keyframes pulse-music {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Container & Scenes */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    min-height: 100vh;
}

.scene {
    display: none;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: sceneTransition 0.8s ease-out;
    opacity: 0;
}

.scene.active {
    display: flex;
    opacity: 1;
}

@keyframes sceneTransition {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* ===== SCENE 1: INTRO ===== */
.intro-content {
    text-align: center;
    animation: introAnimation 1s ease-out;
}

@keyframes introAnimation {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.intro-heart {
    font-size: 100px;
    margin-bottom: 20px;
    animation: heartBeat 1.5s ease-in-out infinite;
}

@keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

.intro-title {
    font-size: 4.5rem;
    color: #ffd700;
    text-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
    margin-bottom: 10px;
    letter-spacing: 3px;
}

.intro-subtitle {
    font-size: 1.8rem;
    color: #ff1744;
    margin-bottom: 20px;
    letter-spacing: 2px;
}

.intro-divider {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ffd700, transparent);
    margin: 20px auto 30px;
}

.intro-description {
    font-size: 1.2rem;
    color: #b0b0b0;
    margin-bottom: 40px;
}

/* Scene Headers */
.scene-header {
    text-align: center;
    margin-bottom: 40px;
}

.scene-header h2 {
    font-size: 3rem;
    color: #ffd700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    margin-bottom: 10px;
}

.part-counter, .scene-subtitle {
    color: #ff1744;
    font-size: 1.1rem;
}

/* Buttons */
.btn {
    padding: 14px 40px;
    font-size: 1rem;
    background: linear-gradient(135deg, #ff1744, #d32f2f);
    color: white;
    border: 2px solid #ffd700;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    box-shadow: 0 0 20px rgba(255, 23, 68, 0.4);
    margin: 10px;
}

.btn:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 35px rgba(255, 215, 0, 0.5);
    background: linear-gradient(135deg, #ff5252, #ff1744);
}

.btn:active:not(:disabled) {
    transform: translateY(-1px);
}

.btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.btn-large {
    padding: 16px 50px;
    font-size: 1.1rem;
}

.btn-skip {
    background: linear-gradient(135deg, #7c4dff, #651fff);
    border-color: #7c4dff;
}

/* ===== CHARACTERS ===== */
.characters-container {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin: 40px 0;
    align-items: flex-end;
    min-height: 350px;
}

.character {
    position: relative;
    width: 120px;
    height: 200px;
    transition: all 0.3s ease;
}

/* Head */
.char-head {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #f4a460, #daa520);
    border-radius: 50%;
    margin: 0 auto 8px;
    box-shadow: 0 0 15px rgba(244, 164, 96, 0.3);
    position: relative;
}

/* Eyes */
.char-eyes {
    position: absolute;
    top: 25px;
    left: 15px;
    width: 30px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
}

.char-eyes::before,
.char-eyes::after {
    content: '';
    width: 6px;
    height: 8px;
    background: #333;
    border-radius: 50%;
}

/* Mouth */
.char-mouth {
    position: absolute;
    top: 48px;
    left: 25px;
    width: 10px;
    height: 6px;
    border: 2px solid #333;
    border-top: none;
    border-radius: 0 0 8px 8px;
    z-index: 2;
}

.char-mouth.sad {
    border-radius: 8px 8px 0 0;
    border-top: 2px solid #333;
    border-bottom: none;
}

.char-mouth.angry {
    border-radius: 8px 8px 0 0;
    border-top: 2px solid #333;
    border-bottom: none;
    transform: skew(-10deg);
}

.char-mouth.happy {
    border-radius: 0 0 8px 8px;
    border-top: none;
    border-bottom: 2px solid #333;
    height: 8px;
}

/* Body */
.char-body {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    border-radius: 8px;
    margin: 0 auto 8px;
    position: relative;
}

.female .char-body {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
}

/* Arms */
.char-arms {
    position: absolute;
    top: 60px;
    left: -20px;
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.char-arms > div {
    width: 10px;
    height: 50px;
    background: #f4a460;
    border-radius: 5px;
    animation: armSwing 0.8s ease-in-out infinite;
}

.char-arms > div:first-child {
    animation-delay: 0s;
}

.char-arms > div:last-child {
    animation-delay: 0.4s;
}

@keyframes armSwing {
    0%, 100% { transform: rotateZ(20deg); }
    50% { transform: rotateZ(-25deg); }
}

.slap-arm {
    animation: slapSwing 0.4s ease !important;
}

@keyframes slapSwing {
    0% { transform: rotateZ(20deg); }
    50% { transform: rotateZ(-80deg); }
    100% { transform: rotateZ(20deg); }
}

/* Legs */
.char-legs {
    position: absolute;
    top: 110px;
    left: 35px;
    display: flex;
    gap: 8px;
}

.char-legs > div {
    width: 8px;
    height: 50px;
    background: #333;
    border-radius: 4px;
    animation: legWalk 0.8s ease-in-out infinite;
}

.char-legs > div:last-child {
    animation-delay: 0.4s;
}

@keyframes legWalk {
    0%, 100% { transform: rotateZ(0deg); }
    50% { transform: rotateZ(25deg); }
}

.running-legs > div {
    animation: runningWalk 0.6s ease-in-out infinite;
}

@keyframes runningWalk {
    0%, 100% { transform: rotateZ(-30deg); }
    50% { transform: rotateZ(30deg); }
}

/* Emotion Icon */
.emotion-icon {
    position: absolute;
    top: -35px;
    right: -25px;
    font-size: 35px;
    animation: emotionFloat 1s ease-in-out infinite;
}

@keyframes emotionFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Character States */
.character.happy {
    animation: jumpJoy 1s ease-in-out infinite;
}

@keyframes jumpJoy {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
}

.character.running {
    animation: runningMotion 0.8s linear infinite;
}

@keyframes runningMotion {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(40px); }
}

.character.chasing {
    animation: chasingMotion 0.8s linear infinite;
}

@keyframes chasingMotion {
    0%, 100% { transform: translateX(0) scaleX(-1); }
    50% { transform: translateX(-30px) scaleX(-1); }
}

.character.slappable {
    cursor: pointer;
    transition: all 0.1s ease;
}

.character.slappable:hover {
    transform: scale(1.08);
}

.character.hit {
    animation: hitEffect 0.3s ease;
}

@keyframes hitEffect {
    0% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(-20px) rotate(-5deg); }
    50% { transform: translateX(20px) rotate(5deg); }
    75% { transform: translateX(-10px) rotate(-3deg); }
    100% { transform: translateX(0) rotate(0deg); }
}

/* ===== SCENE 2: APOLOGY ===== */
.dialogue-box {
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid #ffd700;
    border-radius: 15px;
    padding: 30px;
    max-width: 700px;
    margin: 30px 0;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialogue-text {
    color: #fff;
    font-size: 1.15rem;
    line-height: 1.8;
    text-align: center;
}

.scene-controls {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
}

/* ===== SCENE 3: SLAP GAME ===== */
.anger-section {
    background: rgba(255, 23, 68, 0.15);
    padding: 25px;
    border-radius: 10px;
    max-width: 600px;
    margin: 30px 0;
    border: 2px solid #ff1744;
}

.anger-label {
    color: #ffd700;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
}

.anger-meter {
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #ff1744;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 15px;
}

.anger-bar {
    height: 100%;
    background: linear-gradient(90deg, #ff1744, #d32f2f);
    width: 100%;
    transition: width 0.3s ease;
    border-radius: 18px;
}

.anger-text {
    text-align: center;
    color: #ff1744;
    font-weight: bold;
    font-size: 1.1rem;
}

.slap-container {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin: 50px 0;
    align-items: flex-end;
    min-height: 350px;
}

.slap-message {
    color: #ff1744;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
    min-height: 30px;
    animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}

.slap-counter {
    color: #ffd700;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
}

#continueBtn {
    margin-top: 30px;
}

/* ===== SCENE 4: CHASE ===== */
.chase-area {
    width: 100%;
    max-width: 900px;
    height: 300px;
    background: rgba(255, 255, 255, 0.03);
    border: 2px solid #ffd700;
    border-radius: 10px;
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 40px;
    position: relative;
    overflow: hidden;
}

.rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.1) 2px,
        rgba(255, 255, 255, 0.1) 4px
    );
    animation: rainFall 0.5s linear infinite;
    pointer-events: none;
}

@keyframes rainFall {
    to {
        transform: translateY(20px);
    }
}

.chase-message {
    color: #ff1744;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
    min-height: 30px;
}

/* ===== SCENE 5: HAPPY ENDING ===== */
.hearts-container {
    position: absolute;
    width: 100%;
    height: 400px;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow: hidden;
}

.falling-heart {
    position: absolute;
    font-size: 2rem;
    animation: fallHeart 3s linear forwards;
}

@keyframes fallHeart {
    to {
        transform: translateY(500px) rotate(360deg);
        opacity: 0;
    }
}

.happy-ending {
    position: relative;
    z-index: 5;
}

.ending-message {
    text-align: center;
    margin: 40px 0;
    background: rgba(255, 215, 0, 0.1);
    padding: 30px;
    border-radius: 10px;
    border: 2px solid #ffd700;
    max-width: 600px;
}

.ending-message p {
    color: #ffd700;
    font-size: 1.3rem;
    line-height: 1.8;
    margin: 10px 0;
}

/* Credits */
.credits {
    text-align: center;
    padding: 40px 0;
    color: #888;
    font-size: 0.95rem;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
    margin-top: 60px;
}

.credits p {
    margin: 8px 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .characters-container {
        gap: 40px;
        min-height: 280px;
    }

    .character {
        width: 100px;
        height: 170px;
    }

    .intro-title {
        font-size: 3rem;
    }

    .scene-header h2 {
        font-size: 2.2rem;
    }

    .dialogue-box {
        padding: 20px;
        max-width: 90%;
    }

    .slap-container {
        gap: 50px;
        min-height: 280px;
    }

    .chase-area {
        height: 250px;
    }

    .btn {
        padding: 12px 30px;
        font-size: 0.95rem;
    }

    .btn-large {
        padding: 14px 40px;
        font-size: 1rem;
    }

    .scene-controls {
        gap: 8px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 20px 10px;
    }

    .intro-heart {
        font-size: 70px;
    }

    .intro-title {
        font-size: 2.2rem;
    }

    .intro-subtitle {
        font-size: 1.3rem;
    }

    .characters-container {
        gap: 30px;
        min-height: 250px;
    }

    .character {
        width: 80px;
        height: 140px;
    }

    .char-head {
        width: 45px;
        height: 45px;
    }

    .char-body {
        width: 38px;
        height: 38px;
    }

    .dialogue-box {
        padding: 15px;
        max-width: 95%;
    }

    .dialogue-text {
        font-size: 1rem;
    }

    .slap-container {
        gap: 25px;
        min-height: 250px;
        flex-direction: column;
    }

    .scene-header h2 {
        font-size: 1.8rem;
    }

    .btn {
        padding: 10px 25px;
        font-size: 0.85rem;
    }

    .btn-large {
        padding: 12px 30px;
        font-size: 0.95rem;
    }

    .scene-controls {
        flex-direction: column;
        width: 100%;
    }

    .scene-controls .btn {
        width: 100%;
    }

    .ending-message {
        padding: 20px;
    }

    .ending-message p {
        font-size: 1.1rem;
    }

    .music-btn {
        width: 55px;
        height: 55px;
        font-size: 24px;
        bottom: 20px;
        right: 20px;
    }
}
