let body = document.querySelector("body");
let Cursor = document.querySelector("#Cursor");

body.addEventListener("mousemove", function (dets) {
    gsap.to(Cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
    })
})

// window.addEventListener("wheel", function (dets) {
//     if (dets.deltaY > 0) {
//         gsap.to(".locatoinsvg", {
//             transform: "rotate(-0deg)",
//             duration: 1,
//             repeat: -1,
//             ease: "none"
//         })
//     } else {
//         gsap.to(".locatoinsvg", {
//             transform: "rotate(180deg)",
//             duration: 1,
//             repeat: -1,
//             ease: "none"
//         })
//     }
// })
// gsap.to(".name-wrap",{
//     transform:"translateX(-100)%",
//     duration: 12,
//     repeat:-1,
//     ease:"none"
// })

// window.addEventListener("mouseenter", function (dets) {
//     gsap.to(".name-wrap", {
//         transform: "translateX(-100%)",
//         duration: 12,
//         repeat: -1, 
//         ease: "none"
//     })
// })

window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".name-wrap", {
            transform: "translateX(-100%)",
            duration: 12,
            repeat: -1,
            ease: "none"
        })
    } else {
        gsap.to(".name-wrap", {
            transform: "translateX(100%)",
            duration: 12,
            repeat: -1,
            ease: "none"
        })
    }
})
window.addEventListener("load", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".name-wrap", {
            transform: "translateX(-100%)",
            duration: 12,
            repeat: -1,
            ease: "none"
        })
    } else {
        gsap.to(".name-wrap", {
            transform: "translateX(100%)",
            duration: 12,
            repeat: -1,
            ease: "none"
        })
    }
})
window.addEventListener("load", () => {
    document.getElementById("Footer").innerHTML = `  <div class="contianer">
            <div class="footer-content">
                <div class="footer-heading-content" data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h1>Think I’d fit your project?</h1>
                    <div class="GIT-btn-content">
                        <div class="GIT-btn">
                            <a href="mailto:shaadwork637@gmail.com">Let’s work together
                                <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 49 48"
                                        fill="none">
                                        <g clip-path="url(#clip0_1391_560)">
                                            <path d="M12.5 24L36.5 24" stroke="white" stroke-width="4"
                                                stroke-linecap="square" stroke-linejoin="round" />
                                            <path d="M28.1001 36L40.1001 24" stroke="white" stroke-width="4"
                                                stroke-linecap="square" stroke-linejoin="round" />
                                            <path d="M28.1001 12L40.1001 24" stroke="white" stroke-width="4"
                                                stroke-linecap="square" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1391_560">
                                                <rect width="48" height="48" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg></i>
                            </a>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="right-side-content" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div class="follow-links">
                            <h5>Say hi</h5>
                            <h6>I’m based in Indore, <br> India</h6>
                        </div>
                        <div class="follow-links mail">
                            <h5>Email</h5>
                            <div class="link-border GIT-btn-content">
                                <h6 class="link-border"><a href="">Get in touch</a></h6>
                                <hr>
                            </div>

                        </div>
                        <div class="follow-links">
                            <h5>Follow</h5>
                            <h6><a href="https://www.instagram.com/ux_shaad_/">Instagram</a></h6>
                            <h6><a href="https://dribbble.com/shaad_dz">Dribble</a></h6>
                            <h6><a href="https://www.behance.net/shaad_dz">Behance</a></h6>
                            <h6><a href="https://www.linkedin.com/in/uxshaad/">LinkedIn</a></h6>
                        </div>
                        <div class="follow-links">
                            <h5>Quick links</h5>
                            <div class="link-border GIT-btn-content">
                                <h6><a href="index.html">Home</a>
                                </h6>
                                <hr>
                            </div>
                            <div class="link-border GIT-btn-content">
                                <h6 class="link-border GIT-btn-content">
                                    <a href="information.html">Information</a>
                                </h6>
                                <hr>
                            </div>
                            <div class="link-border GIT-btn-content">
                                <h6 class="link-border GIT-btn-content">
                                    <a href="experiments.html">Experiments</a>
                                </h6>
                                <hr>
                            </div>


                        </div>
                    </div>
                    <div class="left-side-content follow-links" data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h5>© Mohammad Shaad <br>2024</h5>
                        <div id="Logo logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="44" viewBox="0 0 60 44"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.3463 42.3254C14.7728 43.431 17.3736 44 20 44V43.9972L20.0039 44L43.4488 4.81381C45.4358 5.29628 47.3399 6.19573 49.0505 7.4864C52.5498 10.1268 54.9523 14.1881 55.7294 18.777C56.5065 23.3658 55.5946 28.1063 53.1942 31.9555C50.7939 35.8048 47.1017 38.4475 42.93 39.3023L43.4219 43.5961C48.6365 42.5276 53.4923 39.256 56.4928 34.4444C59.4932 29.6329 60.6331 23.7073 59.6617 17.9712C58.6904 12.2351 55.6873 7.15846 51.3131 3.858C46.939 0.557533 41.552 -0.696373 36.3374 0.372128L36.3421 0.399925L36.326 0.395157L13.747 38.2003C11.857 37.3176 10.1388 36.0428 8.68629 34.4451C7.20055 32.8108 6.022 30.8706 5.21793 28.7353C4.41385 26.6 4 24.3113 4 22.0001C4 19.6888 4.41385 17.4002 5.21793 15.2649C6.022 13.1295 7.20055 11.1893 8.68629 9.55504C10.172 7.92073 11.9359 6.62433 13.8771 5.73985C15.8183 4.85537 17.8988 4.40014 20 4.40014L20 0.000152588C17.3736 0.000152588 14.7728 0.569199 12.3463 1.6748C9.91982 2.7804 7.71504 4.4009 5.85787 6.44378C4.0007 8.48666 2.52751 10.9119 1.52242 13.5811C0.517323 16.2502 7.7442e-06 19.111 7.62939e-06 22.0001C7.51459e-06 24.8891 0.517322 27.7499 1.52242 30.4191C2.52751 33.0882 4.0007 35.5135 5.85786 37.5564C7.71503 39.5993 9.91982 41.2198 12.3463 42.3254ZM16.2949 39.1216C17.1886 39.3556 18.0999 39.5048 19.0187 39.5669L40.214 4.40158C39.2749 4.38774 38.3308 4.46484 37.3924 4.63537L16.2949 39.1216Z"
                                    fill="#CFD2D2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})

let fun = () => {
    document.getElementById("loadingAnimation")
    gsap.from("loadingAnimation", {
       height: "0vh",
        duration: 14,
        ease: "none"
    })
}

window.addEventListener("load", fun)

