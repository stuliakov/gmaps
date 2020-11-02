let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4494339, lng: 30.4590408},
        zoom: 8
    });
}

document.onload = () => {
    initMap()
}


const buttons = document.querySelectorAll('.cont__button')
showMenu(buttons[0])
buttons.forEach(button => {

    button.onclick = () => {
        if (button.nextElementSibling.classList.contains('show')) {
            hideMenu(button)
        } else {
            buttons.forEach(button => hideMenu(button))
            showMenu(button);
        }
    }

    button.nextElementSibling.onblur = () => {
        buttons.forEach(button => hideMenu(button))

    }
})

function showMenu(button) {
    const arrow = button.lastElementChild;
    arrow.style.transform = 'rotate(90deg)';
    button.nextElementSibling.classList.remove('collapsed');
    button.nextElementSibling.classList.add('show')
    button.nextElementSibling.focus()
}

function hideMenu(button) {
    const arrow = button.lastElementChild;
    arrow.style.transform = 'rotate(0deg)'
    button.nextElementSibling.classList.remove('show');
    button.nextElementSibling.classList.add('collapsed')
}