
function mailBtnClick() {
    $('#mailBtn').click(() => {
        const memberEmail = $('#memberEmail').val();
        console.log('이메일 주소 : ' + email);
        const codeNum = $('#codeNum');

        $.ajax({
            type: 'GET',
            url: '<c:url value="/account/mail-check?email=" />' + email,
            success: function (data) {
                console.log(data);
                codeNum.attr('disabled', false);
                code = data;
                alert('인증번호가 전송되었습니다.');
            }
        })
    })
}

function codenumshow() {
    $('#code-show-input').show();
}
function searchdisplayhp() {
    if ($('.search-type-display-hp').css('display') == 'none') {
        $('.search-type-display-hp').show();
    } else {
        $('.search-type-display-hp').hide();
    }
}
function searchdisplayemail() {
    if ($('.search-type-display-email').css('display') == 'none') {
        $('.search-type-display-email').show();
    } else {
        $('.search-type-display-email').hide();
    }
}


/*** SECTION - ID ***/
const hpinput = document.querySelector('#info__id input')
const idErrorMsgEl = document.querySelector('#info__id .error-msg')
idInputEl.addEventListener('change', () => {
  const idRegExp = /^[a-zA-Z0-9]{6,20}$/ // 6~20자의 영문 소문자와 숫자
  if(idRegExp.test(idInputEl.value)) { // 유효성 검사 성공
    idErrorMsgEl.textContent = ""
    account.id = idInputEl.value
  } else { // 유효성 검사 실패
    idErrorMsgEl.textContent = errMsg.id.invalid
    account.id = null
  }
  console.log(account)
});