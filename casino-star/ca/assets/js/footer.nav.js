(function (w,d){
if (document.readyState === 'loading') {
  // document still loading...
  document.addEventListener('DOMContentLoaded', () => {
    initToggle();
  });
} else {
  // already loaded
  initToggle();
}

function initToggle() {
    try {
        let footerToggleOne = document.querySelector("#footerColOneToggle");
        let footerToggleTwo = document.querySelector("#footerColTwoToggle");
        let footerToggleThree = document.querySelector("#footerColThreeToggle");
        let footerToggleFour = document.querySelector("#footerColFourToggle");
        
        footerToggleOne.addEventListener("click",function(){toggleFooterNav('one')});
        footerToggleTwo.addEventListener("click",function(){toggleFooterNav('two')});
        footerToggleThree.addEventListener("click",function(){toggleFooterNav('three')});
        footerToggleFour.addEventListener("click",function(){toggleFooterNav('four')});
    } catch(e) {}
}

function toggleFooterNav(selectedItem)
{
    let footerBlockOne = document.querySelector("#footer-col-one-nav_menu");
    let footerBlockTwo = document.querySelector("#footer-col-two-nav_menu");
    let footerBlockThree = document.querySelector("#footer-col-three-nav_menu");
    let footerBlockFour = document.querySelector("#footer-col-four-nav_menu");
    let currentNav;
    let currentToggle;
    if (selectedItem=='one') {
        currentToggle = document.querySelector("#footerColOneToggle svg");
        currentNav = footerBlockOne;
    } else if(selectedItem=='two') {
        currentToggle =  document.querySelector("#footerColTwoToggle svg");
        currentNav = footerBlockTwo;
    } else if(selectedItem=='three') {
        currentToggle = document.querySelector("#footerColThreeToggle svg");
        currentNav = footerBlockThree;
    } else {
        currentToggle =  document.querySelector("#footerColFourToggle svg");
        currentNav = footerBlockFour;
    }
    if (currentToggle.classList.contains('tnt-chevron-up'))
    {
        currentToggle.classList.remove('tnt-chevron-up');
        currentToggle.classList.add('tnt-chevron-down');
        currentNav.classList.remove('menuShown');
        currentNav.classList.add('menuHidden');
    } else {
        currentToggle.classList.remove('tnt-chevron-down');
        currentToggle.classList.add('tnt-chevron-up');
        currentNav.classList.remove('menuHidden');
        currentNav.classList.add('menuShown');
    }
}
})(window,document)