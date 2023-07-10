export default function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  const ativoClass = "ativo";

  function AcctiveAccordion() {
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(ativoClass);
    accordionList.forEach((item) => {
      item.addEventListener("click", AcctiveAccordion);
    });
  }
}
