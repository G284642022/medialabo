// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let sei = 0;

// 予想を4回実行する 
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#poti');
b.addEventListener('click',hantei );


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  let i = document.querySelector('input[name="yosou"]');
    yoso = i.Number(); 
  kaisu = kaisu + 1;
  let kai = document.querySelector('span#kaisu');
  kai = kaisu;
  document.getElementById('kaisu').textContent = kai;

  let an = document.querySelector('span#answer');
  an = yoso;
  document.getElementById('answer').textContent = an;

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  var re = document.querySelector('span#result');
  if(kaisu > 3){
    re = ('答えは' + kotae + 'でした。すでにゲームは終わっています');
  }else if(kotae !== yoso && kaisu === 3){
    re = ('まちがい。残念でした答えは' + kotae + 'です。');
  }else if(kotae > yoso && kaisu < 4){
    re = ('まちがい。答えはもっと大きいですよ');
  }else if(kotae < yoso && kaisu < 4){
    re = ('まちがい。答えはもっと小さいですよ');
  }else if(kotae === yoso && kaisu < 4){
    sei++;
    if(sei === 1){
       re = ('正解です。おめでとう！'); 
    }else{
      re = ('答えは' + kotae + 'でした。すでにゲームは終わっています。');
    }
  }
  document.getElementById('result').textContent = re;
}

