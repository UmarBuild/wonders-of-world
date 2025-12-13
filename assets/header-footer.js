let header = document.querySelector("#header");
// navbar
header.innerHTML = `
    <style>
        * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

li {
    list-style: none;
}

a {
    text-decoration: none !important;
}

body{
    height: 0;
    /* width: 0; */
    transition: all 0.4s ease-in;
}
body.dark-mode {
    /* width: 100%; */
    height: 100%;
    background-color: #121212;
    color: #ffffff;
    transition: all 0.4s ease;
}

.bold {
    width: 100px;
    height: auto;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.2s ease-in;

}

.bold:hover {
    font-weight: 600 !important;
    color: white !important;
    transition: 0.2s ease-in;
}

.nav-line {
    position: relative;
    width: auto;
}

.nav-line::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 0px;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
}

.nav-line:hover::after {
    transition: width 0.3s ease-in-out;
    width: 100%;
}

/* // animation navbar  */
.navbar {
    animation: fadeDown 0.8s ease-out;
}

@keyframes fadeDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.navbar-toggler{
    padding: 2px 3px !important;
    /* border: none !important; */
}
.navbar-toggler-icon {
    outline: none;
    width: 25px !important;
    height: 25px !important;
}

/* // styling for navbar  */
.nav-link:hover {
    color: #F3E294 !important;
    /* Golden hover */
}

.navbar-brand img {
    filter: drop-shadow(1px 1px 2px #000);
}

.height-header {
    /* border: 2px solid green; */
    min-height: 95vh !important;
}

.navbar {
    /* border: 2px solid blue; */
    min-height: 75px !important;
    z-index: 999 !important;
    position: fixed !important;
    display: block !important;
    width: 100% !important;
    top: 0 !important;
    left: 0 !important;
}

.navbar::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background-color: black !important;
    opacity: 0.8 !important;
    z-index: -1 !important;
}

#darkToggle {
    position: relative !important;
    padding: 16px 16px;
    width: 30px !important;
    height: 30px !important;
    background-color: #ffffff !important;
    /* dark mode base */
    border: 0px solid #FFD700 !important;
    /* golden border */
    color: #FFD700 !important;
    clip-path: polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%) !important;
    /* hexagon shape */
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
}

#darkToggle:hover {
    color: rgb(0, 0, 0) !important;
    background-color: #6966668c !important;
    /* subtle hover */
    transform: scale(1.1) !important;
}

#darkToggle i {
    color: #FFD700 !important;
    /* icon color for theme */
    transition: color 0.3s ease !important;
}

#darkToggle i:hover {
    color: #ffffff !important;
    /* icon color for theme */
    transition: color 0.3s ease !important;

}

body.dark-mode #darkToggle {
    background-color: #6966668c !important;
}

body.dark-mode #darkToggle i {
    color: #ffd700 !important;
    /* icon dark for contrast */
}

body.dark-mode #darkToggle:hover {
    background-color: #ffffff !important;
}

body.dark-mode #darkToggle i {
    color: #ffd700 !important;
}
    </style>
   <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

    <!-- // font awesome icons  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- // animation  -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    
    <nav class="navbar navbar-expand-xl navbar-dark shadow-sm m-0 p-0">
        <div class="container-fluid px-5 py-1 m-0 d-flex justify-content-evenly align-items-center h-100 gap-0">

            <!-- LOGO + TITLE -->
            <a class="navbar-brand fw-bold d-flex justify-content-center align-items-center gap-1" href="#">
                <img src="./images/logo.png" alt="" class="img-fluid" style="height: 50px ;">
                <span
                    style="font-family: 'Playfair Display', serif; font-weight: bold; font-size: 20px; color: #F3E294 ; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); word-spacing: 2px;">
                    Wonders Of World
                </span>
            </a>

            <!-- TOGGLER FOR MOBILE -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWOW">
                <span class="navbar-toggler-icon"
                    style="color: #F3E294 !important; border: none !important; outline: none !important;"></span>
            </button>

            <!-- NAV LINKS -->
            <div class="collapse navbar-collapse" id="navbarWOW">
                <ul class="navbar-nav mx-auto gap-3 flex-column flex-xl-row align-items-center justify-content-center">

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./index.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">Home</a></li>

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./gallery.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">Gallery</a></li>

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./planVisit.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">Plan Visit</a></li>

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./downloads.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">History</a></li>

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./about.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">About Us</a></li>

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./contactUs.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">Contact Us</a></li>

                    <li class="nav-item"><a class="nav-link nav-line text-center" href="./sitemap.html"
                        style="color: #D3D3D3; transition: color 0.3s; font-family: 'Poppins', sans-serif;">Site Map</a></li>

                </ul>
            </div>

            <!-- DARK MODE BUTTON -->
            <button class="btn" id="darkToggle" style="border-color:#F3E294; color:#F3E294; font-family: 'Poppins', sans-serif;">
                <i class="fa-solid fa-moon fs-5"></i>
            </button>

        </div>
    </nav>


    <!-- // animation js  -->
<script> 
let btn = document.getElementById('darkToggle');
      btn.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
      });
</script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script>
        AOS.init({
            once: true,
            duration: 1200,
            easing: 'ease-in-out'
        });
    </script>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`
