'use strict';

// クイズの中身を生成
{
  function render(quiz) {
    
    const main = document.querySelector('main');// main 要素を取得

    const section = document.createElement('section');// section 要素を作成

    const h2 = document.createElement('h2');// 要素の中に h2 要素を作成
    h2.textContent = quiz[0];// h2 にクイズの問題文を代入

    const ul = document.createElement('ul');// ul 要素を作成

    const li0 = document.createElement('li');// li 要素を作成
    li0.textContent = quiz[1];// li に選択肢を追加
    li0.addEventListener('click', () => {// クリック時に実行されるイベント
      if (quiz[4] === 0) {// 0（選択肢A）が正解のとき
        li0.classList.add('correct');// correct というクラス名を追加
      } else {
        li0.classList.add('wrong');// wrong というクラス名を追加
      }
    });
    const li1 = document.createElement('li');
    li1.textContent = quiz[2];
    li1.addEventListener('click', () => {
      if (quiz[4] === 1) {
        li1.classList.add('correct');
      } else {
        li1.classList.add('wrong');
      }
    });
    const li2 = document.createElement('li');
    li2.textContent = quiz[3];
    li2.addEventListener('click', () => {
      if (quiz[4] === 2) {
        li2.classList.add('correct');
      } else {
        li2.classList.add('wrong');
      }
    });

    ul.appendChild(li0);//ul の中に li を追加
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);//section の中に h2 を追加
    section.appendChild(ul);//section の中に ul を追加 (h2の下に配置)
    main.appendChild(section);// main 要素の最後に section を追加
  }

  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quizes = [
    ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0],
    ['2の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
    ['3の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 2],
  ];

  quizes.forEach((quiz) => {// quizes の要素が一つずつ quiz に入り、要素がなくなるまで実行
    render(quiz);
  });

}
