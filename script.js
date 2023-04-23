//dom gets elements and declares it to a global var
let darkToggle = document.querySelector('.darkmode');
let backcolor = document.querySelector('html');
let divcolor = document.querySelector('#bio');
let sectionbotton = document.querySelector('#row-three');
let imgTextColor = document.querySelector('.socials');

//Function that puts browser in darkmode
function darkMode() {
    if(darkToggle.innerHTML === 'Dark Mode') {
        backcolor.style.backgroundColor = 'black';
        divcolor.style.backgroundColor = 'darkgrey';
        sectionbotton.style.backgroundColor = 'darkgrey';
        imgTextColor.style.color = 'white';        
        darkToggle.innerHTML = 'Light Mode';
    } else if(darkToggle.innerHTML === 'Light Mode') {
        
        backcolor.style.backgroundColor = 'lightyellow';
        divcolor.style.backgroundColor = 'lightskyblue';
        sectionbotton.style.backgroundColor = 'lightskyblue';
        imgTextColor.style.color = 'black';
        
        darkToggle.innerHTML = 'Dark Mode';
        
    }
}

//Event Listeners
darkToggle.addEventListener('click', darkMode, false);
