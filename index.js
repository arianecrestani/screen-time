

const loading = () => {
    const msg = document.getElementById('msg');
    const img = document.getElementById('image');
    const data = new Date()
    // const hour = data.getHours()
    const hour = 20

    msg.innerHTML = `now is ${ hour } hour`
    
    if(hour >= 0 && hour < 12) {
        img.src ='../screen-time/images/mornig.png'
    }else if (hour > 13 && hour <= 18){
        img.src ='./images/afternoon.png'
    }else {
        img.src ='./images/night.png'
    }
}