AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Solutions Engineer & Penetration Tester",
    cardImage: "assets/images/experience-page/petronas_logo.png",
    place: "PETRONAS Digital",
    time: "(Aug, 2023 - present)",
    desp: "<li>Engineered automation solutions for processes used company-wide.</li> <li>Performed extensive penetration testing on crucial/important systems and web applications.</li> <li>Created a Python3 module for internal automation for the vulnerability assessment tool Qualys.</li><li>Curated custom API solutions as part of automation projects.</li><li>Tools: Power Automation, Logic Apps, Flask, Python, SQL, PowerBI</li>",
  },
  {
    title: "Operations Intern",
    cardImage: "assets/images/experience-page/petronas_logo.png",
    place: "PETRONAS Digital",
    time: "(Nov, 2022 - Feb, 2023)",
    desp: "<li>Performed vulnerability assessments on servers and web applications using industry-standard tools.</li><li>Developed automation systems to automate repetitive tasks.</li><li>Extensive learning and upskilling in red teaming.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "PETRONAS Inter-University CTF 2023",
    cardImage: "assets/images/experience-page/petronas_logo.png",
    description:
      "Performed hacking demonstrations using malicious USB devices to various stakeholders.",
  },
  {
    title: "iGEM 2024",
    cardImage: "assets/images/experience-page/igem-logo-light.svg",
    description:
      "Demonstrated expertise in hacking knowledge and hacking methods using malicious USB devices to various audiences.",
  },
  {
    title: "Oil And Gas Asia 2024",
    cardImage: "assets/images/experience-page/oil_and_gas_asia_logo.png",
    description:
      "Demonstrated expertise in hacking knowledge and hacking methods using malicious USB devices to various audiences.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "PETRONAS Inter-University CTF 2023",
    subtitle: "Challenge Master",
    image: "assets/images/experience-page/petronas_logo.png",
    desp: "I was one of the many employees responsible to curate CTF challenges and mentor/assist participants during the CTF.",
    href: "https://www.apu.edu.my/media/news/2975",
  },
  {
    title: "Codeforces",
    subtitle: "Participant",
    image: "assets/images/experience-page/codeforces_logo.png",
    desp: "Codeforces is a recurring coding problem solving competition designed to be solved as individuals.",
    href: "https://codeforces.com/profile/0xnarwhal",
  },
  {
    title: "AlpacaHacks",
    subtitle: "Participant",
    image: "assets/images/experience-page/alpacahacks_logo.svg",
    desp: "AlpacaHacks is a recurring CTF competition event that is designed for individual hackers instead of teams.",
    href: "https://alpacahack.com/users/0xnarwhal",
  },
  {
    title: "Dragos CTF 2023",
    subtitle: "Participant",
    image: "assets/images/experience-page/dragos_logo.png",
    desp: "Dragos CTF 2023 was a 48-hour CTF where I participated with several other penetration testers in PETRONAS Digital.",
    href: "https://www.dragos.com/event/capture-the-flag-2023",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
