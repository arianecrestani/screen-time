

const loading = () => {
    const msg = document.getElementById('msg');
    const img = document.getElementById('image');
    const data = new Date()
    const hour = data.getHours()
    // const hour = 8
   

    msg.innerHTML = `now is ${ hour } hour`

    
    if(hour >= 0 && hour < 12) {
        img.src ='../screen-time/images/mornig.png'
        document.body.style.background = '#e2cd9f'
    }else if (hour > 13 && hour <= 18){
        img.src ='./images/afternoon.png'
        document.body.style.background = '#b9846f'
    }else {
        img.src ='./images/night.png'
        document.body.style.background = '#515154'
    }
}