var flag = true; //全局变量，只在刷新后重新赋值

/**
 * 单击弹出下拉菜单，再次单击收回菜单
 */
function show_menu() {
    var menu1 = document.getElementById("menu1");
    if (flag) {
        menu1.style.display = "block";
        flag = false;
    } else {
        menu1.style.display = "none";
        flag = true;
    }
}

/**
 * 鼠标离开自动收回下拉菜单
 */
function show_menu1() {
    var menu1 = document.getElementById("menu1");
    menu1.style.display = "none";
    //细节
    flag = true;
}