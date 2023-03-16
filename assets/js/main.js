/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", function () {
        navMenu.classList.add("show-menu");
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", function () {
        navMenu.classList.remove("show-menu");
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(n => n.addEventListener("click", () => navMenu.classList.remove("show-menu")))

/*==================== RENDER SKILLS ====================*/
const skillArrr = [
    {
        icon: "uil uil-brackets-curly",
        title: "Frontend developer",
        subtitle: "More than 4 years",
        listSkills: [
            {
                name: "HTML",
                number: 10,
                class: "",

            },
            {
                name: "CSS",
                number: 20,
                class: "",
            },
            {
                name: "Javascript",
                number: 14,
                class: "",
            },
            {
                name: "Rì át",
                number: 14,
                class: "",
            },
        ]
    },
    {
        icon: "uil uil-brackets-curly",
        title: "Frontend developer",
        subtitle: "More than 4 years",
        listSkills: [
            {
                name: "HTML",
                number: 10,
                class: "skills__html",
            },
            {
                name: "CSS",
                number: 20,
                class: "skills__css",
            },
            {
                name: "Javascript",
                number: 14,
                class: "skills__javascript",
            },
            {
                name: "Rì át",
                number: 14,
                class: "skills__react",
            },
        ]
    },
    {
        icon: "uil uil-brackets-curly",
        title: "Frontend developer",
        subtitle: "More than 4 years",
        listSkills: [
            {
                name: "HTML",
                number: 10,
            },
            {
                name: "CSS",
                number: 20,
            },
            {
                name: "Javascript",
                number: 14,
            },
            {
                name: "Rì át",
                number: 14,
            },
        ]
    },
];
const skillContainer = document.querySelector(".skills__container");
if (skillContainer) {
    skillContainer.innerHTML = skillArrr.map((d, i) => `
    <div>
                        <div class="skills__content ${i == 0 ? "skills--open" : "skills--close"}">
                            <div class="skills__header">
                                <i class="uil uil-globe skills__icon"></i>
                                <div>
                                    <div class="skills__title">${d.title}</div>
                                    <div class="skills__subtitle">${d.subtitle}</div>
                                </div>
    
                                <i class="uil uil-angle-down skills__arrow"></i>
                            </div>
    
                            <div class="skills__list grid">
                                ${d.listSkills && d.listSkills.map(item => `
                                <div class="skill__data">
                                    <div class="skills__titles">
                                        <h3 class="skills__name">${item.name}</h3>
                                        <span class="skills__number">${item.number}%</span>
                                    </div>
                                    <div class="skills__bar">
                                        <span class="skills__percentage ${item?.class}"
                                            style="--i: ${item.number}%;"
                                        >

                                        </span>
                                    </div>
                                </div>
                                `).join(' ')}
                            </div>
                        </div>
                    </div>
    `).join(' ');
}

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");
const toggleSkills = function () {
    const currentItemClass = this.parentNode.className;
    const length = skillsContent.length;
    for (i = 0; i < length; i++) {
        skillsContent[i].className = "skills__content skills--close";
    }
    if (currentItemClass === "skills__content skills--close") {
        this.parentNode.className = "skills__content skills--open";
    }
}
skillsHeader.forEach(el => el.addEventListener("click", toggleSkills));

/*==================== QUALIFICATION TABS ====================*/
const tabList = document.querySelectorAll("[data-target]");
const tabContentList = document.querySelectorAll("[data-content]");
if (tabList) {
    tabList.forEach(el => el.addEventListener("click", () => {
        const targetContentTab = document.querySelector(el.dataset.target);
        tabContentList.forEach(elContent => {
            elContent.classList.remove("qualification--active");
        })
        targetContentTab.classList.add("qualification--active");

        tabList.forEach(tab => {
            tab.classList.remove("qualification--active");
        })
        el.classList.add("qualification--active");
    }))
}

/*==================== SERVICES MODAL ====================*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const modalList = $$(".services__modal"),
    modalBtnList = $$(".services__button")
modalBtnCloseList = $$(".services__modal-close");

const openModal = index => {
    modalList[index].classList.add("services__modal--active");
}

modalBtnList.forEach((b, index) => b.addEventListener("click", () => openModal(index)));

modalBtnCloseList.forEach(el => el.addEventListener("click", () => {
    modalList.forEach(modalEle => modalEle.classList.remove("services__modal--active"));
}))

/*==================== PORTFOLIO SWIPER  ====================*/

let portfolioSwiper = new Swiper(".portfolio__swiper-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let testimonialSwiper = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = $$("section[id]");

window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;
    sections.forEach(el => {
        const sectionHeight = el.offsetHeight;
        const sectionTop = el.offsetTop - 50;
        const sectionId = el.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            $(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
        } else {
            $(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-link");
        }

    })
})
/*==================== CHANGE BACKGROUND HEADER ====================*/

window.addEventListener("scroll", function () {
    const nav = $("#header");
    if (this.scrollY > 80) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header");
    }
});

/*==================== SHOW SCROLL UP ====================*/

window.addEventListener("scroll", function () {
    const scroll = $("#scroll-up");
    if (this.scrollY > 560) {
        scroll.classList.add("show-scroll");
    } else {
        scroll.classList.remove("show-scroll");
    }
});

/*==================== DARK LIGHT THEME ====================*/
const themeButton = $("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const prevTheme = localStorage.getItem("selected-theme");
const prevIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (prevTheme) {
    document.body.classList[prevTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[prevIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})