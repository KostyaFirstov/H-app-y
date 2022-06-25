const scrollImations = (entries, observer) => {
  entries.forEach((entry) => {
    // анимируем, если элемент целиком попадает в отслеживаемую область
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}

// создаём обсервер с параметрами
const options = {
  threshold: 0
};
const observer = new IntersectionObserver(scrollImations);

const boxes = document.querySelectorAll('.anim');
boxes.forEach((box) => {
  observer.observe(box);
});








var btnContainer = document.getElementById("change__mode");

var btns = btnContainer.getElementsByClassName("filterbtn");

const dm = document.querySelectorAll('.dm')

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("use");
    current[0].className = current[0].className.replace(" use", "");
    this.className += " use";
  });
}


function app(){
    const filterButtons = document.querySelectorAll('.filterbtn')
    const cards = document.querySelectorAll('.mode__item')
    const mode = document.querySelector('.mode')
    const changeMode = document.querySelector('.change__mode')
  
    function filter(category, items){
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all'
        if(isItemFiltered && !isShowAll){
          item.classList.add('hide')
          mode.classList.add('active')
          changeMode.classList.add('active')
        } else {
          item.classList.remove('hide')
          mode.classList.remove('active')
          changeMode.classList.remove('active')
        }
      })
    }
  
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const curentCategory = button.dataset.filter
        filter(curentCategory, cards)
      })
    })
  }
  
  
  app()



  


















