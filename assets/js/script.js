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

// *****************all selection slide F*************
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
// **********open_booking_Card_btn F*******/
let open_booking_card_btn_F = () => {
  booking_Card.classList.toggle('card-hidden');
  booking_Card.style.visibility ='visible';
}
// **********open_booking_Card_btn E*******/
open_booking_card_btn.addEventListener('click', open_booking_card_btn_F);
// **********close_booking_card_btn F*******/
let close_booking_card_F = () => {
  booking_Card.style.visibility ='hidden';
}
// **********close_book_card_btn E*******/
card_close_btn.addEventListener('click', close_booking_card_F);

// **********book_Now_Card_Active_F**********F*********
let book_Now_Card_Active_F = (index) => {
  document.querySelector('.active')?.classList.remove('active');
  nav_Menu[index].classList.add('active');
}
// **********book_Now_Menu_F ***F****/
let book_Now_Menu_Card_F = (index) => {
  if(index == 0){
      book_Now_Card_Active_F(index);
      booking_Img.src='./assets/images/book_c.jpg';
      book_Now_All_Card[index].style.display="block";
      book_Now_All_Card[1].style.display="none";
      book_Now_All_Card[2].style.display="none";
  }
  if(index == 1){
      book_Now_Card_Active_F(index);
      booking_Img.src='./assets/images/book_h.jpg';
      book_Now_All_Card[index].style.display="block";
      book_Now_All_Card[0].style.display="none";
      book_Now_All_Card[2].style.display="none";
  }
  if(index == 2){
      book_Now_Card_Active_F(index);
      booking_Img.src='./assets/images/book_s.jpg';
      book_Now_All_Card[index].style.display="block";
      book_Now_All_Card[0].style.display="none";
      book_Now_All_Card[1].style.display="none";
  }
  if(index == 3){
      book_Now_Card_Active_F(index);
      booking_Img.src='./assets/images/book-now-c.jpg';
      book_Now_All_Card[index].style.display="block";
      book_Now_All_Card[0].style.display="none";
      book_Now_All_Card[1].style.display="none";    
      book_Now_All_Card[2].style.display="none";
  }
}
// ********book now card ul li [Acive]*********
book_Now_Menu.forEach((value, index) => {
  value.addEventListener('click', () => {
      book_Now_Menu_Card_F(index);
  })
})
// ***************booking_Card[3]_Active C & P***********
let booking_Card_Active = () => {
  submit_btn.addEventListener('click', () => {
      let index = 3;
      book_Now_Menu_Card_F(index);
  })
}
booking_Card_Active();
// *********validation_city Data Validation *****F****
let validation_Data = (visitor_Name, visiteId, cityName, stayTime) => {
  if(visitor_Name == '' || visiteId == '' || cityName =='' || stayTime == ''){
      alert('Empty Data !!!');
  }
  else {
      if(!visitor_Name.match(/\d+/) && !visitor_Name.match(/[0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g)){
          visitor.innerHTML= visitor_Name;
         if(!visiteId.match(/[!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
            visit_Id.innerHTML= visiteId;
            if(!cityName.match(/[0-9!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
              city.innerHTML= cityName;
              if(!stayTime.match(/[a-zA-Z\!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
                  stay_Time.innerHTML= stayTime;
                  // ***card_One**open
                  let index = 1;
                  book_Now_Menu_Card_F(index);
                  city_card.forEach((input) => {
                      input.value = '';
                  })
              }
              else{ 
                  alert('Not Valid Data');
              } 
            }
         }
      }       
  }
}
// ********hottle Reating Validation*********F***
let h_Amount = document.getElementById('h_Amount');
let hottle_Reating_Validation = (hotle_Amount) => {
    if(hotle_Amount >= 50){
       for(let i = 0; i <= 0;){
        // class[classlist[abc]] not work 
        hotle_Reviw[i].style.color = 'yellow';
        h_Amount.placeholder='One Star Hotle';
        i++;
       }
    }else{
        alert('Not Fount Hotle');
    }
    if(hotle_Amount >= 100){
        for(let i = 0; i <= 1;){
            hotle_Reviw[i].style.color = 'yellow';
            h_Amount.placeholder='Two Star Hotle';
            i++;
        }
    }
    if(hotle_Amount >= 150){
       for(let i = 0; i <= 2;){
        hotle_Reviw[i].style.color = 'yellow';
           h_Amount.placeholder='Three Star Hotle';
           i++;
       }
    }
    if(hotle_Amount >= 200){
        for(let i = 0; i <= 3;){
            hotle_Reviw[i].style.color = 'yellow';
            h_Amount.placeholder='Four Star Hotle';
            i++;
        }
    }
    if(hotle_Amount >= 250){
        for(let i = 0; i <= 4;){
            hotle_Reviw[i].style.color = 'yellow';
            h_Amount.placeholder='Five Star Hotle';
            i++;
        }
    }
}
// *********hotle Data Validation ****F*****
let validation_Hotle_Data = (hotle_Name, hotle_Duration, hotle_Amount) => {
  if(hotle_Name == '' || hotle_Duration == '' || hotle_Amount ==''){
      alert('Empty Hotle Data !!!');
  }
  else {
      if(!hotle_Name.match(/\d+/) && !hotle_Name.match(/[0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g)){
          hotleName.innerHTML = hotle_Name;
          if(!hotle_Duration.match(/[a-zA-z!@#\$%\^\&*\)\(+=._-]{1,}$/g)){
              hotleDuration.innerHTML = hotle_Duration;
              if(!hotle_Amount.match(/[a-zA-Z!@#\$%\^\&*\)\(+=._-]{6,}$/g)){
                  hottle_Reating_Validation(hotle_Amount);
                  hotleAmount.innerHTML = hotle_Amount;
                  // ***card_One**open
                  let index = 2;
                  book_Now_Menu_Card_F(index);
              }
              else{ 
                  alert('$ demo Number place');
              } 
           }
        }
      }
}
// *********collect city Data ****Eent*****
city_Submit_Btn.addEventListener('click', (e) => {
  e.preventDefault();
  let visitor_Name = city_Card_form.name.value;
  let visiteId = city_Card_form.visiteId.value;
  let cityName = city_Card_form.cityName.value;
  let stayTime = city_Card_form.stayTime.value;
  // *****send this data in validation_Data()******
  validation_Data(visitor_Name, visiteId, cityName, stayTime);
  // all input value clear fild
  city_card.forEach((input) => {
      input.value = '';
  })    
})

// *********hotle All card ****Event*****
hotle_submit_Data_Btn.addEventListener('click', (e) => {
  e.preventDefault();
  let hotle_Name = hotle_card_form.hotleName.value;
  let hotle_Duration = hotle_card_form.hotleDuration.value;
  let hotle_Amount = hotle_card_form.hotleAmount.value;
  // *****send this data in validation_Data()******
  validation_Hotle_Data(hotle_Name,hotle_Duration, hotle_Amount);
  let index = 2;
  book_Now_Menu_Card_F(index);
  // empty data fild
  hotle_card_form.hotleName.value = '';
  hotle_card_form.hotleDuration.value = '';
  hotle_card_form.hotleAmount.value = '';
});