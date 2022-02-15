# Sakura
自製網站作品Sakura櫻花祭

index.html為主頁面，index-page1.html、index-page2.html、index-page3.html、index-page4.html、form.html為分頁。

index.html : icon部分使用css keyframe動畫搭配rotate infinite使其無限旋轉，在螢幕寬度低於658px時，RWD響應讓icon置中以及更改表單按鈕避免橫向捲軸。
當點擊icon旁箭頭時，透過javascript顯示nav導航，以及讓箭頭旋轉。

index-page1.html : 用a標籤包icon，使其導向主頁面。圖片部分寬度用vw做為單位方便響應不同螢幕大小。頁面右方箭頭使用javascript收放文章。

index-page2.html : 標題旁圖案利用將其position設置為relative，使其能夠移動，再搭配css keyframe動畫更改位置及偏移。頁面右下方圖案可導向頁面頂部。

index-page3.html : 使用google map javascriptApi顯示地圖於頁面。

index-page4.html : 利用jquery fadeIn及animate動畫(animate chain及feedback function讓動畫能夠接續進行) 完成進場動畫效果，RWD響應於螢幕寬度(<768PX)和(<440PX)情況調整標題大小。

form.html : 搭配bootstrap5框架建立表單，當按下提交按鈕時做抽獎動作，利用javascript math.random 設置不同的條件回應alert彈出框。