// navbar end
// footer 
let footer = document.querySelector("#footer");
footer.innerHTML = `
    <style> 
* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

li {
    list-style: none;
}

a {
    text-decoration: none !important;
}

body{
    height: 0;
    /* width: 0; */
    transition: all 0.4s ease-in;
}
body.dark-mode {
    /* width: 100%; */
    height: 100%;
    background-color: #121212;
    color: #ffffff;
    transition: all 0.4s ease;
}
.footer {
    background-color: #121212; 
    color: #ffffff;
    padding: 60px 20px 30px 20px !important;
    font-family: 'Georgia', serif;
    position: relative;
    z-index: 1;
}

.footer .logo {
    height: 60px;
}

.footer h3 {
    color: #F3E294; 
    font-weight: bold;
    position: relative;
    margin-bottom: 20px;
}

.footer p {
    color: #d3d3d3;
    line-height: 1.6;
}

/* Links */
.footer a {
    color: #d3d3d3;
    transition: all 0.3s ease;
}

.footer a:hover {
    color: #F3E294;
    text-decoration: none;
}

.footer ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
}

/* Columns */
.footer .row > div {
    margin-bottom: 30px;
}

/* Social Icons */
.footer .social-icons a i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #121212;
    background-color: #F3E294;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.footer .social-icons a i:hover {
    transform: scale(1.3);
    background-color: #d4b95f;
    color: #121212;
}

/* Separator Line */
.footer hr {
    border: 0;
    height: 1px;
    background-color: #444;
    margin: 30px 0;
}

/* Copyright */
.footer p.text-center {
    font-size: 0.9rem;
    color: #d3d3d3;
}

/* Underline Animation */
/* .underline {
    width: 100% !important;
    height: 2px !important;
    background: #f3f2ec !important;
    border-radius: 6px !important;
    position: relative !important; 
    margin-top: 8px; /* adjust spacing 
    overflow: hidden !important;
}

.underline>span {
    width: 16px;
    height: 100%;
    font-weight: bolder;
    background: #121212;
    border-radius: 6px;
    filter: contrast(100%);
    position: absolute;
    top: 0;
    left: 0;
    animation: moving 3s linear infinite;
} */

@keyframes moving {
    0% { left: -8px; }
    50% { left: 100%; }
    100% { left: -8px; }
}

/* Responsive Adjustments */
@media(max-width: 991px){
    .footer .row {
        flex-direction: column;
        /* text-align: center; all headings center */
        gap: 30px;
    }
    .footer .social-icons {
        justify-content: center !important;
        margin-top: 20px;
    }
    .footer h3 {
        display: inline-block; /* keep underline animation correct */
    }
    .underline {
        margin: 5px auto 15px auto;
    }
}


    </style>
     <!-- Google Fonts (same as header) -->
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet">

    <!-- // font awesome icons  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <!-- // bootstrap icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- // animation  -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    <!-- // Css  -->
    <link rel="stylesheet" href="./assets/header-footer.css">
    <!-- // footer  -->
    <div class="footer container-fluid px-5 ">
        <div class="row g-1 mx-3">

            <!-- Column 1 -->
            <div class="col-12 col-lg-3 footer-col-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div class="d-flex align-items-center pb-4" style="margin-top: -11px;">
                    <img src="./images/logo.png" alt="" class="img-fluid logo" style="height: 60px;">
                    <h3 class="m-0 text-center" style="font-family: 'Playfair Display', serif; font-weight: bold; color: #F3E294; 
                        text-shadow: 1px 1px 3px rgba(0,0,0,0.2); word-spacing: 2px;">
                        WOW
                    </h3>
                </div>
                <p class="pt-3" style="text-align: justify; font-family: 'Poppins', sans-serif;">
                    WOW unites the world’s greatest marvels in one place,
                    celebrating their beauty, history, and timeless legacy. From ancient wonders to modern
                    icons, we reveal the stories that shaped civilizations. Begin your journey and explore
                    the creations that continue to inspire the world.
                </p>
            </div>

            <!-- Column 2 -->
            <div class="col-12 col-lg-3 d-lg-flex flex-column align-items-center" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="200">
                <h3 class="px-0" style="padding-bottom: 12px; font-family: 'Playfair Display', serif;">
                    Links <div class="underline"><span></span></div>
                </h3>
                <ul class="list-unstyled d-flex flex-column p-0 m-0 ps-lg-4" style="font-family: 'Poppins', sans-serif;">
                    <li style="margin-bottom: 3px;"><a href="./index.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Home</a></li>
                    <li style="margin-bottom: 3px;"><a href="./gallery.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Gallery</a></li>
                    <li style="margin-bottom: 3px;"><a href="./planVisit.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Plan Visit</a></li>
                    <li style="margin-bottom: 3px;"><a href="./downloads.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">History</a></li>
                    <li style="margin-bottom: 3px;"><a href="./about.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">About Us</a></li>
                    <li style="margin-bottom: 3px;"><a href="./contactUs.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Contact Us</a></li>
                    <li style="margin-bottom: 3px;"><a href="./sitemap.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Site Map</a></li>
                </ul>
            </div>

            <!-- Column 3 -->
            <div class="col-12 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <h3 style="padding-bottom: 12px; font-family: 'Playfair Display', serif;">
                    Quick Support<div class="underline"><span></span></div>
                </h3>
                <ul class="p-0 m-0 d-flex flex-column justify-content-center"
                    style="font-family: 'Poppins', sans-serif;">
                    <li style="margin-bottom: 3px;"><a href="./index.html#FAQS" class="text-white nav-line lh-base" style="padding-bottom: 10px;">FAQS</a></li>
                    <li style="margin-bottom: 3px;"><a href="./about.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Our Journey</a></li>
                    <li style="margin-bottom: 3px;"><a href="./contactUs.html" class="text-white nav-line lh-base" style="padding-bottom: 10px;">Get In Touch</a></li>
                </ul>
            </div>

            <!-- Column 4 -->
            <div class="col-12 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div style="border-bottom: 1px solid #fff;">
                    <h3 style="padding-bottom: 12px; font-family: 'Playfair Display', serif;">
                        The Final Step <div class="underline"> <span></span> </div>
                    </h3>
                    <p style="font-family: 'Poppins', sans-serif;" class="text-justify">
                        Take the wonders with you, and let every visit spark new inspiration.
                    </p>
                </div>
                <div class="social-icons d-flex gap-3 justify-content-center"
                    style="padding-top: 110px; width: 100%; font-family: 'Poppins', sans-serif;">
                    <a href="https://facebook.com"><i
                            class="fab fa-facebook-f bg-light fs-3 text-center rounded-circle bg-light text-dark"
                            style="width: 40px; line-height: 40px;"></i></a>
                    <a href="https://x.com"><i
                            class="fab fa-twitter fs-3 bg-light text-center rounded-circle bg-light text-dark"
                            style="width: 40px; line-height: 40px;"></i></a>
                    <a href="https://whatsapp.com"><i
                            class="fab fa-whatsapp bg-light fs-3 text-center rounded-circle bg-light text-dark"
                            style="width: 40px; line-height: 40px;"></i></a>
                    <a href="https://pinterest.com"><i
                            class="fab fa-pinterest-p bg-light fs-3 text-center rounded-circle bg-light text-dark"
                            style="width: 40px; line-height: 40px;"></i></a>
                </div>
            </div>

        </div>

        <hr>

        <p class="text-center text-white mt-3 mb-0" style="font-size: 0.9rem; font-family: 'Poppins', sans-serif;">
            &copy; 2025 WOW - Wonders Of World. All Rights Reserved.
        </p>
    </div>

    <!-- // animation js  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script>
        AOS.init({
            once: true,
            duration: 1200,
            easing: 'ease-in-out'
        });
    </script>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`;
// footer end
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('darkToggle');
  if (localStorage.getItem('wow-theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      if (isDark) {
        localStorage.setItem('wow-theme', 'dark');  
      } else {
        localStorage.setItem('wow-theme', 'light'); 
      }
    });
  }
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 1200,
      easing: 'ease-in-out'
    });
  }
});
// Arrow Button 
let btn = document.querySelector(".arrow-button");
btn.innerHTML = `<style>
/* Arrow Button */
.scroll-top-btn {
    position: fixed;
    bottom: 30px;
    right: 20px;
    height: 40px;
    width: 40px;
    background-color: #f0d352;
    color: #000;
    padding: 6px 6px;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3); 
    cursor: pointer;
    z-index: 999;
    text-align: center;
    display: none;
    transition: all 0.3s ease;
}

.scroll-top-btn:hover {
    background-color: #ffe372;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
    transform: translateY(-5px);
}

</style>
<a href="#" id="scrollTopBtn" class="scroll-top-btn">
<i class="bi bi-arrow-up" style="font-size: 20px; color: black;"></i>
</a>
`
  const scrollBtn = document.getElementById("scrollTopBtn");
   window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    