window.onload = function () {
    var scaleActive = $(".app-event");
    setWidth(1);
    function setWidth(count) {
        var count = count || scaleActive.length - 1
        $(".scale_active").css({"width": count / (scaleActive.length - 1) * 100 + "%"});
    }
}

