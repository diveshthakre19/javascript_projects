const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function createFaq(id) {
  let faq = document.createElement("div");
  let faqHeader = document.createElement("div");
  let question = document.createElement("h3");
  let button = document.createElement("button");
  let answer = document.createElement("p");
  answer.className = "hidden";
  button.className = "show_btn";
  button.innerHTML = "+";
  accordianBody.className = "accordian_body";
  faq.className = "faq";
  faqHeader.className = "faq_header";
  accordianBody.appendChild(faq);
  faq.appendChild(faqHeader);
  faqHeader.appendChild(question);
  question.innerHTML = faqData[id].question;
  faqHeader.appendChild(button);
  faq.appendChild(answer);
  answer.innerHTML = faqData[id].answer;
  button.addEventListener("click", showFaq);
  function showFaq() {
    answer.classList.toggle("hidden");
    if (answer.classList.contains("hidden")) {
      button.innerHTML = "+";
    } else {
      button.innerHTML = "-";
    }
  }
}
createFaq(0);
createFaq(1);
createFaq(2);

function showFaq() {
  answer.classList.toggle("hidden");
}

function btnStatusUpdate() {}
