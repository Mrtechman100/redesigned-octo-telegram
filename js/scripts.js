(function() {
    var target = document.currentScript;
        window.addEventListener('load', function() {
            calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2p27REuP6dZKgCy2dm5hQhp8GkoeZ24PEdWKqk2JTh3GqezSvFIXxw-TeX2iLuFsj43zTYSEaL?gv=true',
            color: '#5688c7FF',
            label: 'Book an appointment',
            target,
        });
     });
})();


// Toggle the navigation menu on hamburger click
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show'); // Toggle the 'show' class to slide the menu in/out
});

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});