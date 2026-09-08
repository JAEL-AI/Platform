// 天數切換邏輯
function switchDay(dayNum) {
  // 隱藏所有頁面內容
  const contents = document.querySelectorAll('.day-content');
  contents.forEach(content => content.classList.remove('active'));

  // 移除所有按鈕 active 樣式
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => btn.classList.remove('active'));

  // 顯示選取的頁面與設定按鈕樣式
  document.getElementById(`day-${dayNum}`).classList.add('active');
  event.currentTarget.classList.add('active');

  // 滾動頁面至最頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 離線備忘錄自動儲存功能
const memoInput = document.getElementById('memo-input');

if (memoInput) {
  // 載入已儲存的文字
  memoInput.value = localStorage.getItem('osaka_trip_memo') || '';

  // 監聽輸入即時儲存
  memoInput.addEventListener('input', () => {
    localStorage.setItem('osaka_trip_memo', memoInput.value);
  });
}

// 註冊 PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker 註冊成功'))
      .catch(err => console.log('Service Worker 註冊失敗:', err));
  });
}