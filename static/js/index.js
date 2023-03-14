$(window).on('load', function handlePreloader() {
    if ($('.xf_load').length) {
        $('.xf_load').delay(2000).fadeOut(1800)
    }
})
setInterval(function() {
    $(function() {
        var xf_time = new Date
        var xf_hour = xf_time.getHours() + ':'
        var xf_branch = xf_time.getMinutes()
        var myDate = new Date
        var xf_year = myDate.getFullYear()
        var xf_mon = myDate.getMonth() + 1
        var xf_date = myDate.getDate()
        var xf_week = new Date
        var week = xf_week.getDay()
        var weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        $(".xf_time_1").html(xf_hour + xf_branch)
        $(".xf_time_2").html(xf_year + "年" + xfppp(xf_mon) + "月" + xfppp(xf_date) + "日 ")
        $(".xf_time_3").html(weeks[week])
    })
}, 6000)

$(function() {
    var xf_time = new Date
    var xf_hour = xf_time.getHours() + ':'
    var xf_branch = xf_time.getMinutes()
    var myDate = new Date
    var xf_year = myDate.getFullYear()
    var xf_mon = myDate.getMonth() + 1;
    var xf_date = myDate.getDate()
    var xf_week = new Date
    var week = xf_week.getDay()
    var weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    $(".xf_time_1").html(xf_hour + xf_branch)
    $(".xf_time_2").html(xf_year + "年" + xfppp(xf_mon) + "月" + xfppp(xf_date) + "日 ")
    $(".xf_time_3").html(weeks[week])
})

function xfppp(s) {
    return s < 10 ? '0' + s : s;
}

var swiper = new Swiper(".xf_ico_banner", {
    navigation: {
        nextEl: ".swiper-button-next-ico",
        prevEl: ".swiper-button-prev-ico",
    },
})

var modal = document.getElementById('myModal')

var img = document.getElementById('xf_wxImg')
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")
img.onclick = function() {
    modal.style.display = "block"
    modalImg.src = this.src
    captionText.innerHTML = this.alt
}
var span = document.getElementsByClassName("close")[0]
span.onclick = function() {
    modal.style.display = 'none'
}
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

clock = () => {
    let today = new Date()
    let h = (today.getHours() % 12) + today.getMinutes() / 59;
    let m = today.getMinutes()
    let s = today.getSeconds()

    h *= 30
    m *= 6
    s *= 6

    rotation(hours, h)
    rotation(minutes, m)
    rotation(seconds, s)

    setTimeout(clock, 500)
}

rotation = (target, val) => {
    target.style.transform = `rotate(${val}deg)`
}
window.onload = clock()

function getClick(event) {
    if (event.button == 2) {
        swal('为了不影响页面美观, 这边禁用了您的右键！')
        document.oncontextmenu = new Function('event.returnValue=false;')
    }
}

$('.xf_zhuanfa').click(function() {
    let transfer = document.createElement('input')
    document.body.appendChild(transfer)
    transfer.style.cssText = 'position: absolute; right: 45%; top: 80%;'
    transfer.value = document.domain
    transfer.focus()
    transfer.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
    }
    transfer.blur()
    swal('复制本站域名成功!')
    document.body.removeChild(transfer) // 删除控件
})

let qixiazhandian = document.querySelector('.but_site')
let jinriyunshi = document.querySelector('.but_fortune')
let xf_fortune = document.querySelector('.xf_fortune')
let xf_site = document.querySelector('.xf_site')
qixiazhandian.addEventListener('click', function() {
    xf_fortune.style.display = 'none'
    xf_site.style.display = 'block'
})
jinriyunshi.addEventListener('click', function() {
    xf_fortune.style.display = 'block'
    xf_site.style.display = 'none'
})


