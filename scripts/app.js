const hourContainer = document.getElementById('hour');
const minuteContainer = document.getElementById('minute');
const secondContainer = document.getElementById('second');

const getTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hourContainer.innerHTML = hour;
    minuteContainer.innerHTML = minute;
    secondContainer.innerHTML = second;

}
setInterval(getTime, 1000);
getTime();

