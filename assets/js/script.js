// ***********preloder F**********
let loding_img = document.getElementById('loding_img');
function loding(){
    loding_img.style.display = 'none';
}

// **********navigation toggle btn F************
let toggle_btn = document.getElementById('toggle_btn');
let nav = document.querySelector('.nav');
let show = true;
toggle_btn.addEventListener('click', () => {
   if(show){
    nav.style.display = 'none';
    show = false;
   }else {
     nav.style.display = 'block';
     show = true;
   }
})

// *****************all section slide F*************
let body = document.querySelectorAll('#body .section');
let tab_Btn = document.getElementById('tab_Btn');
let test = document.getElementById('test');
// **********Book_now Card F************
let book_Now_All_Card = document.querySelectorAll('#all_Card .book-now-card');
let card_One = document.querySelector('.card_One');
let book_Now_Menu = document.querySelectorAll('.book-now-menu ul li');
let booking_Img = document.getElementById('booking_Img');
let card_close_btn = document.getElementById('card_close_btn');
let booking_Card = document.getElementById('booking_Card');
let open_booking_card_btn= document.getElementById('book_Now');
let submit_booking = document.getElementById('submit_booking');
let nav_Menu = document.querySelectorAll('#menu li');
// **********input card selector**********
// **********book_Now_city_selector*******/
let city_Card_form = document.getElementById('city_Card_form');
let city_card = document.querySelectorAll('#city_card input');
let city_Submit_Btn = document.getElementById('city_Submit_Btn');
let cityData = [];
// **********book_Now_hotle_selector*******/
let hotle_card_form = document.querySelector('#hottle_card_form');
let hotle_card_form_input = document.querySelectorAll('#hottle_card_form input');
let hotle_Reviw = document.querySelectorAll('#card_Three_R span i');
let hotle_submit_Data_Btn = document.getElementById('hotle_submit_Data_Btn');
// **********book__selector*******/
let visitor = document.getElementById('visitor_Name');
let city = document.getElementById('visit_city');
let hotleName = document.getElementById('hotle_name');
let visit_Id = document.getElementById('visit_Id');
let stay_Time = document.getElementById('stay_Time');
let hotleDuration = document.getElementById('hotle_Duration');
let hotleAmount = document.getElementById('hotle_Amount');
let submit_btn = document.getElementById('submit_booking');
