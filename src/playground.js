console.log('I am playground.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");

  //doItInSecond();
  //changeBgAfter10seconds();
  //addDivInInterval();
  //setClickOnButtonInOrange();
  //setClickOnButtonInOrangeBubbling();
  //setClickOnButtonInOrangeBubblingBody();
  // changeColorAfterButtonClick();
  // orangeDivListener();
  // mouseHandlers();
  // scrollEvent();
  // formChangeEvents();
  textarea();
});

// FUNCKJE DOTYCZACE CZASU
const doItInSecond = () => {
  setTimeout(() => {
    console.log('After second');
  }, 1000);
  console.log('I am called before');
};

// zmienia kolor div#orange
const changeBgAfter10seconds = () => {
  setTimeout(() => {
    document.querySelector('#orange-div').style.backgroundColor = 'red';
  }, 10000);
};

// Dodaje divy w interwale co 1 sekund
const addDivInInterval = () => {
  const orange = document.querySelector('#orange-div');
  const interval = setInterval(() => {
    const div = document.createElement('div');
    div.classList.add('bordered');
    div.classList.add('with-padding');
    div.innerText = 'New Div!'
    orange.appendChild(div);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
}

// FUNKCJE PRZYKLADY PROPAGACJI EVENTOW
const setClickOnButtonInOrange = () => {
  const button = document.querySelector('#orange-div button');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
  });
}

// HANDLER NA KLIKNIECIE DIV lapie rowniez klkniecia w pod elementy dzieki propagacji
const setClickOnButtonInOrangeBubbling = () => {
  const button = document.querySelector('#orange-div');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
  });
}

// event lapany na body rowniez jest propagowany z kazdego elementu w body
const setClickOnButtonInOrangeBubblingBody = () => {
  const button = document.querySelector('body');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
  });
}

const changeColorAfterButtonClick = () => {
  const button = document.querySelector('#orange-div button');
  button.addEventListener('click', (event) => {
    event.currentTarget.parentElement.style.backgroundColor = 'blue';
    event.stopImmediatePropagation();
  });

  button.addEventListener('click', (event) => {
    event.currentTarget.parentElement.style.backgroundColor = 'black';
  });
}

const orangeDivListener = () => {
  const orange = document.querySelector('#orange-div');
  orange.addEventListener('click', (event) => {
    event.currentTarget.style.backgroundColor = 'orange';
    // event.stopPropagation();
  })
}

// ZABLOKOWANIE PRAWEGO PRZYCISKU - CONTEXTMENU
const blockContextMenu = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
}

// ONMOUSEOVER

const mouseHandlers = () => {
  const orange = document.querySelector('#orange-div');
  // orange.addEventListener('mouseover',(e) => {
  //   e.currentTarget.innerHTML += '<b>called every time</b>';
  // });

  orange.addEventListener('mouseenter',(e) => {
    if (e.currentTarget === e.target) {
      e.currentTarget.querySelector('#message').innerText = ' I am on the div';
    }
  });

  orange.addEventListener('mousemove', (e) => {
    e.currentTarget.querySelector('#xy')
    .innerText = e.clientX + ',' +e.clientY;
  });

  orange.addEventListener('mouseleave', (e) => {
    e.currentTarget.querySelector('#message').innerText = ' I am out of the div';
  });
}

// SCROLL
const scrollEvent = () => {
  window.addEventListener('scroll', (e) => {
    console.log('scroll');
  });

  window.addEventListener('scroll', (e) => {
    const div = document.createElement('div');
    div.className = 'with-padding red bordered';
    document.querySelector('body').appendChild(div);
  });
}

// CHANGE
const formChangeEvents = () => {
  const nameInput = document.querySelector('#user-form input[name="name"]');
  const div = document.querySelector('#show-form-data');
  nameInput.addEventListener('change', (e) => {
    div.innerText = e.currentTarget.value;
  });

  const select = document.querySelector('#car-form select');
  select.addEventListener('change', (e) => {
    div.innerText = e.currentTarget.value;
  });
}

const textarea = () => {
  const ta = document.querySelector('textarea');
  const chat = ta.nextElementSibling;
  const userNameInput = document.querySelector('input[name="username"]');
  const user2NameInput = document.querySelector('input[name="username2"]');
  const radio = document.querySelector('input[name="username-check"]');
  ta.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

      const message = document.createElement('p');
      console.log(radio.value);
      const userName = radio.value === '1' ? userNameInput.value : user2NameInput.value;

      message.innerHTML = '<b>' + userName + '</b>: ' + ta.value.trim();
      message.className = 'message rightSide';
      chat.appendChild(message);
      chat.scrollTo(0, Number.MAX_SAFE_INTEGER);
      ta.value = ''; //clear value
      e.preventDefault();
    }
  });
}
