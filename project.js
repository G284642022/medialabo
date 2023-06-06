let ten = document.querySelector('#poti');
ten.addEventListener('click',sendRequest);


// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let a = document.querySelector('select[name="weather"]');
    let id = parseInt(a.value);
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    let ken = document.querySelector('p#sentaku');
    sentaku.textContent = data.name + 'の最高気温は'+data.main.temp_max+'°です。最低気温は'+data.main.temp_min+'°です。';
}
// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}