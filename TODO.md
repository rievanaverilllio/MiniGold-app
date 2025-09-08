# TODO — MiniGold-app

Dokumen ini merangkum pekerjaan yang akan dikerjakan, prioritas, dan kriteria selesai (Definition of Done/DoD). Fokus saat ini: melengkapi halaman shop/product, alur cart, dan fondasi auth/API.

## Prioritas Tinggi

- [ ] Halaman Shop (MVP)
	- Filter: kategori, rentang harga, sort (baru/terlaris/harga)
	- Pencarian produk (client-side terlebih dahulu)
	- Pagination atau load-more
	- DoD: data mock tampil konsisten, interaksi filter/sort mulus, state URL opsional

- [ ] Halaman Detail Produk `/product/[id]`
	- Galeri gambar (thumbnail + zoom), deskripsi, spesifikasi
	- Produk terkait (berdasarkan kategori)
	- Metadata/SEO per-produk
	- DoD: semua informasi produk tampil, navigasi galeri lancar, SEO dasar terpasang

- [ ] Cart & Checkout (MVP)
	- Hubungkan `CartModal` dengan state global (Context/Reducer) + persist localStorage
	- Tambah/hapus/ubah jumlah item, subtotal, estimasi ongkir placeholder
	- DoD: cart berjalan end-to-end di client, data tetap ada saat reload

- [ ] Halaman Auth (login/register/forgot)
	- Form + validasi (client/server action sederhana)
	- Rencana integrasi auth (NextAuth atau custom) — tunda backend dulu
	- DoD: form berfungsi, validasi tampil, arsitektur siap disambungkan ke API

- [ ] Konten halaman legal footer
	- Lengkapi: Privacy, Terms, Return Policy, Licensing, Changelog
	- DoD: konten placeholder rapi, ter-link dari Footer

## Prioritas Menengah

- [ ] Area Admin (struktur awal di `app/(admin)`)
	- Dashboard placeholder + navigasi dasar
	- DoD: rute admin terisolasi, layout admin terpasang

- [ ] API Routes (stub)
	- `/api/products` (list/detail mock), `/api/cart` (noop untuk integrasi selanjutnya)
	- DoD: endpoint mock merespons JSON stabil untuk kebutuhan UI

- [ ] SEO & Aksesibilitas
	- Next Metadata API (title/description/openGraph)
	- Audit a11y dasar (kontras, alt text, focus ring)
	- DoD: halaman utama lulus pengecekan a11y dasar, metadata konsisten

- [ ] Performa & UX
	- `next/image` untuk semua gambar besar, preload aset kritikal
	- Tuning Lenis (prefer-reduced-motion), lazy load section berat
	- DoD: LCP membaik secara lokal, smooth scroll menghormati preferensi pengguna

## Infrastruktur

- [ ] Testing
	- Setup Jest + React Testing Library untuk komponen
	- Playwright untuk smoke e2e (home, product, cart)
	- DoD: minimal 3-5 test jalan di CI

- [ ] CI/CD
	- GitHub Actions: lint, typecheck, build
	- Vercel deployment (preview untuk PR)
	- DoD: setiap PR mendapat preview URL dan cek lulus

- [ ] Environment
	- Template `.env.example` (API_URL, NEXT_PUBLIC_*)
	- DoD: onboarding dev baru cukup salin `.env.example`

## Dokumentasi

- [ ] Tambah screenshot/preview UI ke README
- [ ] Panduan kontribusi singkat (branching, commit, PR)

## Selesai (Done)

- [x] Setup Next.js 15 + Tailwind v4 + ESLint
- [x] Layout dasar (Navbar, Footer, Loading, Not Found)
- [x] Struktur halaman landing dan dynamic route produk

## Catatan Teknis

- Node 20 LTS direkomendasikan. Jalankan: `npm install`, `npm run dev`.
- Styling: Tailwind v4; komponen UI berada di `src/components` dan section di `src/components/section`.
- Smooth scroll menggunakan Lenis (`hook/LenisProvider.tsx`, `lib/useLenisSmoothScroll.ts`).
