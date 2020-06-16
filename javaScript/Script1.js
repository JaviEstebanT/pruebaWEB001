$(document).ready(function () {
    $("img").mouseenter(function () {
        var img = $("img");
        img.animate({ height: '300px', opacity: '0.4' }, "slow");
        img.animate({ width: '300px', opacity: '0.8' }, "slow");
        img.animate({ height: '100px', opacity: '0.4' }, "slow");
        img.animate({ width: '100px', opacity: '0.8' }, "slow");
    });
});