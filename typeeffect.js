var texts = ["好嗎?","不好，感冒了","好累"]; // 陣列
var speed = 1000                           // 速度
var index = 0;                             // 編號
var count = 0;                             // 字數
var id = "type-box";                       //要寫入文字的ID
// // 測試
// document.getElementById("type-box").innerHTML=texts[0];
// 定義方法
function type(){
    var box=document.getElementById(id);
    box.innerHTML=texts[index];
}
// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded",type);