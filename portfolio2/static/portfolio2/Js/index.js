let slideIndexAuto = 0;
showSlidesAuto();

// Photo Slider Animation
function showSlidesAuto() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) {slideIndexAuto = 1};
    slides[slideIndexAuto-1].style.display = "block";
    setTimeout(showSlidesAuto, 4000); // Change every 4 seconds
};

// Modal requirements
let all_button = document.getElementsByClassName("content-btn");
let all_modal = document.getElementsByClassName("modal");
let all_modal_content = document.getElementsByClassName("modal-content");
let all_modal_body = document.getElementsByClassName("modal-body");
let all_x = document.getElementsByClassName("close");
let all_openPopUp = document.getElementsByClassName('miniature');
let all_popupText = document.getElementsByClassName('popuptext');

function skillAnim(skill_items) {
    for(let i=0; i<skill_items.length; i++) {
        skill_percentage = skill_items[i].lastElementChild.innerHTML;
        skill_items[i].style.width = skill_percentage;
        skill_items[i].style.setProperty('--widthEnd', skill_percentage);
        skill_items[i].classList.toggle('skillAnimate');
    };
};

// modal opening
for (let i=0; i<all_button.length; i++) {
    all_button[i].onclick = function() {
        all_modal[i].classList.add("fade");
        if (i>5) {
            all_modal_content[i].classList.add("show2");
        } else {
            all_modal_content[i].classList.add("show");
        };
        if (all_modal_body[i].childElementCount<2) {
            const skill_box = all_modal_body[i].children[0];
            let skill_items = skill_box.getElementsByClassName('skill-items');
            skillAnim(skill_items);
        };
    };
};

// modal closing
for (let i=0; i<all_x.length; i++) {
    all_x[i].onclick = function() {
        all_modal[i].classList.remove("fade");
        if (i>5) {
            all_modal_content[i].classList.remove("show2");
        } else {
            all_modal_content[i].classList.remove("show");
        };
        if (all_modal_body[i].childElementCount<2) {
            const skill_box = all_modal_body[i].children[0];
            let skill_items = skill_box.getElementsByClassName('skill-items');
            for(let id=0; id<skill_items.length; id++) {
                skill_items[id].style = "none";
                skill_items[id].classList.toggle('skillAnimate');
            };
        };
    };
};

// Tabs function
function openTabs(modalName, tabName, btn_className, curr_btn) {
    let all_tabs = document.getElementsByClassName(modalName);
    let all_btn = document.getElementsByClassName(btn_className);

    for (let i=0; i<all_btn.length; i++) {
        all_btn[i].style = "none";
    };

    for (let i=0; i<all_tabs.length; i++) {
        all_tabs[i].style.display = "none";
    };

    document.getElementById(tabName).style.display = "flex";
    curr_btn.currentTarget.style.background = "rgba(58,12,163,1)";
    curr_btn.currentTarget.style.color = "#DEE2E6";
};

// Trigger PopUp text
for (let i=0; i<all_openPopUp.length; i++) {
    all_openPopUp[i].onclick = function() {
        all_popupText[i].classList.toggle("showPopUp");
    };
};
