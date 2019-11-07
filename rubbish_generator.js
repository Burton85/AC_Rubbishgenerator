function generate(option) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };
  const phrase = [
    "應該很簡單吧!",
    "應該很容易吧!",
    "應該很快吧!",
    "應該很正常吧!"
  ];
  function randomMaker(num) {
    let index = Math.floor(Math.random() * num);
    return index;
  }
  let words = "身為一個";
  if (option.target == "engineer") {
    words += "工程師，";
    words += task.engineer[randomMaker(task.engineer.length)];
    words += phrase[randomMaker(phrase.length)];
  } else if (option.target == "designer") {
    words += "設計師，";
    words += task.designer[randomMaker(task.designer.length)];
    words += phrase[randomMaker(phrase.length)];
  } else if (option.target == "entrepreneur") {
    words += "創業家，";
    words += task.entrepreneur[randomMaker(task.entrepreneur.length)];
    words += phrase[randomMaker(phrase.length)];
  } else {
    words = "!!!請選擇職業!!!";
  }
  return words;
}
//export function

module.exports = generate;
