// CSV/JSON aktarım şablonu.
// Kullanım: node scripts/import-products.js data/products-import.json
// Not: Gerçek katalog verisi için yetkili CSV/API/ERP kaynağınızı kullanın.
const fs=require("fs");
const input=process.argv[2];
if(!input){console.log("Kullanım: node scripts/import-products.js data/products-import.json");process.exit(1)}
const rows=JSON.parse(fs.readFileSync(input,"utf8"));
const required=["sku","name","brand","category","price"];
const errors=[];
rows.forEach((r,i)=>required.forEach(k=>{if(r[k]===undefined||r[k]==="")errors.push(`Satır ${i+1}: ${k} eksik`)}));
if(errors.length){console.error(errors.join("\\n"));process.exit(1)}
fs.writeFileSync("data/products.json",JSON.stringify(rows,null,2));
console.log(`${rows.length} ürün içe aktarıldı.`);
