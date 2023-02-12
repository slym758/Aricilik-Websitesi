const carousel = document.querySelector(".carousel");
firsImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrappers i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let firsImgWıdth = firsImg.clientWidth + 14;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "left" ? -firsImgWıdth : firsImgWıdth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
// ----------------------------------------------------------------------------------------------

const accounts = [
  {
    owner: "btn--open-modal btn-1",
    img: 1,
  },

  {
    owner: "btn--open-modal btn-2",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-3",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-4",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-5",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-6",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-7",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-8",
    img: 2,
  },
  {
    owner: "btn--open-modal btn-8",
    img: 2,
  },
];

const modal = document.querySelector(".ürün_detay");
const modal2 = document.querySelector(".ürün_kapsam");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--open-modal");
const btn1 = document.querySelector(".btn-1");
const overlay = document.querySelector(".overlay");
const card = document.querySelectorAll(".product-card");

// const uzantı = btn1.className;
// console.log(uzantı);
// console.log(btnsOpenModal);
let currentAccount;

const renderDiv = function () {
  modal.innerHTML = " ";

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      const id = card[i].lastChild.previousSibling.className;

      currentAccount = accounts.map((acc) => acc);

      const html = `
      <div class="ürün_kapsam ">
        <button class="btn--close-modal">&times;</button>
        <div class="col-lg-6">
          <img src="img/${currentAccount[i].img}.png" alt=""> 
        </div>
        <div class="col-lg-6 ürün_detay_özellik ">
          <h3>Arıcı Eldiveni</h3>
          <div class="row detay_özellik">
            <div class="col-lg-6">
              <p>-Detay ürün özellikleri</p>
              <p>-Detay ürün özellikleri</p>
              <p>-Detay ürün özellikleri</p>
            </div>
            <div class="col-lg-6">
              <p>-Detay ürün özellikleri</p>
              <p>-Detay ürün özellikleri</p>
              <p>-Detay ürün özellikleri</p>
            </div>
          </div>     
          <button class="add_to_cart_ürün">İletişim</button>
        </div>  
        </div>
  `;
      modal.insertAdjacentHTML("beforeend", html);

      overlay.classList.remove("hidden");
      modal.classList.remove("hidden");

      overlay.addEventListener("click", function () {
        modal.innerHTML = " ";
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      });
    });
  }
};

renderDiv();
// ------------------------------------------------------------------------------------------------

let thisPage = 1;
let limit = 6;

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;

  card.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();

function listPage() {
  let count = Math.ceil(card.length / limit);
  document.querySelector(".listPage").innerHTML = "";

  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "GERİ";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }

  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "İleri";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".listPage").appendChild(next);
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}
