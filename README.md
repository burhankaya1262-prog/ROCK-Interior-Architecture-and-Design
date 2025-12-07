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

Otomatik Deploy (hazır)

Bu repo Vercel ile otomatik deploy edecek şekilde bir GitHub Actions workflow içerir.

Yapmanız gerekenler:

1. Vercel hesabı oluşturun (https://vercel.com) ve proje ekleyin.
2. GitHub repository'nizde `Settings -> Secrets -> Actions` altına şu üç secret'ı ekleyin:
	- `VERCEL_TOKEN` (Vercel kişisel erişim token)
	- `VERCEL_ORG_ID` (Vercel organisation ID)
	- `VERCEL_PROJECT_ID` (Vercel project ID)

3. `main` branch'e push yaptığınızda workflow otomatik çalışacak ve siteyi Vercel'e deploy edecektir.

Eğer isterseniz, token ve ID bilgilerini verirseniz ben deploy'u sizin adınıza başlatabilirim.
