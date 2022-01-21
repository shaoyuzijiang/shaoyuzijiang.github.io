const bm_result = () => {
    window.alert("报名成功!");
}


const select_class = () => {
    let classtag = document.querySelectorAll(".classtag");
    for (let i = 0; i < classtag.length; i++) {
        document.querySelectorAll(".cho")[i].style.display = "block";
    }
}
const select_class_html = () => {

    let classtag = document.querySelectorAll(".classtag");

    for (let i = 0; i < classtag.length; i++) {
        let tag_html = classtag[i].querySelector(".tag_html");
        if (tag_html === null) {
            document.querySelectorAll(".cho")[i].style.display = "none";
        }
    }
}

const select_class_css = () => {
    let classtag = document.querySelectorAll(".classtag");
    // for (let i = 0; i < classtag.length; i++) {
    //     document.querySelectorAll(".cho")[i].style.display = "block";
    // }
    for (let i = 0; i < classtag.length; i++) {
        let tag_css = classtag[i].querySelector(".tag_css");
        if (tag_css === null) {
            document.querySelectorAll(".cho")[i].style.display = "none";
        }

    }
}

const select_class_js = () => {
    let classtag = document.querySelectorAll(".classtag");
    // for (let i = 0; i < classtag.length; i++) {
    //     document.querySelectorAll(".cho")[i].style.display = "block";
    // }
    for (let i = 0; i < classtag.length; i++) {
        let tag_js = classtag[i].querySelector(".tag_js");
        if (tag_js === null) {
            document.querySelectorAll(".cho")[i].style.display = "none";
        }

    }
}


let b_html = document.getElementById("b_html");
b_html.addEventListener("click", select_class);
b_html.addEventListener("click", select_class_html);


let b_css = document.getElementById("b_css");
b_css.addEventListener("click", select_class);
b_css.addEventListener("click", select_class_css);


let b_js = document.getElementById("b_js");
b_js.addEventListener("click", select_class);
b_js.addEventListener("click", select_class_js);


window.onload = function () {
    autoMove('img');
}

function autoMove(tagImg) {
    // let pic_part = document.getElementsByClassName("head_backg");
    let pic_part = document.querySelector(".head_backg");
    let imgs = pic_part.getElementsByTagName(tagImg);

    function InitMove(index) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = '0';
        }
        imgs[index].style.opacity = '1';
    }
    InitMove(0);

    let count = 1;
    function fMove() {
        if (count === imgs.length) { count = 0; }
        InitMove(count);
        count++;
    }
    setInterval(fMove, 1500);
    // btnright.onclick=function(){
    //     clearInterval(scollMove);
    //     fMove();
    //     scollMove=setInterval(fMove,2500);
    // }
}










//没用代码
// let username = document.querySelectorAll("#username");
// let check = document.querySelectorAll("#check");
// check.checked = false;
// if (localStorage.getItem('username')) {
//     username.value = localStorage.getItem('username');
//     check.checked = true;

// }
// check.addEventListener('change', function () {
//     if (this.checked) {
//         localStorage.setItem('username', username.value);
//     } else {
//         localStorage.removeItem('username');
//         check.checked = false;
//     }
// })

// window.onload = () => {
//     let msg = document.getElementById('msg');//文本框输入的内容
//     let getData = document.getElementById('getData');
//     let setData = document.getElementById('setData');
//     let removeData = document.getElementById('removeData');

//     setData.onclick = () => {
//         if(msg.value) {
//             sessionStorage.setItem("data",msg.value);
//             alert("信息已经保存到data里了");
//             // console.log(msg.value);
//         } else {
//             alert("信息  is null");
//         }
//     }

//     getData.onclick = () => {
//         let msg = sessionStorage.getItem("data");
//         if(msg){
//             alert("data is :" + msg);
//             console.log(msg.value);

//         } else{
//             alert("data is null")
//         }
//     }

//     removeData.onclick = function (){
//         let msg = sessionStorage.getItem("data");
//         sessionStorage.removeItem("data");
//         alert(" qingchulellllll")
//     }


// }