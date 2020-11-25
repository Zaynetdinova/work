import Siema from 'siema';

export  class Slider {

  constructor() {
    this.root = document.querySelectorAll('.slider-root') || null;
    this.mySiema = {};

    if (this.root !== null && this.root.length > 0) {
      this.root.forEach((item, index) => {
        this.mySiema[index] = new Siema({
          selector: item.querySelector('.popular-brand-js'),
          onChange: printSlideIndex,
        });


        Siema.prototype.addPagination = function () {
          for (let i = 0; i < this.innerElements.length; i++) {
            let btn = document.createElement('span');
            let ind= document.querySelector(`.Slider-dots${index+1}`);
            btn.className = `Slider-dots-item`;
            ind.appendChild(btn);
          }

          let btnActive = item.querySelectorAll(`.Slider-dots-item`)[0];
          btnActive.classList.add(`NewsSlider-dotsItem_active`);

        };


        this.mySiema[index].addPagination();

        function printSlideIndex () {
          let indArray = item.querySelectorAll(`.Slider-dots-item`);
          for (let j = 0; j < indArray.length;  j++) {
            if ( j === Math.ceil(this.currentSlide)) {
              indArray[j].classList.add('NewsSlider-dotsItem_active');
            } else {
              indArray[j].classList.remove('NewsSlider-dotsItem_active');
            }
          }

        }

      });


    }
  }
}

export  class CategoriesSlider {

  constructor() {
    this.root = document.querySelectorAll('.slider-root-categories') || null;
    this.mySiema = {};

    if (this.root !== null && this.root.length > 0) {
      this.root.forEach((item, index) => {
        this.mySiema[index] = new Siema({
          selector: item.querySelector('.popular-brand-js'),
          // onChange: printSlideIndex,
          perPage: {
            320: 1.25,
            374: 1.4,
            480: 1.6,
            560: 2.25,
            760: 3.2,
            960: 4.1,
            1025: 1
          },
        });


        // Siema.prototype.addPagination = function () {
        //   for (let i = 0; i < this.innerElements.length; i++) {
        //     let btn = document.createElement('span');
        //     let ind= document.querySelector(`.Slider-dots${index+1}`);
        //     console.log(ind)
        //     btn.className = `Slider-dots-item`;
        //     ind.appendChild(btn);
        //   }
        //
        //   let btnActive = item.querySelectorAll(`.Slider-dots-item`)[0];
        //   btnActive.classList.add(`NewsSlider-dotsItem_active`);
        //
        // };
        //
        // console.log(this.mySiema)
        //
        // this.mySiema[index].addPagination();
        //
        // function printSlideIndex () {
        //   let indArray = item.querySelectorAll(`.Slider-dots-item`);
        //   for (let j = 0; j < indArray.length;  j++) {
        //     if ( j === Math.ceil(this.currentSlide)) {
        //       indArray[j].classList.add('NewsSlider-dotsItem_active');
        //     } else {
        //       indArray[j].classList.remove('NewsSlider-dotsItem_active');
        //     }
        //   }
        //
        // }

      });


    }
  }
}