/*  留言板的页面
	$('.xf_liuyan').on('click', function() {
	$.confirm({
	animationBounce: 1.5,
	draggable: true,
	title: '在线留言',
	content: '' +
	'<form action="" class="xfmessage">' +
	'<div class="form-group">' +
	'<textarea type="text" rows="1" cols="50" maxlength="20" autocomplete="off" placeholder="填写您的昵称" class="Name form-control" required></textarea>' +
	'</div>' +
	'<div class="form-group">' +
	'<textarea type="text" rows="1" cols="50" maxlength="100" autocomplete="off" placeholder="填写您的网站(选填)" class="URL form-control" required></textarea>' +
	'</div>' +
	'<div class="form-group">' +
	'<input type="email" placeholder="填写您的QQ邮箱" class="QQMail form-control" required />' +
	'</div>' +
	'<div class="form-group">' +
	'<textarea type="text" rows="4" cols="50" maxlength="600" autocomplete="off" placeholder="善眼结善缘，恶言伤人心~" class="YouLiuyan form-control" required></textarea>' +
	'</div>' +
	'</form>',
	buttons: {
	formSubmit: {
	text: '提交',
	btnClass: 'btn-blue',
	action: function() {
	let Name = this.$content.find('.Name').val();
	let URL = this.$content.find('.URL').val();
	let QQMail = this.$content.find('.QQMail').val();
	let YouLiuyan = this.$content.find('.YouLiuyan').val();
	let xf_QQMail = new RegExp(/[1-9]\d{4,10}@qq\.com/)
	if (!Name) {
	$.alert('请输入您的昵称');
	return false;
	}
	// console.log(QQMail);
	if (!QQMail || !xf_QQMail.test(QQMail)) {
	$.alert('请您输入正确的QQ邮箱');
	return false;
	}
	if (!YouLiuyan) {
	$.alert('请输入您的留言');
	return false;
	}
	$.ajax({
	url: `/message?name=${Name}&url=${URL}&mail=${QQMail}&message=${YouLiuyan}`,
	success: (data) => {
	alert(data)
	}
	})
	}
	},
	cancel: {
	text: '取消'
	},
	},
	onContentReady: function() {
	var jc = this;
	this.$content.find('form').on('submit', function(e) {
	e.preventDefault();
	jc.$$formSubmit.trigger('click');
	});
	}
	});
	});
 */




// 和风天气插件
WIDGET = {
    "CONFIG": {
        "layout": "1",
        "width": "450",
        "height": "150",
        "background": "5",
        "dataColor": "FFFFFF",
        "language": "zh",
        "modules": "01",
        "key": ""
    }
}
WIDGET.CONFIG['key'] = $('#he-plugin-standard').attr("key")

$('#icon-rotate').click(() => {
    $('.xf_right_box ').css('transform', 'rotateY(180deg)')
    $('.xf_music_box').css('display', 'none')
    $('.xf_friends').css('display', 'block')
})
$('#xf-friend-rotate').click(() => {
    $('.xf_right_box ').css('transform', 'rotateY(0deg)')
    $('.xf_music_box').css('display', 'block')
    $('.xf_friends').css('display', 'none')
})

let xf_now_width1 = document.body.clientWidth
let xf_now_width2 = window.screen.width
if (xf_now_width1 < 992 || xf_now_width2 < 992) {
    $('.big_box').addClass('swiper mySwiper')
    $('.main_content').addClass('swiper-wrapper')
    $('.slidebox').addClass('swiper-slide')

    $('#icon-rotate').click(() => {
        $('.xf_right_box ').css('transform', 'rotateY(360deg)')
        $('.xf_music_box').css('display', 'none')
        $('.xf_friends').css('display', 'block')
    })
    $('#xf-friend-rotate').click(() => {
        $('.xf_right_box ').css('transform', 'rotateY(0deg)')
        $('.xf_music_box').css('display', 'block')
        $('.xf_friends').css('display', 'none')
    })
}

var swiper = new Swiper(".mySwiper", {
    pagination: '.home-slide .swiper-pagination',
    initialSlide: 1,
    observer: true,
    observeParents: true,
    paginationClickable: true,
    pagination: {
        el: ".xf-swiper-pagination",
        clickable: true,
    },
    watchSlidesProgress: true,
    slidesPerView: 1,
});

function orient() {
    if (window.orientation == 0 || window.orientation == 180) {
        $("body").attr("class", "portrait");
        orientation = 'portrait';
        return false;
    } else if (window.orientation == 90 || window.orientation == -90) {
        $("body").attr("class", "landscape");
        orientation = 'landscape';
        return false;
    }
}

$(function() {
    orient();
});

$(window).bind('orientationchange', function(e) {
    orient();
})