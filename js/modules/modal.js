export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containermodal = document.querySelector("[data-modal='container']");

  if (botaoAbrir && botaoFechar && containermodal) {
    function toggleModal(event) {
      event.preventDefault();
      containermodal.classList.toggle("ativo");
    }

    function clickForamodal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containermodal.addEventListener("click", clickForamodal);
  }
}
