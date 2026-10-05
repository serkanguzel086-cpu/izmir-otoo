import products from "../data/products.json";

export default function Home() {
  return (
    <main>
      <header className="top">
        <div className="logo">İZMİR <span>OTO</span></div>
        <nav><a>Mağaza</a><a>Markalar</a><a>Kategoriler</a><a>Sipariş Takip</a></nav>
        <button className="cart">Sepetim (0)</button>
      </header>
      <section className="hero">
        <div>
          <small>PROFESYONEL YEDEK PARÇA KATALOĞU</small>
          <h1>Aracına uygun parçayı<br/><b>doğru parçadan</b> bul.</h1>
          <p>Parça numarası, ürün adı veya araç bilgisiyle binlerce üründe hızlı arama.</p>
          <div className="search"><input placeholder="Parça kodu, OEM no, ürün adı..." /><button>Ara</button></div>
        </div>
        <div className="hero-card"><strong>86.000+</strong><span>ürünlük katalog altyapısı</span><em>Marka • Model • Motor • Uyumlu Parça</em></div>
      </section>
      <section className="vehicle">
        <h2>Aracını seç, uyumlu parçaları gör</h2>
        <div className="selects">
          <select><option>Marka seç</option></select>
          <select><option>Model seç</option></select>
          <select><option>Yıl seç</option></select>
          <select><option>Motor / Versiyon</option></select>
          <button>Parçaları Göster</button>
        </div>
      </section>
      <section className="section">
        <div className="section-head"><h2>Örnek katalog ürünleri</h2><span>{products.length} demo kayıt</span></div>
        <div className="grid">{products.map((p:any)=><article className="product" key={p.sku}>
          <div className="photo">ÜRÜN</div>
          <small>{p.brand} • {p.category}</small>
          <h3>{p.name}</h3><code>{p.sku}</code>
          <strong>₺{p.price.toLocaleString("tr-TR")}</strong>
          <button>Sepete Ekle</button>
        </article>)}</div>
      </section>
      <footer>İzmir Oto Yedek Parça • Katalog altyapısı hazır</footer>
    </main>
  );
}