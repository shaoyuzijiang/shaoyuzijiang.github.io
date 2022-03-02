const checkemail = () => {
    let email = document.getElementById("email").value;
    let reg =  new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
    // document.getElementsByClassName("baoming_btn")
    let year = document.getElementById("year").value;
    let school = document.getElementById("school").value;
    let msg = document.getElementById("msg");
    let info = document.getElementById("inputinfo");


    let content1 = "您已完成报名,开始您的学习之旅吧!";
    if(reg.test(email) && year && school){
        info.className = "info_success";
        info.innerHTML = '<span >' + content1 + '</span>';
        msg.className = "success";
        msg.innerHTML = '<span>' + "恭喜,来自" +
        school + year + email + 
        "同学，您的报名信息已记录，请关注邮件" + '</span>';
    } else /*if (reg.test(email))*/ {
        msg.className = "error";
    }

}