const careButton = document.getElementById("care");
const backButton = document.getElementById("back");
const header = document.getElementById("header");
const elementContainer = document.getElementById("elementContainer");

console.log("Loaded!");
document.body.style.overflow = "auto";
document.body.style.scrollBehavior = "initial";
window.scrollTo(0, 0);
document.body.style.scrollBehavior = "smooth";
document.body.style.overflow = "hidden";

const swiper = document.getElementById("swiper");

careButton.addEventListener("click", () => {
  // Remove hidden and shown first and add them again.
  header.classList.remove("shown");
  elementContainer.classList.remove("hidden");
  header.classList.add("hidden");
  elementContainer.classList.add("shown");
  swiper.classList.remove("swipeToLeft");
  swiper.classList.remove("swipeToRight");
  swiper.classList.add("swipeToRight");
  // Enable Overflow
  document.body.style.overflowY = "auto";

  document.getElementById("simple").style.opacity = 1;

  const flowSec = document.createElement("section");
  flowSec.id = "flow";
  flowSec.innerHTML = `
        <h1>Flow</h1>
        <div class="line"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vitae
          odit veritatis minima explicabo quis qui fuga alias obcaecati, aliquam
          ut quaerat magnam incidunt nihil! Animi doloribus eius odit quia est
          dicta ab ex tenetur perferendis suscipit assumenda, asperiores minus
          iste dolorem, numquam et aperiam minima! Fuga ipsum minima magnam
          dolores voluptatem. Sint animi beatae doloremque fugit quo possimus
          illum vitae laborum officia voluptatem labore totam ipsa sed soluta
          vel aut et, reprehenderit quibusdam obcaecati, quasi laudantium autem
          omnis voluptates natus? Aut autem, praesentium sint maiores at
          voluptate officia harum temporibus qui consequuntur fugiat asperiores
          quod ipsa, consectetur similique libero?
        </p>
    `;
  elementContainer.insertBefore(flowSec, elementContainer.children[1]);
});

backButton.addEventListener("click", () => {
  swiper.classList.remove("swipeToLeft");
  swiper.classList.remove("swipeToRight");
  swiper.classList.add("swipeToLeft");
  // Scroll to top

  document.getElementById("simple").style.opacity = 0;

  // Remove hidden and shown first and add them again.
  header.classList.remove("hidden");
  elementContainer.classList.remove("shown");
  header.classList.add("shown");
  elementContainer.classList.add("hidden");
  document.body.style.scrollBehavior = "unset";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("flow").remove();
  }, 2000);
  document.body.style.overflow = "hidden";
  document.body.style.scrollBehavior = "smooth";
});

window.addEventListener("scroll", reveal);

function reveal() {
  const simpleSec = document.getElementById("simple");
  const simpleSecH1 = simpleSec.children[0];
  const simpleSecP = simpleSec.children[1];

  const windowHeight = window.innerHeight;
  const revealTop = simpleSec.getBoundingClientRect().top;
  const revealPoint = 250;

  if (revealTop < windowHeight - revealPoint && !simpleSecH1.classList.contains('darken')) {
    simpleSecH1.classList.add("darken");
    simpleSecP.classList.add("darken");
  } 
}
