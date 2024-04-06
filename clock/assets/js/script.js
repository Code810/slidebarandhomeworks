
setInterval(() => {
const date= new Date();
const hour=date.getHours()>=10?date.getHours():`0${date.getHours()}`;
const minute=date.getMinutes()>=10?date.getMinutes():`0${date.getMinutes()}`;
const second=(date.getSeconds()>=10)?date.getSeconds():`0${date.getSeconds()}`;
const hourHand=document.querySelector(".hours");
    hourHand.previousElementSibling.previousElementSibling.style.transform=`rotate(${second*6}deg)`;
    hourHand.previousElementSibling.style.transform=`rotate(${minute*6}deg)`;
    hourHand.style.transform=`rotate(${(hour*30)+(minute*0.5)}deg)`;

    // hourHand.nextElementSibling.children
    document.querySelector("h2").innerText=`${hour}:${minute}:${second}`
}, 1000);

