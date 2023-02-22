const date = new Date();
const year = date.getFullYear();

const copyright = document.querySelectorAll('.copyright');

for (let i = 0; i < copyright.length; i++) {
    copyright[i].innerHTML = `<p>Copyright © ${year} Invoriem</p>`;
}