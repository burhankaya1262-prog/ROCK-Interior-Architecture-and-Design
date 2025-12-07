# ROCK — Interior Architecture and Design

Basit Next.js (app router) + Tailwind başlangıç projesi.

Hızlı başlangıç:

```bash
cd /workspaces/ROCK-Interior-Architecture-and-Design
npm install
npm run dev
```

# ROCK — Interior Architecture and Design

Basit Next.js (app router) + Tailwind başlangıç projesi. Demo amaçlı sayfa ve basit API entegrasyonu içerir.

Hızlı başlangıç:

```bash
cd /workspaces/ROCK-Interior-Architecture-and-Design
npm install
npm run dev
```

Özellikler:
- `app` router ile başlangıç sayfas
- `Nav`, `Hero`, `Footer` bileşenleri
- `projects`, `about`, `contact` sayfaları
- Proje detay sayfaları (dinamik route)
- Basit contact API (`/api/contact`) — demo amaçlı `submissions.json` dosyasına kaydeder
- Tailwind + PostCSS yapılandırması
- Placeholder görseller ve favicon

Notlar (demo):
- Contact form `/api/contact` endpoint'ine POST yapar; veriler proje kökünde `submissions.json` içinde saklanır. Bu yalnızca geliştirme/demo amaçlıdır; gerçek üretim kullanımı için bir e-posta servisi veya sunucu tarafı doğrulama/koruma ekleyin.

Geliştirme sunucusu

```bash
npm run dev
```

İleri adımlar önerileri:
- Gerçek proje görselleri ve proje detay sayfaları ekleyin
- Form doğrulama ve spam koruması (reCAPTCHA, CAPTCHA)
- CI/CD ve hosting (Vercel önerilir)
