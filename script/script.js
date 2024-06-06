const tooltips =  document.querySelectorAll(".tooltip")

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onTooltipClick);
    tooltip.addEventListener('mouseleave', onTooltipClick);

    

}) ;
function onTooltipClick (evt){
    evt.currentTarget.classList.toggle('tooltip-animated');
}




const menu = document.querySelector('.main-nav')
const menu1 = document.querySelector('.banner')
const burgerBtn = document.querySelector('.btn-discover')

burgerBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu--open')

}
   );