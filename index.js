const loading = () => {
  const msg = document.getElementById("msg");
  const dayOfWeek = document.getElementById("dayOfWeek");
  const img = document.getElementById("image");
  const dt = new Date();
  const time = dt.getHours() + ":" + dt.getMinutes();
  const dayWeek = dt.getDay();

  switch (dayWeek) {
    case 0:
      dayOfWeek.innerHTML = `Sunday`;
      break;
    case 1:
      dayOfWeek.innerHTML = `Monday`;
      break;
    case 2:
      dayOfWeek.innerHTML = `Tuesday`;
      break;
    case 3:
      dayOfWeek.innerHTML = `Wednesday`;
      break;
    case 4:
      dayOfWeek.innerHTML = `Thurday`;
      break;
    case 5:
      dayOfWeek.innerHTML = `Friday`;
      break;
    case 6:
      dayOfWeek.innerHTML = `Saturday`;
      break;
  }

  msg.innerHTML = `now is ${time} hour`;

  if (time >= 0 && time < 12) {
    img.src = "../screen-time/images/mornig.png";
    document.body.style.background = "#e2cd9f";
  } else if (time > 13 && time <= 18) {
    img.src = "./images/afternoon.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "./images/night.png";
    document.body.style.background = "#515154";
  }
};
