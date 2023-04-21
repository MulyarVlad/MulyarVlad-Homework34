const categoryBtn = document.querySelector('.category-btn');

const categoryList = document.querySelector('.category-list');
const categoryItems = document.querySelectorAll('.category-item');
const categoryInfo = document.querySelectorAll('.category-info');

// Toggle category list visibility
categoryBtn.addEventListener('click', () => {
  categoryList.classList.toggle('show');
  categoryInfo.forEach(info => info.classList.remove('show'));
});

// Display category info when item is clicked
categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    const category = item.dataset.category;

    categoryInfo.forEach(info => info.classList.remove('show'));
    document.querySelector(`#${category}-info`).classList.add('show');
    categoryList.classList.remove('show');
  });
});

const buyBtns = document.querySelectorAll(".buy-btn");

const form = document.querySelector(".form");
form.onsubmit = (event) => {
  event.preventDefault();
  formValidate();
}

const formValidate = () => {

  const firstNameValue = document.querySelector(".first-name");
  const secondNameValue = document.querySelector(".second-name");
  const warehouseValue = document.querySelector(".warehouse");
  const commentValue = document.querySelector(".comment");
  const amountValue = document.querySelector(".amount");
  const cityValue = document.querySelector(".city");
  const paymentValue = document.querySelector(".payment-way:checked");

  const vlad = firstNameValue.value;

    const firstNameReg = /^[a-z0-9_-]{3,15}$/;
    const isValidFirstName = firstNameReg.test(vlad);

    const mul = secondNameValue.value;

    const secondNameReg = /^[a-z0-9_-]{3,15}$/;
    const isValidSecondName = secondNameReg.test(mul);

  const town = cityValue.value;

  const depot = warehouseValue.value;

    const warehouseValueReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const isValidWarehouseValue = warehouseValueReg.test(depot);

  const paymentMethod = paymentValue.value;

  const com = commentValue.value;

    const commentValueReg = /^[a-z0-9_-]{3,15}$/;
    const isValidComment = commentValueReg.test(com);

  const sum = amountValue.value;

    const amountReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const isValidAmount = amountReg.test(sum);


  console.log(vlad);
  console.log(mul);
  console.log(town);
  console.log(paymentMethod);
  console.log(depot);
  console.log(sum);
  console.log(com);

  // Создать объект со свойт к-ые соответс 
}

buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popup = document.querySelector(".popup");
    popup.style.cssText += "display: block";
  });
});



// document.querySelector("button").onclick = () => {
//     console.log(document.querySelector("#one").value);
// }

