// favorite icon
const heartIcons = document.querySelectorAll('.heart');

for(let i=0; i<heartIcons.length; i++){
    heartIcons[i].addEventListener('click', () => {
        heartIcons[i].classList.toggle('fa-regular');
        heartIcons[i].classList.toggle('fa-solid');
        heartIcons[i].classList.toggle('filled');
    })
}

// input focus
const inputSearch = document.querySelector('#search');
const divSearch = document.querySelector('.search')

inputSearch.addEventListener('focus',()=>{
    divSearch.classList.toggle('outlined');
})

inputSearch.addEventListener('blur',()=>{
    divSearch.classList.toggle('outlined');
})
