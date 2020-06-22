// array to add the required text 
const array = [
  {
    image: "./projectImages/history.jpg",
    alt: "the picture of a world map",
    title: "History",
    description:
      "we are a team of travel enthusiast and ice cream lovers and are committed to help other fellow travellers to taste the best version of their favourite icecreams existing, while making memories with their loved ones.",
  },
  {
    image: "./projectImages/vision.jpg",
    alt: "The picture travel world written on paper",
    title: "Vision",
    description:
      "If you are wandering about your next travel and are finding hard time to choose your next destination, we can help you with that. We recommend places to you based on: <br> 1. your favourite icecream flavour <br> 2. where you prefer to eat or buy your icecream <br> 3. how you want the icecream served to you.",
  },
  {
    image: "./projectImages/goals.jpg",
    alt: "The picture of different ice cream flavours on License plates",
    title: "Goals",
    description:
      "By knowing your preferences we will recommend you a destination that will satisfy all your cravings for icecream along with making cool memories. You are just a click away to experience the most flavoured trip of your entire life.",
  },
];

//initially setting the element on upload
window.addEventListener("DOMContentLoaded",function(){
    dynamicText(0);
});

// selecting the required buttons and adding the element dynamically
const BtnArray = document.querySelectorAll("button");
const imageSource = document.querySelector(".image img");
const title = document.querySelector(".section-box-title");
const description = document.querySelector(".section-box-description");
BtnArray.forEach(function (btn) {
  btn.addEventListener("click", function (e){
    const btnDataId = e.target.dataset.id;
    highlight(BtnArray, e.target); // to highlight the selected pannel
    (btnDataId === "history")?dynamicText(0):(btnDataId === "vision")?dynamicText(1):dynamicText(2);
  });
});

// to dynamically add the element 
function dynamicText(input) {
  imageSource.setAttribute("src", array[input].image);
  imageSource.setAttribute("alt", array[input].alt);
  title.innerHTML = array[input].title;
  description.innerHTML = array[input].description;
}

//to highlight the selected element
function highlight(input, target){
  input.forEach(function(item){
    item.classList.remove("button-selected"); //resetting everything
  })
  target.classList.add("button-selected"); // adding the hightlight class to the button
}