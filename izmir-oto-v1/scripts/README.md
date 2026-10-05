# Katalog aktarımı

Bu sistem 86.000+ ürün için toplu veri aktarımına göre hazırlanmıştır.

Önerilen kaynak:
- Tedarikçi/ERP API
- Yetkili CSV/Excel ürün kataloğu
- Kendi ürün/veritabanı aktarımınız

Örnek JSON:
[
  {
    "sku":"ABC123",
    "name":"Ön Fren Balatası",
    "brand":"Üretici",
    "category":"Fren",
    "price":2499.90,
    "stock":12,
    "manufacturer_part_no":"...",
    "oem_numbers":["..."],
    "vehicle_compatibility":[
      {"make":"Fiat","model":"Egea","year_from":2016,"year_to":2025,"engine":"1.6 Multijet"}
    ]
  }
]

Aktarım:
node scripts/import-products.js data/products-import.json
