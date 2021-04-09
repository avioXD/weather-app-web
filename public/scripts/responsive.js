let burger_btn = document.querySelector('#burger-btn');
let close_btn = document.querySelector('#close-btn');
const sidebar = document.querySelector(".sidebar");
let clicked = false;
//console.log(burger_btn, close_btn, sidebar);
burger_btn.addEventListener('click', () => {
    sidebar.style.display = 'block';
    sidebar.style.width = '60%';
    clicked = true;
});
close_btn.addEventListener('click', () => {
    sidebar.style.width = "0%";
    clicked = false;
});

onresize = () => {

    if (window.innerWidth > 816) {
        sidebar.style.width = "0%";
        sidebar.style.display = 'none';
    }
}