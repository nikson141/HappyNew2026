// =======================
// 🎁 Messages in KA & EN
// =======================
const messages = {
    ka: [
        "✨ ახალი წელი ახალი დასაწყისია",
        "🎯 2026 წელი შენს მხარესაა",
        "💙 გჯეროდეს საკუთარი თავის",
        "🚀 ყველაფერი წინ არის",
        "🌟 წარმატება გელოდება",
        "🔥 არასდროს შეჩერდე",
        "🌈 ბედნიერება პატარა ნაბიჯებიდან იწყება"
    ],
    en: [
        "✨ New Year is a new beginning",
        "🎯 2026 is your year",
        "💙 Believe in yourself",
        "🚀 Everything is ahead",
        "🌟 Success awaits you",
        "🔥 Never stop",
        "🌈 Happiness starts with small steps"
    ]
};

// =======================
// DOM Elements
// =======================
const card = document.getElementById("card");
const messageEl = document.getElementById("message");
const btn = document.getElementById("btn");
const title = document.getElementById("title");
const musicBtn = document.getElementById("music-btn");
const langBtns = document.querySelectorAll(".lang-btn");
const snowContainer = document.getElementById("snow-container");
const music = document.getElementById("bg-music");

// Current language
let currentLang = 'ka';

// =======================
// 🎁 Show random message
// =======================
function showRandomMessage() {
    card.classList.remove("show");

    setTimeout(() => {
        const index = Math.floor(Math.random() * messages[currentLang].length);
        messageEl.textContent = messages[currentLang][index];
        card.classList.add("show");
    }, 250);

    // Update New Message button text based on language
    btn.textContent = currentLang === 'ka' ? "🎁 ახალი მესიჯი" : "🎁 New Message";
}

card.classList.add("show");

// Tap card or click button triggers new message
card.addEventListener("click", showRandomMessage);
btn.addEventListener("click", showRandomMessage);

// =======================
// ❄️ Snow System
// =======================
const SNOW_COUNT = 120;

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.textContent = Math.random() > 0.5 ? "❄" : "❅";
    snowflake.style.position = "absolute";

    const size = Math.random() * 10 + 10;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 8 + 6;
    const opacity = Math.random() * 0.5 + 0.4;

    snowflake.style.left = startX + "px";
    snowflake.style.fontSize = size + "px";
    snowflake.style.opacity = opacity;
    snowflake.style.top = "-20px";
    snowflake.style.animation = `fall ${duration}s linear`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
        createSnowflake();
    }, duration * 1000);
}

for (let i = 0; i < SNOW_COUNT; i++) {
    setTimeout(createSnowflake, i * 150);
}

const style = document.createElement("style");
style.textContent = `
@keyframes fall {
    to {
        transform: translateY(110vh);
    }
}`;
document.head.appendChild(style);

// =======================
// 🎶 Music Logic
// =======================
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.textContent = currentLang === 'ka' ? "🔇 მუსიკა გამორთულია" : "🔇 Music Off";
    } else {
        music.play().catch(() => {
            alert(currentLang === 'ka' ? "დააჭირე მუსიკის ჩართვისთვის" : "Click to play music");
        });
        musicBtn.textContent = currentLang === 'ka' ? "🎵 მუსიკა ჩართულია" : "🎵 Music On";
    }
    isPlaying = !isPlaying;
}

musicBtn.addEventListener("click", toggleMusic);

window.addEventListener("load", () => {
    music.play().then(() => {
        isPlaying = true;
        musicBtn.textContent = currentLang === 'ka' ? "🎵 მუსიკა ჩართულია" : "🎵 Music On";
    }).catch(() => {
        isPlaying = false;
        musicBtn.textContent = currentLang === 'ka' ? "🔇 მუსიკა გამორთულია (დააჭირე ჩართვისთვის)" : "🔇 Music Off (Click to play)";
    });
});

// =======================
// 🌐 Language switching
// =======================
langBtns.forEach(langBtn => {
    langBtn.addEventListener("click", () => {
        currentLang = langBtn.dataset.lang;

        // Update title
        title.innerHTML = currentLang === 'ka' 
            ? `გილოცავთ ახალ <span class="highlight">2026 წელს</span>` 
            : `Happy New Year <span class="highlight">2026</span>`;

        // Update New Message button text
        btn.textContent = currentLang === 'ka' ? "🎁 ახალი მესიჯი" : "🎁 New Message";

        // Show new message immediately
        showRandomMessage();

        // Update music button text
        musicBtn.textContent = isPlaying
            ? currentLang === 'ka' ? "🎵 მუსიკა ჩართულია" : "🎵 Music On"
            : currentLang === 'ka' ? "🔇 მუსიკა გამორთულია" : "🔇 Music Off";
    });
});
