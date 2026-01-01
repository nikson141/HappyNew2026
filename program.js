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
        "🌈 ბედნიერება პატარა ნაბიჯებიდან იწყება",
        "❄️ 2026 წელი იყოს მშვიდობის, ბედნიერებისა და წარმატების წელი!",
        "🎁 დაე, ახალი წელი შენს ცხოვრებაში ბედნიერების კარი გააღოს!",
        "🌟 ყველაფერი რაც გინდოდა, 2026-ში აგიხდეს!",
        "🍀 ჯანმრთელობა, სიყვარული და სიხარული გახლდეს მთელი წლის მანძილზე!",
        "🔥 ახალი წელი – ახალი მიზნები, ახალი წარმატებები!",
        "🎆 2026 წელი იყოს შენი საუკეთესო წელი!",
        "🌲 დაე, ახალი წელი სითბოთი და კეთილი ამბებით იყოს სავსე!",
        "💫 რაც წარსულში ვერ მოხერხდა, ახალ წელს აუცილებლად გამოგივა!",
        "🎉 ირწმუნე საკუთარი თავი — 2026 შენია!",
        "❤️ სიყვარული და ბედნიერება არასდროს მოგკლებოდეს!",
        "🌈 ყოველი დღე ახალი შესაძლებლობით დაიწყოს!",
        "🕊️ მშვიდობა შენს გულსა და სახლში!",
        "🚀 ახალი წელი — ახალი სიმაღლეები!",
        "🌠 ყველაფერი კარგი ახლა იწყება!",
        "🎄 ბედნიერი ახალი წელი შენ და შენს ოჯახს!",
        "🌟 დაე, იღბალი სულ შენს მხარეს იყოს!",
        "✨ გაბედე, იოცნებე და იმოქმედე — 2026 გელოდება!",
        "❄️ ახალი წელი იყოს სავსე ღიმილით და წარმატებით!"
    ],
    en: [
        "✨ New Year is a new beginning",
        "🎯 2026 is your year",
        "💙 Believe in yourself",
        "🚀 Everything is ahead",
        "🌟 Success awaits you",
        "🔥 Never stop",
        "🌈 Happiness starts with small steps",
        "🎄 Happy New Year 2026! May all your dreams come true!",
        "✨ Wishing you a fresh start and endless motivation in 2026!",
        "❄️ May 2026 bring you peace, joy, and success!",
        "🎁 A new year means new opportunities — grab them!",
        "🌟 Believe in yourself and make 2026 amazing!",
        "🍀 Health, happiness, and love all year long!",
        "🔥 New year, new goals, new victories!",
        "🎆 Make 2026 your best year yet!",
        "🌲 Let this year be filled with warmth and kindness!",
        "💫 Everything you worked for will pay off in 2026!",
        "🎉 You are capable of great things — go for it!",
        "❤️ May love and happiness follow you everywhere!",
        "🌈 Every day is a new chance to grow!",
        "🕊️ Peace in your heart, joy in your home!",
        "🚀 Reach higher, dream bigger in 2026!",
        "🌠 The best is yet to come!",
        "🎄 Wishing you a joyful and successful New Year!",
        "🌟 Stay positive — amazing things are coming!",
        "✨ Dream it. Believe it. Achieve it.",
        "❄️ Cheers to new beginnings and bright days!"
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
