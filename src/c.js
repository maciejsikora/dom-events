console.log('I am c.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  //c1();
  c2();
  c5();
});
// C.1 - obsluz klikniecie w przycisk Delete - usun element z listy
const c1 = () => {
  const ul = document.querySelector('ul');
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      // mamy element a
      ul.removeChild(e.target.parentElement);
    }
  })
}
// C.2 - obsluz przycisk reset - ma wstawic ponownie wszystkie elementy jak bylo na poczatku
const c2 = () => {
  const ul = document.querySelector('ul');
  const initialVersion = ul.innerHTML;

  ul.nextElementSibling.addEventListener('click', (e) => {
    ul.innerHTML = initialVersion;
  });
}
// C.3 - wykonaj zadanie C.1 ale naloz event handler na li
// C.4 - wykonaj zadanie z C.3 ale naloz handler na body
// C.5 - przed usunieciem pokaz okienko dialogowe z id modal, zeby je pokazac ustaw je jako widoczne
// czyli uzyj style.display = 'block', zeby schowac style.display = 'none'
const c5 = () => {
  const ul = document.querySelector('ul');
  const modal = document.querySelector('#modal');
  let currentSportElement;
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      // mamy element a
      modal.style.display = 'block';
      currentSportElement = e.target.parentElement;
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-decision')) {
      const decision = e.target.dataset.decision;
      if (decision === 'yes') {
        currentSportElement.classList.add('fade-out');
        setTimeout(() => {
          ul.removeChild(currentSportElement);
        }, 1000);
      }
      // chowanie przycisku
      modal.style.display = 'none';
    }
  });

}
// dodaj w okienku 2 przyciski jeden z Yes - po ktorym element jest usuniety a okienko schowane
// i No - po ktorym tylko okienko sie chowa
// C.6 - po kliknieciu Delete naloz klase .fade-out na element li oraz usun element z opoznieniem 1 sekundy
// uzyj setTimeout