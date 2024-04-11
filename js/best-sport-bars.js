// #Script - Add functionality to "more-info" button

const ad = document.getElementsByClassName('ad')
const moreInfoBtn = document.getElementsByClassName('more-info')
let count = 1;
let x = window.matchMedia("(max-width: 700px)")

for (let i = 0; i < ad.length; i++) {
    moreInfoBtn[i].addEventListener('click', addStyle)

}

function addStyle() {
    if (x.matches) {
        if (count == 1) {
            this.innerHTML = '- Less info'
            this.parentElement.parentElement.style.height = '320px'
            return count = 0;
        } else {
            this.innerHTML = '+ More info'
            if (this.parentElement.parentElement.classList.contains("additional-info-filled")) {
                this.parentElement.parentElement.style.height = '170px'
            } else {
                this.parentElement.parentElement.style.height = '150px'
            }
            return count = 1;
        }
    }
    else {
        if (count == 1) {
            this.innerHTML = '- Less info'
            this.parentElement.parentElement.style.height = '260px'
            return count = 0;
        } else {
            this.innerHTML = '+ More info'
            if (this.parentElement.parentElement.classList.contains("additional-info-filled")) {
                this.parentElement.parentElement.style.height = '170px'
            } else {
                this.parentElement.parentElement.style.height = '150px'
            }
            return count = 1;
        }
    }
}
