window.onload = function(){
    function setTime(){
        let time = new Date();

        let watch_hours = time.getHours();
        let watch_min = time.getMinutes();
        let watch_sec = time.getSeconds();

        if(watch_hours < 10){
          watch_hours = "0" + watch_hours;
        }

        if(watch_min < 10){
          watch_min = "0" + watch_min;
        }

        if(watch_sec < 10){
          watch_sec = "0" + watch_sec;
        }

        //Часы
        let hour = document.getElementById('hour').innerText = watch_hours;
        //Минуты
        let min = document.getElementById('min').innerText = watch_min;
        //Секунды
        let sec = document.getElementById('sec').innerText = watch_sec;
    }
    setTime();
    setInterval(setTime, 1000);
}
