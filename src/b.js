console.log('I am b.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  // b3();
  b1();
});
// B.1 - Za każdym kliknięciem na dowolny przycisk dopisz do diva clicked-info data-id kliknietego przycisku.

const b1 = () => {
  const body = document.querySelector('body');
  const info = document.querySelector('#clicked-info');
  body.addEventListener('click', (e) => {
    if (!e.target.hasAttribute('data-id')) {
      return;
    }
    info.innerText = info.innerText + e.target.dataset.id;
  });
}


// B.2 - Zapisuj ile razy uzytkownik klika w dany przycisk i pokaz taka infomacje w formacie A: 3, B: 2, C: 0, gdzie
// format odpowiada {data-id przycisku}: {ilosc klikniec}
// B.3 - dodaj na stronie wiecej przyciskow. Po kliknieciu w przycisk o danym data-id wszystkie przyciski z tym data-id
// maja zniknac ze strony

const b3 = () => {
  const body = document.querySelector('body');
  body.addEventListener('click', (e) => {
    if (!e.target.hasAttribute('data-id')) {
      return;
    }
    const dataId = e.target.dataset.id;
    const buttons = document.querySelectorAll('button[data-id="'+dataId+'"]');

    buttons.forEach((button) => {
      body.removeChild(button);
    });
  })
}

// B.4 - po kliknieciu w przycisk o id = add dodac nowy div z tekstem wpisanym w input
// B.5 - rozszerzenie B.4 - czysicic inputa po kazdym przycisnieciu przycisku
// B.6 - po kliknieciu w dowolny przycisk A, B, C ma pojawic sie nowy przycisk i ma rowniez obslugiwac kliniecia
// np. klikamy w przycisk C - pojawia sie nowy przycisk C, po kliknieciu w niego znowu pojawia sie przycisk C