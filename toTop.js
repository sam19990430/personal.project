function doFirst() {
    document.getElementById("top").addEventListener("click", toTop, false)
}
$(function () {
    $(window).scroll(function () {
        // let scroll_top = $(this).scrollTop()
        let scroll_top = Math.round($(this).scrollTop()) //四捨五入到整數位
        let window_height = $(window).height() // 665
        let document_height = $(document).height() // 2016

        if (scroll_top === document_height - window_height) {
            $('#top').show()
        } else {
            $('#top').hide()
        }
    })
})
function toTop(e) {
    e.preventDefault();
    $("html,body").animate(
        {
            scrollTop: 0,
        },
        600
    );

}

window.addEventListener('load', doFirst)