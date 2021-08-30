//- NAV SELECTORS -
const navContainer = document.querySelector('.container');
const nav = navContainer.querySelector('nav');
const nav1 = nav.querySelector('a:nth-of-type(1)');
const nav2 = nav1.nextElementSibling;
const nav3 = nav2.nextElementSibling;
const nav4 = nav3.nextElementSibling;
const nav5 = nav4.nextElementSibling;
const nav6 = nav5.nextElementSibling;

// - CTA SELECTORS -
const cta = document.querySelector('.cta');
const ctaText = cta.querySelector('.cta-text');
const ctaHeading = ctaText.querySelector('h1');
const ctaButton = ctaText.querySelector('button');
const ctaImg = document.querySelector('#cta-img');

// - MAIN CONTENT SELECTORS -
const mainContent = document.querySelector('.main-content');

// - TOP CONTENT SELECTORS -
const topContent = document.querySelector('.top-content');
//features
const features = topContent.querySelector('.text-content:nth-of-type(1)');
const featuresHeading = features.querySelector('h4');
const featuresContent = features.querySelector('p');
//about
const about = topContent.querySelector('.text-content:nth-of-type(2)');
const aboutHeading = about.querySelector('h4');
const aboutContent = about.querySelector('p');

// - MIDDLE SELECTORS (image) -
const middleImg = document.querySelector("#middle-img");

// - BOTTOM SELECTORS - 
const bottomContent = document.querySelector('.bottom-content');
//services
const services = bottomContent.querySelector('.text-content:nth-of-type(1)');
const servicesHeading = services.querySelector('h4');
const servicesContent = services.querySelector('p');
//product
const product = bottomContent.querySelector('.text-content:nth-of-type(2)');
const productHeading = product.querySelector('h4');
const productContent = product.querySelector('p');
//vision
const vision = bottomContent.querySelector('.text-content:nth-of-type(3)');
const visionHeading = vision.querySelector('h4');
const visionContent = vision.querySelector('p');

// - CONTACT SELECTORS -
const contact = document.querySelector('.contact');
const contactHeading = contact.querySelector('h4');
const address = contact.querySelector('p:nth-of-type(1)');
const phone = contact.querySelector('p:nth-of-type(2)');
const email = contact.querySelector('p:nth-of-type(3)');

// - FOOTER SELECTORS -
const footer = document.querySelector('footer');
const copywright = footer.querySelector('p');






const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// UPDATING THE DOM
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav6.textContent = siteContent["nav"]["nav-item-6"];

ctaHeading.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

featuresHeading.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productHeading.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

contactHeading.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

copywright.textContent = siteContent["footer"]["copyright"];

// CHANGING CONTENT IN THE DOM
nav1.style.color = 'green';
nav2.style.color = 'green';
nav3.style.color = 'green';
nav4.style.color = 'green';
nav5.style.color = 'green';
nav6.style.color = 'green';

//new links
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
nav.appendChild(blogLink);
blogLink.style.color = 'green';

const submitLink = document.createElement('a');
submitLink.textContent = 'Submit';
submitLink.href = '#';
nav.prepend(submitLink);
submitLink.style.color = 'green';

