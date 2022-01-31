



// 아이디 입력칸 중복확인 버튼 클릭 시//
$('form #checkid').on('click',function(){
    var infoid = $('#idbox').val()
    var idleng = $('#idbox').val().length
    var idrule = /^[a-zA-Z0-9]+$/

    if(!infoid){
        alert('아이디를 입력해주세요.')
        $('#idbox').focus()
        return false
    }
    else if(!idrule.test(infoid) || idleng<6){
        alert('아이디는 영문 혹은 숫자 포함 6자 이상이어야 합니다.')
        $('#idbox').focus()
        return false
    }
    else{
        alert('이 아이디는 사용 가능한 아이디 입니다.')
        }
        $('#password').focus()
        return false
});

// 닉네임란 입력
$('form #checknn').on('click',function(){
    var nninfo = $('#nickname').val()
    var nnleng = $('#nickname').val().length
    // var box = $('')
    if(!nninfo){
        alert('닉네임을 입력해주세요')
        $('#nickname').focus()
        return false
    }
    else if(nnleng<4){
        alert('닉네임은 4글자 이상이어야 합니다.')
        $('#nickname').focus()
        return false
    }
    else{ 
        alert('이 닉네임은 사용 가능 합니다.')
        $('#hp').focus()
    } 
    return false
});




$('form').on('submit',function(e){
e.preventDefault()

// 아이디 재확인
var infoid = $('#idbox').val()
    var idleng = $('#idbox').val().length
    var idrule = /^[a-zA-Z0-9]+$/

    if(!infoid){
        alert('아이디를 입력해주세요.')
        $('#idbox').focus()
        return false
    }
    else if(!idrule.test(infoid) || idleng<6){
        alert('아이디는 영문,숫자 포함 6자 이상이어야 합니다.')
        $('#idbox').focus()
        return false
    };


// 비밀번호
var pw = $('#password').val()
var pwleng = $('#password').val().length
var pwrule = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
var pwok = $('#passwordok').val()



// 비밀번호
    if(pw===''){
    alert('비밀번호를 입력해주세요.')
    $('#password').focus()
    return false
}
else if(!pwrule.test(pw) || pwleng<6 ){
    alert('비밀번호는 영문,숫자,특수문자를 포함 6자리 이상이어야 합니다.')
    $('#password').focus()
    return false
};

// 비밀번호 확인
if(!pwok) {
    alert('비밀번호 확인란을 입력해주세요.')
    $('#passwordok').focus()
    return false
}
else if (pw!==pwok){
    alert('비밀번호를 다시 확인하여 주세요.')
    $('#passwordok').focus()
    return false
};

// 이름
var ninfo = $('#irum').val()
var nrule = /^[가-힣]+$/
if(!ninfo){
    alert('이름을 입력해주세요.')
    $("#irum").focus()
    return false
}
else if(!nrule.test(ninfo)){
        alert('이름을 한글로 입력해주세요.')
        $("#irum").focus()
        return false
    } ;


// 닉네임 재확인
var nninfo = $('#nickname').val()
var nnleng = $('#nickname').val().length

if(!nninfo){
    alert('닉네임을 입력해주세요.')
    $('#nickname').focus()
    return false
}else if(nnleng<4){
    alert('닉네임은 4글자 이상이어야 합니다.')
    $('#nickname').focus()
    return false
};

// 휴대폰 번호
var maxlength = $('#hp1').val().length
var hp1 = $('#hp1').val()
var hp2 = $('#hp2').val()
var hp1chk = /^\d{3,4}$/
var hp2chk = /^\d{4}$/


maxlength


if(!hp1 || !hp2){
    alert('휴대폰 번호를 입력해주세요.')
    $('#hp1').focus()
    return false
}
else if(!hp1chk.test(hp1)|| !hp2chk.test(hp2)) {
    alert('휴대폰 번호를 다시 입력해주세요.')
    $('#hp1').focus()
    return false
}

// 이메일
var email = $('#emailid').val()
if(!email){
    alert('이메일을 입력해주세요.')
}
var emailval = $('#emaildomain').val()
    var emailvalchk = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/
    if(!emailvalchk.test(emailval)){
        alert('이메일 형식에 맞지 않습니다.')
        $('#emaildomain').focus()
        return false
}


// 성별 선택란

if(!$('#male').prop('checked') && !$('#female').prop('checked')){
    alert('성별을 선택하여 주세요')
    $('#male').focus()
    return false
}

});


//이메일 도메인 선택란
$('#domainlist').on('change',function(){
    var value = $(this).find('option:selected').val()
    // $('#emaildomain').
    if(value!== 'noselect' && value!=='self'){
        $('#emaildomain').val(value).attr({disabled:true})
    } else if (value==='self'){
        $('#emaildomain').attr({disabled:false}).val("")
    } else {
        $('#emaildomain').attr({disabled:true}).val("") }

});

// 선호 원두 원산지
$('.table2 #all').on('click', function(){
    var chck = $(this).prop('checked')
    $('#all').siblings('input').prop({checked:chck})
})




// 생년월일
var optlist='';

    var now = new Date()
    var year = now.getFullYear()

for(let i=year;i>=1900;i--){
optlist += `<option value="${i}">${i}</option>`
}
document.getElementById('birthyear').innerHTML=optlist

var optlist2='';
for(let i=1;i<13;i++){
    optlist2 += `<option value="${i}">${i}</option>`
}
document.getElementById("birthmonth").innerHTML=optlist2

var optlist3='';
for(let i=1;i<32;i++){
    optlist3+= `<option value="${i}">${i}</option>`
}
document.getElementById("birthday").innerHTML=optlist3



$('.joinBox .btn button').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
});