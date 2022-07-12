
function togglePanel() {
  let panel = document.querySelector("#panel")
  if (panel.className =='panel') {
    panel.classList.replace("panel", "panel-min");
    active_user_name_arrow(0);
    activeTextMenuBtn(0);
    activeUserDetails(0);
  } else {
    panel.classList.replace("panel-min", "panel");
    active_user_name_arrow(1);
    activeTextMenuBtn(1);
  }
}


function toggleUserDetails() {
  let userDetails = document.querySelector(".user-info .details");
  let arrow = document.querySelector(".user-info .img-name i");
  if (userDetails.style.display != "none") {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-down";
  } else {
    userDetails.style.display = "block";
    arrow.className = "fas fa-angle-up";
  }
}

function activeUserDetails(flag) {
  let userDetails = document.querySelector(".user-info .details");
  let arrow = document.querySelector(".user-info .img-name i");
  if (flag) {
    userDetails.style.display = "block";
    arrow.className = "fas fa-angle-up";
  } else {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-down";
  }
}

function active_user_name_arrow(flag) {
  let imgNameBox = document.querySelector(".user-info .img-name");
  let name = document.querySelector(".user-info .img-name .name");
  let arrow = document.querySelector(".user-info .img-name i");
  if (flag) {
    name.style.display = "block";
    arrow.style.display = "block";
    imgNameBox.style.justifyContent = "space-between";
  } else {
    name.style.display = "none";
    arrow.style.display = "none";
    imgNameBox.style.justifyContent = "center";
  }
}

// Active meneu


let menuItems = document.querySelectorAll("nav a");

menuItems.forEach( Item => {
  Item.addEventListener('click', function(){
    menuItems.forEach(itm => itm.classList.remove('item-active'));
    this.classList.add('item-active');
  });
});



