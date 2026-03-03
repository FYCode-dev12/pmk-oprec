# Panduan Deployment — PMK Recruitment Portal

Dokumen ini menjelaskan langkah-langkah untuk melakukan deployment aplikasi **PMK ITERA — Open Recruitment Portal** ke lingkungan produksi.

## 🚀 Opsi 1: Deployment ke Vercel (Rekomendasi)

Vercel adalah platform terbaik untuk aplikasi Next.js karena integrasi yang mulus dan performa optimal.

1. **Hubungkan Repositori**: Login ke [Vercel](https://vercel.com) dan hubungkan dengan akun GitHub/GitLab Anda.
2. **Impor Proyek**: Pilih repositori `pmk-oprec`.
3. **Konfigurasi Environment Variables**: Masukkan variabel berikut di tab *Environment Variables*:
   - `NEXT_PUBLIC_SUPABASE_URL`: URL proyek Supabase Anda.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon Key dari Supabase.
4. **Deploy**: Klik tombol **Deploy**. Vercel akan secara otomatis membangun dan menayangkan aplikasi Anda.

---

## 🖥️ Opsi 2: Deployment ke VPS (Manual/PM2)

Jika Anda menggunakan VPS Linux (Ubuntu/Debian), ikuti langkah berikut:

1. **Persiapan**: Pastikan Node.js (v18+) dan npm terinstall.
2. **Clone & Install**:
   ```bash
   git clone <repository-url>
   cd pmk-oprec
   npm install
   ```
3. **Environment**: Buat file `.env.local` dan isi dengan kredensial Supabase.
4. **Build**:
   ```bash
   npm run build
   ```
5. **Jalankan dengan PM2**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "pmk-oprec" -- start
   ```

---

## 🐳 Opsi 3: Deployment dengan Docker

Gunakan Docker untuk isolasi environment yang lebih baik.

1. **Build Image**:
   ```bash
   docker build -t pmk-oprec .
   ```
2. **Run Container**:
   ```bash
   docker run -p 3000:3000 \
     -e NEXT_PUBLIC_SUPABASE_URL=your_url \
     -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
     pmk-oprec
   ```

---

## 🔐 Variabel Lingkungan (Required)

Aplikasi ini membutuhkan variabel berikut agar dapat berfungsi dengan Supabase:

| Variabel | Deskripsi |
| :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Endpoint API Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public access key untuk Supabase |

## 📦 Database & Backend

Aplikasi ini menggunakan Supabase sebagai backend. Pastikan Anda telah mengikuti panduan di [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) untuk melakukan setup skema database dan tabel yang diperlukan sebelum melakukan deployment.

---
*Dibuat untuk PMK ITERA.*
