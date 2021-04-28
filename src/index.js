import './css/style.scss';
import img1 from  './img/photo1.jpg';
import img2 from './img/photo2.jpg';
import img3 from './img/photo3.jpg';
import img4 from './img/photo4.jpg';

const imgs = [ img1,img2,img3,img4];
console.log(imgs);
let cont = 0;

const photos = document.querySelectorAll('.photo__image');

console.log(photos);

photos.forEach(( photo) => {
    console.log(photo);
     photo.src = `${imgs[cont]}`;
     cont++;
})

console.log('webpack is running!!!');


if(module.hot){
   module.hot.accept();
}