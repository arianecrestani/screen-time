

const loading = () => {
    const msg = document.getElementById('msg');
    const img = document.getElementById('image');
    const data = new Date()
    const hour = data.getHours()
    msg.innerHTML = `now is ${ hour } hour`
    
    if(hour >= 0 && hour < 12) {
        img.src ='./images/mornig.png'
    }else if (hour > 12 && hour <= 18){
        img.src ='./images/afternoon.png'
    }else {
        img.src ='./images/night.png'
    }
}