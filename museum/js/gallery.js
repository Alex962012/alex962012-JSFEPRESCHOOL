
const adress=[
    '<img class="img_gallery_inner_container" src="assets/galery/galery1.jpg" alt="galery1">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery2.jpg" alt="galery2">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery3.jpg" alt="galery3">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery4.jpg" alt="galery4">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery5.jpg" alt="galery5">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery6.jpg" alt="galery6">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery7.jpg" alt="galery7">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery8.jpg" alt="galery8">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery9.jpg" alt="galery9">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery10.jpg" alt="galery10">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery11.jpg" alt="galery11">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery12.jpg" alt="galery12">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery13.jpg" alt="galery13">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery14.jpg" alt="galery14">',
    '<img class="img_gallery_inner_container" src="assets/galery/galery15.jpg" alt="galery15">'
]



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(adress)

  const pictureInnerContainer = document.querySelector('.picture_gallery_3colomns');

let adressI;
const img1 = adress[0];
const img2 = adress[1];
const img3 = adress[2];
const img4 = adress[3];
const img5 = adress[4];
const img6 = adress;
const img7 = `<img class="img_gallery_inner_container" src="assets/galery/galery7.jpg" alt="galery2">`;
const img8 = `<img class="img_gallery_inner_container" src="assets/galery/galery8.jpg" alt="galery2">`;
const img9 = `<img class="img_gallery_inner_container" src="assets/galery/galery9.jpg" alt="galery2">`;
const img10 = `<img class="img_gallery_inner_container" src="assets/galery/galery10.jpg" alt="galery2">`;
const img11 = `<img class="img_gallery_inner_container" src="assets/galery/galery11.jpg" alt="galery2">`;
const img12 = `<img class="img_gallery_inner_container" src="assets/galery/galery12.jpg" alt="galery2">`;
const img13 = `<img class="img_gallery_inner_container" src="assets/galery/galery13.jpg" alt="galery2">`;
const img14 = `<img class="img_gallery_inner_container" src="assets/galery/galery14.jpg" alt="galery2">`;
const img15 = `<img class="img_gallery_inner_container"  src="assets/galery/galery15.jpg" alt="galery2">`;




// console.log(img)
pictureInnerContainer.innerHTML =adress[0]+adress[1]+adress[2]+adress[3]+adress[4]+adress[5]+adress[6]+adress[7]+adress[8]+adress[9]+adress[10]+adress[11]+adress[12]+adress[13]+adress[14];
// let img=adress.map(shuffle(adress))
// console.log(img)
// img.classList.add('img_gallery_inner_container')
// img.src = adress[1];
// img.alt = `galery1`;
// pictureInnerContainer.append(img);
