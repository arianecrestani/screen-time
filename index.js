

const loading = () => {
    const msg = document.getElementById('msg');
    const img = document.getElementById('image');
    const data = new Date()

    const time = data.getHours()+ ":" + data.getMinutes()

   
   

    msg.innerHTML = `now is ${ time } hour`

    
    if(time >= 0 && time < 12) {
        img.src ='../screen-time/images/mornig.png'
        document.body.style.background = '#e2cd9f'
    }else if (time > 13 && time <= 18){
        img.src ='./images/afternoon.png'
        document.body.style.background = '#b9846f'
    }else {
        img.src ='./images/night.png'
        document.body.style.background = '#515154'
    }
}
