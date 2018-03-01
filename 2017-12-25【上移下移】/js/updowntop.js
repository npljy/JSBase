window.onload = function () {
    var uls = Array.from(document.getElementsByTagName("ul"));
    var num = 0;
    var onoff = true;
    uls.forEach(function (el, idx) {
        // 如果是左边的ul 则num是62 如果是右边的ul 则num是60
        idx == 0 ? num = 62 : num = 60;
        var lis = Array.from(el.getElementsByTagName("li"));
        lis.forEach(function (e, i) {
            // 设置每个 li 为绝对定位
            e.style.position = "absolute";
            //设置每个 li 的top
            e.style.top = num * i + "px";
            var as = e.getElementsByTagName("a");// 获取两个按钮
            as[0].onclick = function () {
                if (onoff) {
                    onoff = false;
                    if (e.previousElementSibling) { // 如果有上一个元素
                        //当前元素的top为上一个offsetTop
                        e.style.top = e.previousElementSibling.offsetTop + "px";
                        //上一个元素的top为当前元素的offsetTop
                        e.previousElementSibling.style.top = e.offsetTop + "px";
                        setTimeout(function () { // 动画完成的时间后 交换位置，此时间和动画的时间相同，不然 当前的元素 位置会立即交换
                            e.parentElement.insertBefore(e, e.previousElementSibling);
                            onoff = true;
                        }, 500);
                    }
                    else {//如果没有上一个元素
                        // 重新获取，不然第二次点击的时候还会使用之前的li的顺序
                        lis = Array.from(el.getElementsByTagName("li"));
                        // 重新设置除第一个之外的top的值 ，然后单独将第一个设置最后一个
                        lis.forEach(function (ea, ia) {
                            idx == 0 ? num = 62 : num = 60;
                            ia > 0 && (ea.style.top = num * (ia - 1) + "px");
                        });
                        e.style.top = e.parentElement.lastElementChild.offsetTop + "px";

                        setTimeout(function () { // 动画完成的时间后 交换位置，此时间和动画的时间相同，不然 当前的元素 位置会立即交换
                            // e.parentElement.appendChild(e); insertBefore 如果发第二个参数null，则默认插入最后
                            e.parentElement.insertBefore(e, e.previousElementSibling);
                            onoff = true;
                        }, 500);
                    }
                }
            }
            // 下移 的处理与上移类似
            as[1].onclick = function () {
                if (onoff) {
                    onoff = false;
                    if (e.nextElementSibling) {
                        e.style.top = e.nextElementSibling.offsetTop + "px";
                        e.nextElementSibling.style.top = e.offsetTop + "px";

                        setTimeout(function () {
                            e.parentElement.insertBefore(e.nextElementSibling, e);
                            onoff = true;
                        }, 500);
                    }
                    else {
                        lis = Array.from(el.querySelectorAll("li"));
                        lis.forEach(function (ea, ia) {
                            idx == 0 ? num = 62 : num = 60;
                            ia < lis.length && (ea.style.top = num * (ia + 1) + "px");
                        });
                        e.style.top = e.parentElement.firstElementChild.offsetTop + "px";

                        setTimeout(function () {
                            e.parentElement.insertBefore(e, e.parentElement.firstElementChild);
                            onoff = true;
                        }, 500);
                    }
                }
            }
        });
    });

}//onload ENd