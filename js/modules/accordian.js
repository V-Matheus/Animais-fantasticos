export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.ativoClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.ativoClass);
    item.nextElementSibling.classList.toggle(this.ativoClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // Iniciar Função

  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
