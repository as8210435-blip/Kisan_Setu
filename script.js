/* =========================
   KISANSAATHI JAVASCRIPT
========================= */


/* =========================
   NAVIGATION
========================= */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================
   FARMER REGISTRATION
========================= */

function registerFarmer() {

    alert(
        "🌾 Farmer Registration\n\n" +
        "Registration page जल्द उपलब्ध होगी।"
    );

}


/* =========================
   MARKET LINKAGE
========================= */

function exploreMarkets() {

    alert(
        "🏪 Market Linkage\n\n" +
        "आपके नजदीकी markets और mandis जल्द दिखाई जाएंगी।"
    );

}


/* =========================
   PRICE DISCOVERY
========================= */

function checkPrices() {

    document.getElementById("prices").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   BUYERS
========================= */

function viewBuyers() {

    alert(
        "🤝 Buyers & Trading\n\n" +
        "Registered buyers की जानकारी जल्द उपलब्ध होगी।"
    );

}


/* =========================
   WATCH VIDEO
========================= */

function watchVideo() {

    alert(
        "▶ KisanSaathi Introduction Video\n\n" +
        "Video player यहां integrate किया जा सकता है।"
    );

}


/* =========================
   VIEW ALL PRICES
========================= */

function viewAllPrices() {

    const table = document.getElementById("priceTable");

    const extraRows = [

        {
            crop: "Chana",
            icon: "🫘",
            mandi: "Kanpur Mandi (UP)",
            price: "₹ 5,400",
            trend: "↑ +80",
            className: "up"
        },

        {
            crop: "Arhar",
            icon: "🫘",
            mandi: "Lucknow Mandi (UP)",
            price: "₹ 7,100",
            trend: "↑ +120",
            className: "up"
        },

        {
            crop: "Masoor",
            icon: "🫘",
            mandi: "Agra Mandi (UP)",
            price: "₹ 6,250",
            trend: "↓ -50",
            className: "down"
        }

    ];


    extraRows.forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <span class="crop-icon">
                    ${item.icon}
                </span>
                ${item.crop}
            </td>

            <td>${item.mandi}</td>

            <td>${item.price}</td>

            <td class="${item.className}">
                ${item.trend}
            </td>
        `;

        table.appendChild(row);

    });


    alert("More market prices loaded successfully.");

}


/* =========================
   SEARCH
========================= */

const searchIcon =
    document.querySelector(".nav-right > i");

if (searchIcon) {

    searchIcon.addEventListener("click", function () {

        const search = prompt(
            "आप क्या खोजना चाहते हैं?"
        );

        if (search && search.trim() !== "") {

            alert(
                `"${search}" के लिए search results जल्द उपलब्ध होंगे।`
            );

        }

    });

}


/* =========================
   NOTIFICATION
========================= */

const notification =
    document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", function () {

        alert(
            "🔔 Notifications\n\n" +
            "• गेहूं की कीमत ₹50 बढ़ी है\n" +
            "• नया buyer आपके क्षेत्र में उपलब्ध है"
        );

    });

}


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", function () {

    console.log(
        "KisanSaathi website successfully loaded."
    );

});