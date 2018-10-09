window.onload = function () {
    var scaleActive = $(".scale_state .scale_state_app-event");
    var scalePoints = $(".scale_state .scale_state_app-event .scale_state_col_item");
    var state = 2;
    scaleState(state);

    function setWidth(count) {
        var count = count || 0;
        var maxCount = scaleActive.length - 1;
        if (count > maxCount) {
            count = maxCount;
        }
        $(".scale_state_scale_active").css({"width": count / (scaleActive.length - 1) * 100 + "%"});
    }

    function setVisible(count) {
        for (var i = 0; i <= count; i++) {
            $(scalePoints[i]).css({"display": "block", "z-index": "initial"});
        }
    }

    function scaleState(state) {
        var count = (state === undefined) ? 0 : state;
        console.log(count);
        setWidth(count);
        setVisible(count);
    }
}

