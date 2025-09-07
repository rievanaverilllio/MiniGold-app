# MiniGold-app

Aplikasi web e-commerce/landing untuk brand perhiasan MiniGold, dibangun dengan Next.js (App Router), React, dan Tailwind CSS. Repository ini sudah menyiapkan struktur halaman landing, halaman produk dinamis, serta komponen layout reusable (Navbar, Footer, CartModal) dengan dukungan smooth scrolling (Lenis).

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4 (+ PostCSS plugin)
- ESLint 9 (eslint-config-next)

## Prasyarat

- Node.js >= 18.18 (disarankan 20 LTS)
- npm >= 9 (atau gunakan pnpm/yarn sesuai preferensi Anda)

## Cara Menjalankan (Local)

1. Instal dependensi
   
	 ```powershell
	 npm install
	 ```

2. Jalankan di mode pengembangan
   
	 ```powershell
	 npm run dev
	 ```
	 Aplikasi akan tersedia di http://localhost:3000.

3. Build untuk produksi dan start
   
	 ```powershell
	 npm run build
	 npm run start
	 ```

4. Linting
   
	 ```powershell
	 npm run lint
	 ```

## Skrip NPM

- dev: Menjalankan Next.js di mode pengembangan
- build: Build aplikasi untuk produksi
- start: Menjalankan server produksi
- lint: Menjalankan ESLint

## Struktur Proyek (ringkas)

```
src/
	app/
		(landing)/
			(home)/page.tsx
			blogs/ | category/ | contact-us/ | faq/ | our-story/ | shop/
		(footer)/
			changelog/ | licensing/ | privacy-policy/ | return-policy/ | terms-conditions/
		(auth)/ (admin)/
		product/[id]/page.tsx
		layout.tsx | loading.tsx | not-found.tsx | globals.css
	components/
		layout/ (Navbar, Footer, CartModal, EmptySection)
		section/landing/... (berbagai section untuk halaman)
	hook/
		LenisProvider.tsx
	lib/
		useLenisSmoothScroll.ts
public/
	assets gambar & ikon (logo, hero, partners, dsb.)
```

## Fitur Utama

- Halaman landing multisection (home, blogs, category, contact-us, faq, our-story, shop)
- Halaman produk dinamis: `/product/[id]`
- Komponen layout reusable: Navbar, Footer, CartModal
- Smooth scrolling via Lenis (provider + hook)
- Tailwind CSS v4 untuk styling, utilitas responsif/accessible
- Halaman `loading` dan `not-found` sesuai konvensi App Router

## Styling & UI

- Global style: `src/app/globals.css`
- Utility-first dengan Tailwind v4; gunakan class utilitas untuk komposisi komponen UI
- Animasi tambahan tersedia via `tw-animate-css`

## Konfigurasi & Berkas Penting

- `next.config.ts` – konfigurasi Next.js
- `tsconfig.json` – konfigurasi TypeScript
- `eslint.config.mjs` – aturan linting
- `postcss.config.mjs` – integrasi Tailwind v4

## Environment Variables

Untuk saat ini tidak ada variabel lingkungan wajib untuk menjalankan secara lokal. Jika nanti menambahkan API/auth, buat `.env.local` dan referensikan di `src/app/api` atau komponen terkait.

## Troubleshooting

- Port 3000 sudah dipakai: hentikan proses lain atau jalankan `set PORT=3001; npm run dev` (PowerShell)
- Cache bermasalah setelah upgrade: hapus `.next` dan `node_modules`, lalu `npm install` ulang

---

Dikembangkan dengan Next.js App Router dan Tailwind v4. Kontribusi dan perbaikan sangat diapresiasi.
