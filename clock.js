{
    /* <div class="clock">
            <span class="time"></span>
            <p class="date"></p>
        </div> */
}


function ghori() {
    let myDate = new Date();
    let tarikh = myDate.getDate();
    let mash = myDate.getMonth() + 1;
    let bosor = myDate.getFullYear();
    let ghonta = myDate.getHours();
    let minit = myDate.getMinutes();
    let sec = myDate.getSeconds();

    let myDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let amPm = (ghonta >= 12) ? "PM" : "AM";
    let calnrd = tarikh + "-" + mash + "-" + bosor;
    let clck = ghonta + ":" + minit + ":" + sec + " " + amPm;

    let day = myDate.getDate();
    let month = myDate.getMonth();
    let currentDate = myDay[myDate.getDay()] + ", " + myMonths[myDate.getMonth()] + ", " + myDate.getFullYear();


    document.getElementsByClassName('time')[0].innerHTML = clck;
    document.getElementsByClassName('date')[0].innerHTML = currentDate;
}

ghori()

setInterval(function() {
    ghori()
}, 1000)