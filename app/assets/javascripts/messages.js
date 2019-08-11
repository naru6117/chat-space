$(function () {
  const chatBox = $("div.messages");
  if (chatBox.length > 0) {
    chatBox.scrollTop($("div.messages")[0].scrollHeight);
  }


  const escapeHTML = str => {
    if (str == null) {
      return;
    }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#x27;');
    str = str.replace(/`/g, '&#x60;');
    return str;
  }

  const buildMessage = data => {
    let lowerMessage = `
      <div class="lower-meesage">
    `;
    if (data.message) {
      lowerMessage += `
        <p class="lower-message__content">
          ${escapeHTML(data.message)}
        </p>
      `;
    }
    if (data.image.url) {
      lowerMessage += `<img class="lower-message__image" src="${escapeHTML(data.image.url)}">`;
    }
    lowerMessage += `</div >`;

    return `
      <div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${escapeHTML(data.username)}
          </div>
          <div class="upper-message__date">
            ${escapeHTML(data.created_at)}
          </div>
        </div>
        ${lowerMessage}
      </div >
    `
  }


  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    const url = $(this).attr('action');
    const formData = new FormData(this);
    $.ajax({
      url: url, //読み込むURL
      type: "POST",
      data: formData, //読み込む形式
      dataType: 'json',
      processData: false,
      contentType: false
    }).done((data) => {
      chatBox.append(buildMessage(data))
      chatBox.animate({ scrollTop: chatBox[0].scrollHeight }, 2000)
    }).always(() => {
      $(".form__message").val('');
      $("#message_image").val('');
      $(".form__submit").removeAttr("disabled");
    }).fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR, textStatus, errorThrown);
    })
  })
})
