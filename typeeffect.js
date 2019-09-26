var texts = ["好嗎?","不好，感冒了","好累"]; // 陣列
var speed = 600                            // 速度
var index = 0;                             // 編號
var count = 0;                             // 字數
var id = "type-box";                       //要寫入文字的ID
// // 測試
// document.getElementById("type-box").innerHTML=texts[0];
// 定義方法
function type(){
    var box=document.getElementById(id);
    // 變數 切割完的文字 = 文字陣列 切割文字 (開始位置,切幾個字)
    var slice = texts[index].slice(0,count++);
    // 盒子.插入內容 = 切割完的文字
    box.innerHTML=slice;
    // 設定重複時間 (方法名稱,間格時間(毫秒))
    setTimeout(type,speed);
    // 如果字數大於目前文字字數    停留時間
    if (count>texts[index].length+5) {
        count=0;
        index++;
    }
    // 如果編號=陣列數量
    if (index== texts.length) {
        index=0;
        
    }
}
// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded",type);