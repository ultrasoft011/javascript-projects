// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Select items:
const imgPerson = document.getElementById("person-img");
const namePerson = document.getElementById("author");
const jobPerson = document.getElementById("job");
const infoPerson = document.getElementById("info");

// Select buttons:
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

// First content loaded:
// Load by default variable:
let currentPerson = 3;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentPerson);
});

function showPerson(id) {
  const item = reviews[id];
  imgPerson.src = item.img;
  namePerson.textContent = item.name;
  jobPerson.textContent = item.job;
  infoPerson.textContent = item.text;
}

prevButton.addEventListener("click", function () {
  currentPerson -= 1;
  if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
    showPerson(currentPerson);
  }
  console.log(`The lenght is: ${reviews.length - 1}`);
  showPerson(currentPerson);
});

nextButton.addEventListener("click", function () {
  currentPerson += 1;
  if (currentPerson > (reviews.length) - 1) {
    currentPerson = 0;
    showPerson(currentPerson);
  }
  showPerson(currentPerson);
});

const myArray = reviews.map((element) => {
  console.log(element.img);
});
