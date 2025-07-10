(function() {
    var target = document.currentScript;
        window.addEventListener('load', function() {
            calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2p27REuP6dZKgCy2dm5hQhp8GkoeZ24PEdWKqk2JTh3GqezSvFIXxw-TeX2iLuFsj43zTYSEaL?gv=true',
            color: '#039BE5',
            label: 'Book an appointment',
            target,
        });
     });
})();