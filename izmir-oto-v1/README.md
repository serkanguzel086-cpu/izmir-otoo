# İzmir Oto V1

Gerçek oto yedek parça mağazasının temelini oluşturur.

## Kurulum
1. Node.js LTS kurun.
2. Terminal:
   npm install
   npm run dev
3. http://localhost:3000

## Katalog
`data/products.json` demo kayıtları içerir.
Gerçek katalog için yetkili CSV/API/ERP kaynağından veri alın ve `scripts/import-products.js` ile içeri aktarın.

## V2'de eklenecek
- PostgreSQL/Supabase
- 86.000+ ürün için indeksli arama
- marka/model/yıl/motor uyumluluğu
- gerçek admin paneli
- ürün görselleri
- stok senkronizasyonu
- sepet/ödeme/sipariş
- müşteri hesabı
- kargo
- favoriler
- OEM/parça no araması
- Excel/CSV toplu aktarım
