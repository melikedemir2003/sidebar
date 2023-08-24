const toggleBtn = document.getElementById('toggle-btn'); /* ilgili düğmeye erişim sağlıyor */
const sidebar = document.querySelector('.sidebar'); /* yan menü öğesine erişim sağlar.*/
const content = document.querySelector('.content'); /* içerik alanı */
const menuItems = document.querySelectorAll('.menu li'); /* tüm menü öğelerine erişim sağlar. -li */

toggleBtn.addEventListener('click', () => {  /* toggle butonuna tıkladığında içinde ki içerik çalısıyor */
    sidebar.classList.toggle('active'); /* sınıf değiştirir active varsa siler yoksa ekler*/
    content.classList.toggle('active'); /* benzeri bu da */
});

menuItems.forEach(item => { /* item için dögü baslıyor */
    item.addEventListener('click', () => { /* herhangi bir menüye tıkladığında çalısıyor */
        menuItems.forEach(otherItem => otherItem.classList.remove('active')); /* tüm menü öğelerinden "active" sınıfını kaldırır.
        Bunun amacı, tıklanan öğeyi vurgulamak ve diğerlerini vurgulamayı kaldırmaktır. */
        item.classList.add('active'); /* Bu satır, tıklanan menü öğesine "active" sınıfını ekler.
        Bu, tıklanan menü öğesini vurgular ve seçildiğini belirtir. */
    });
});
