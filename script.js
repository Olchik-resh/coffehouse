const categoryCoffeeEl = document.querySelector ('.category__coffee');
const  categoryDessertsEl = document.querySelector ('.category__desserts');
const categorySnaksEl = document.querySelector ('.category__snaks');
const coffeeEl = document.querySelector ('.coffee');
const dessertsEl = document.querySelector ('.desserts');
const snakseEl = document.querySelector ('.snaks');

categoryCoffeeEl.style.color = ' #FFFFFF';
categoryCoffeeEl.style.background = 'rgb(162, 101, 57)';

categoryCoffeeEl.addEventListener('click', () => {
    categoryDessertsEl.style.color = 'rgb(162, 101, 57)';
    categoryDessertsEl.style.background = ' #FFFFFF';
    categoryCoffeeEl.style.color = ' #FFFFFF';
    categoryCoffeeEl.style.background = 'rgb(162, 101, 57)';
    categorySnaksEl.style.color = 'rgb(162, 101, 57)';
    categorySnaksEl.style.background = ' #FFFFFF';
})

categoryDessertsEl.addEventListener('click', () => {
    categoryCoffeeEl.style.color = 'rgb(162, 101, 57)';
    categoryCoffeeEl.style.background = ' #FFFFFF';
    categoryDessertsEl.style.color = ' #FFFFFF';
    categoryDessertsEl.style.background = 'rgb(162, 101, 57)';
    categorySnaksEl.style.color = 'rgb(162, 101, 57)';
    categorySnaksEl.style.background = ' #FFFFFF';
})

categorySnaksEl.addEventListener('click', () => {
    categorySnaksEl.style.color = ' #FFFFFF';
    categorySnaksEl.style.background = 'rgb(162, 101, 57)';
    categoryCoffeeEl.style.color = 'rgb(162, 101, 57)';
    categoryCoffeeEl.style.background = ' #FFFFFF';
    categoryDessertsEl.style.color = 'rgb(162, 101, 57)';
    categoryDessertsEl.style.background = ' #FFFFFF';
})

categoryCoffeeEl.addEventListener('click', () => {
    coffeeEl.style.display = "block";
    coffeeEl.style.display = "flex";
    dessertsEl.style.display = "none";
    snakseEl.style.display = "none";
})

categoryDessertsEl.addEventListener('click', () => {
    dessertsEl.style.display = "block";
    dessertsEl.style.display = "flex";
    coffeeEl.style.display = "none";
    snakseEl.style.display = "none";
})

categorySnaksEl.addEventListener('click', () => {
    snakseEl.style.display = "block";
    snakseEl.style.display = "flex";
    dessertsEl.style.display = "none";
    coffeeEl.style.display = "none";
})


