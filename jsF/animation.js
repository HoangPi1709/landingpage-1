function animate1(queryClass, animate, queryId) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector(queryClass);
      
          if (entry.isIntersecting) {
            square.classList.add(animate);
            return;
          }
          square.classList.remove(animate);
        });
      });
      observer.observe(document.querySelector(queryId));
}
function animate2(queryClass, animate, queryId) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          let square = entry.target.querySelectorAll(queryClass);
      
          for(let i = 1; i <= square.length; i++){
            if (entry.isIntersecting) {
                square[i].classList.add(animate);
                return;
              }
              square[i].classList.remove(animate);
          }
          
        });
      });
      observer.observe(document.querySelector(queryId));
}


animate1('.square', 'sec2-right-animation', '#sec-img');
animate1('.para', 'sec2-left-animation', '.sec-content');

for(let i = 2; i <= 7; i++){
    animate2('.para', 'sec2-left-animation', `#sec${i}`);
}
