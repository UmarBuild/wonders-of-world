const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const list = document.querySelector('.list'); 
const bar = document.querySelector('.timeRunning');

let autoTime = 9000; 

function nextSlide() {
    list.appendChild(list.firstElementChild); 
}

function prevSlide() {
    list.prepend(list.lastElementChild); 
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, autoTime);

// Gallery Buttons 

let more = document.querySelector(".more");
let less = document.querySelector(".less");
let extra = document.querySelector(".extra");

more.addEventListener("click", () => {
    extra.classList.remove("hidden");
    extra.classList.add("show");
});

less.addEventListener("click", () => {
    extra.classList.remove("show");
    extra.classList.add("hidden");
});
// Gallery 
    const buttons = document.querySelectorAll(".wonder-btn");
    const images = document.querySelectorAll("#gallery img");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.target;

            images.forEach(img => {
                const category = img.dataset.category;

                if (target === "all" || category === target) {
                    img.parentElement.style.display = "block";
                } else {
                    img.parentElement.style.display = "none";
                }
            });
        });
    });
