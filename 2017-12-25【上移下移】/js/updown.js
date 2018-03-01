window.onload = function () {
    var uls = Array.from(document.getElementsByTagName("ul"));
    uls.forEach(function (e) {
        var lis = Array.from(e.getElementsByTagName("li"));
        lis.forEach(function (e) {
            var as = e.getElementsByTagName("a");
            as[0].onclick = function () {
                e.previousElementSibling ? e.parentElement.insertBefore(e, e.previousElementSibling) : e.parentElement.appendChild(e);
            }
            as[1].onclick = function () {
                e.nextElementSibling ? e.parentElement.insertBefore(e.nextElementSibling, e) : e.parentElement.insertBefore(e, e.parentElement.firstElementChild);
            }
        });
    });

}//onload END