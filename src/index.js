import myName from './myName';

function component() {
    let element = document.createElement('div');

    element.innerHTML = `These Beats be Dope ${myName('Cody')}!`;

    return element;
  }

  document.body.appendChild(component());

