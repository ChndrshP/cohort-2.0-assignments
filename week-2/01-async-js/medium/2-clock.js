function updateClock() {
    const now = new Date();
    
    const hours12 = (now.getHours() % 12 || 12).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

    const time12 = `${hours12}:${minutes}:${seconds} ${amPm}`;

    console.log(`${time12}`);
}

setInterval(updateClock, 1000);

function updateClock1() {
    const now = new Date();

    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const time24 = `${hours24}:${minutes}:${seconds}`;

    console.log(`${time24}`);
}

setInterval(updateClock1, 1000);
