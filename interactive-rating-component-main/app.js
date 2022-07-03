const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll(".form__radio-input");
const ratingCard = document.querySelector(".rating-card");
const rateagain = document.querySelector (".rateagain");
let ratingValue;

radioInputs.forEach((input) => {
    input.addEventListener ("change", (e) => {
        ratingValue = e.target.value;
    });
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if(!ratingValue) return;
    renderThankyouContent(ratingCard, ratingValue);
   });

function renderThankyouContent(container, rateValue) {
    container.innerHTML = `
    <div class = "thank-you">
    <img src="./assets/illustration-thank-you.svg" alt="thankyou"
    class="thank-you-img">
    <p class="result">You selected ${rateValue} out of 5 </p>
    <h1 class="thank-you__title">Thank you!</h1>
    <p class="thank-you__description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
       </div>
       <button class="form__button" type="rateagain" = onclick="location.reload();" >Rate Again</button>
          `;
        
}