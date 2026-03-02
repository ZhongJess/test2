# Sweetaste 甜點商城

一個以 Vite + EJS + SCSS + Bootstrap 5 建構的響應式甜點電商網站，包含完整的購買流程。

## Demo

[GitHub Pages](https://zhongjess.github.io/Sweetery/)

## 技術棧

| 項目 | 說明 |
|------|------|
| Vite 4 | 開發伺服器與建構工具 |
| Bootstrap 5 | UI 框架 |
| SCSS | 樣式預處理器 |
| EJS | HTML 模板引擎 |
| gh-pages | GitHub Pages 部署 |

## 頁面結構

| 頁面 | 路徑 | 說明 |
|------|------|------|
| 首頁 | `/` | 精選商品展示、品牌介紹 |
| 商品列表 | `/product.html` | 甜點商品分類瀏覽 |
| 購物車 | `/cart.html` | 商品管理、數量調整 |
| 登入 | `/login.html` | 會員登入（FB / Google） |
| 配送資訊 | `/deliver.html` | 收件地址與配送方式 |
| 支付 | `/pay.html` | 付款方式與金額確認 |
| 訂單收據 | `/receipt.html` | 訂單明細 |
| 訂單成功 | `/success.html` | 交易完成確認 |

## 目錄結構

```
├── index.html           # 首頁
├── main.js              # 入口腳本（Bootstrap 載入）
├── vite.config.js       # Vite 設定
├── pages/               # 子頁面
├── layout/
│   ├── header.ejs       # 導覽列
│   └── footer.ejs       # 頁尾
└── assets/
    ├── images/          # 圖片資源（SVG、AVIF）
    └── scss/
        ├── all.scss     # 樣式入口
        ├── helper/      # 變數設定
        ├── layout/      # 版面樣式
        └── pages/       # 各頁面樣式
```

## 安裝與開發

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev

# 建構生產版本
npm run build

# 預覽建構結果
npm run preview

# 部署到 GitHub Pages
npm run deploy
```

## 色彩系統

| 名稱 | 色碼 | 用途 |
|------|------|------|
| 主色（深綠） | `#3F5D45` | 導覽列、按鈕、標籤 |
| 淺綠背景 | `#EAF0ED` | 區塊背景 |
| 中綠文字 | `#8DA291` | 內文輔助色 |
| 金色強調 | `#FFE180` | Hover 狀態、強調元素 |
