function changeLanguage(lang){
  let common = document.querySelector('.lk-common')
  let programm = document.querySelector('.lk-programm')
  let depart = document.querySelectorAll('.lk-depart')
  let cont = document.querySelector('.lk-contacts')
  let russia = document.querySelector('.lk-russia')
  let medina = document.querySelector('.lk-medina')
  let mekka = document.querySelector('.lk-mekka')
  let rf = document.querySelector('.lk-rf')
  let ks = document.querySelector('.lk-ks')
  let reis = document.querySelectorAll('.reis')
  let group = document.querySelectorAll('.group')
  let number = document.querySelectorAll('.number')
  let vilet = document.querySelectorAll('.vilet')



  if(lang === 'en'){
    common.innerHTML = 'Common';
    programm.innerHTML = 'Programm : 6-1 Саиев Хусайн'
    depart.innerHTML = 'Departure leader:'

    depart.forEach((userItem) => {
      userItem.innerHTML = 'Departure leader:';
    });

    cont.innerHTML = 'Contacts'
    russia.innerHTML = 'Russia'
    medina.innerHTML = 'Medina'
    mekka.innerHTML = 'Mekka'
    rf.innerHTML = 'Departure from Russia'
    ks.innerHTML = 'Departure in Rissia'

    reis.forEach((userItem) => {
      userItem.innerHTML = 'Flight:';
    });
    group.forEach((userItem) => {
      userItem.innerHTML = 'Group:';
    });
    number.forEach((userItem) => {
      userItem.innerHTML = 'Flight number:';
    });
    vilet.forEach((userItem) => {
      userItem.innerHTML = 'Departure:';
    });

    
  }else if(lang === 'ru'){
    common.innerHTML = 'Общее';
    programm.innerHTML = 'Программа : 6-1 Саиев Хусайн'
    depart.forEach((userItem) => {
      userItem.innerHTML = 'Руководитель рейса:';
    });
    cont.innerHTML = 'Контакты'
    russia.innerHTML = 'Россия'
    medina.innerHTML = 'Медина'
    mekka.innerHTML = 'Мекка'
    rf.innerHTML = 'Вылет из РФ'
    ks.innerHTML = 'Вылет из КСА'

    reis.forEach((userItem) => {
      userItem.innerHTML = 'Вылет:';
    });
    group.forEach((userItem) => {
      userItem.innerHTML = 'Группа:';
    });
    number.forEach((userItem) => {
      userItem.innerHTML = 'Номер рейса:';
    });
    vilet.forEach((userItem) => {
      userItem.innerHTML = 'Вылет:';
    });
  }else if(lang === 'ar'){
    common.innerHTML = 'شامل';
    programm.innerHTML = 'البرنامج: : 6-1 Саиев Хусайн'
    depart.forEach((userItem) => {
      userItem.innerHTML = 'مدير الطيران:';
    });
    cont.innerHTML = 'اتصل بنا'
    russia.innerHTML = 'روسيا'
    medina.innerHTML = 'المدينة المنورة'
    mekka.innerHTML = 'مكة المكرمة'
    rf.innerHTML = 'المغادرة من روسيا'
    ks.innerHTML = 'رحيل إلى روسيا'

    reis.forEach((userItem) => {
      userItem.innerHTML = 'طيران:';
    });
    group.forEach((userItem) => {
      userItem.innerHTML = 'مجموعة:';
    });
    number.forEach((userItem) => {
      userItem.innerHTML = 'رقم الرحلة: ';
    });
    vilet.forEach((userItem) => {
      userItem.innerHTML = 'طلعة جوية:';
    });
  }
}