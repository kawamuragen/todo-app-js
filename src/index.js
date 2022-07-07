import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li タグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p タグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // liタグの準備
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻す五反野親宅を完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 「戻す」のテキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      // console.log(text);

      createIncompleteList(text);
    });

    // liタグの生成
    const fragment = document.createDocumentFragment();
    fragment.append(p);
    fragment.append(backButton);
    li.appendChild(div).appendChild(fragment);
    // console.log(li);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);

    // 押された完了ボタンの親タグの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // li タグの子要素にdivタグ,pタグを挿入
  const fragment = document.createDocumentFragment();
  fragment.append(p);
  fragment.append(completeButton);
  fragment.append(deleteButton);
  // console.log(fragment);
  li.appendChild(div).appendChild(fragment);
  // console.log(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
