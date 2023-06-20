

const btTel = document.getElementById('bt_tel');

const inputNumber = document.getElementById('input_number');
const inputPin = document.getElementById('input_pin');
const lottie_01 = document.getElementById('lottie01');
const lottie_02 = document.getElementById('lottie02');

btTel.onclick = function () {

  inputNumber.classList.add('active');
  inputPin.classList.add('active');
  lottie_02.classList.add('active');
  
}


/* MODAL */
const abre_Modal = document.getElementById("bt_pin");
const showModal = document.getElementById("modal");


abre_Modal.addEventListener("click", () => {
  lottie_01.classList.add('active');
  showModal.showModal();
});



















