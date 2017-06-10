$(document).ready(function() {
	$('.mark').hide();
	$('.classification li a').eq(3).addClass('active');
	$('.showmenu').on('click', function(e) {
		e.preventDefault();
    	$('body').toggleClass('menu-show');
	});
	$('.like').on('click', function(e) {
		e.preventDefault();
    	$(this).find('.mark').toggle(0,'.mark');
    	$(this).find('.unmark').toggle(0,'.unmark');
	});
	$('.classification li a').on('click', function(e) {
		e.preventDefault();
		$('.classification li a').removeClass('active');
		$(this).addClass('active');
	});
	$('#login_mail').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}	
	});
	$('#login_password').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('#register_mail').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('#register_password').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('#register_password_check').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('.meals li:eq(3) .like').click();
	type="text/javascript"
	var shoppingcart=0;
	$('.meals li .add').click(function(e) {
		shoppingcart=shoppingcart+1;
		document.getElementById("total").innerHTML=shoppingcart;
	});
	$('.meals li:eq(3) .add').click();
});

var body=document.body;
var xhr=new XMLHttpRequest();
var mail=document.getElementById('login_mail');
var password=document.getElementById('login_password');
var login=document.querySelector('.buttom_login');
var register=document.querySelector('.buttom_gotoregister');

function sendData(e){
	e.preventDefault();
	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
	xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
	var str ='email='+mail.value+'&password='+password.value;
	xhr.send(str);
	password.value='';
};

login.addEventListener('click',sendData,false);

register.addEventListener('click',function(e){
	e.preventDefault();
	location.href='https://wumenglin.github.io/Meng0605/';
},false);

xhr.onload=function(){
	var array=[];
	array=JSON.parse(xhr.responseText);
	alert(array.message);
}

body.addEventListener('keydown',function(e){
	if(e.keyCode=='13'){sendData(e);}
},false);