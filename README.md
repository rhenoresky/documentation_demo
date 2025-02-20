# 📘 Menambahkan dan Mengedit Konten di Folder `docs`

Dokumentasi ini menjelaskan cara menambahkan dan mengedit konten di dalam folder `docs`

## 📂 Struktur Folder `docs`

Secara default, struktur folder `docs` di proyek web-docs terlihat seperti ini:

```
my-site/
├── docs/
│   ├── faqs.mdx
│   ├── welcome.mdx
│   ├── why.mdx
│   ├── setup/
│   │   ├── apis.mdx
│   │   ├── quick-start.mdx
```

## ✏️ Menambahkan Dokumen Baru

1. **Buat file baru di dalam folder `docs`**

   Tambahkan file Markdown baru di dalam folder `docs`. Misalnya, buat file `new-document.mdx`:

   ```sh
   touch docs/new-document.mdx
   ```

2. **Tulis konten dokumen**

   Tambahkan konten ke dalam `new-document.mdx` dengan format seperti berikut:

   ```mdx
   ---
   title: Dokumentasi Baru
   description: Deskripsi Baru
   sidebar_position: 3
   ---

   # Dokumentasi Baru

   Ini adalah contoh dokumen baru dalam web-docs.
   ```

3. **Tambahkan ke Sidebar (Opsional)**

   Jika menggunakan sidebar manual (`sidebars.js`), tambahkan entri untuk dokumen baru:

   ```js
   module.exports = {
     tutorialSidebar: [
       { type: "doc", id: "faqs" },
       { type: "doc", id: "welcome" },
       { type: "doc", id: "why" },
       { type: "category", label: "Setup", items: ["setup/apis", "setup/quick-start"] },
       { type: "doc", id: "new-document" },
     ],
   };
   ```

## 📝 Mengedit Konten yang Sudah Ada

1. **Buka file yang ingin diedit**

   Temukan file yang ingin diperbarui di dalam folder `docs`. Misalnya, untuk mengedit `faqs.mdx`:

   ```sh
   nano docs/faqs.mdx
   ```

2. **Lakukan perubahan pada konten**

   Perbarui teks, judul, atau isi sesuai kebutuhan. Contoh:

   Sebelum:

   ```mdx
   # FAQ

   Ini adalah halaman FAQ.
   ```

   Setelah:

   ```mdx
   # Frequently Asked Questions (FAQ)

   Ini adalah halaman FAQ yang diperbarui dengan lebih banyak informasi.
   ```

3. **Simpan perubahan**

   Jika menggunakan editor terminal seperti `nano`, tekan `CTRL + X`, lalu `Y` untuk menyimpan.

## 🚀 Menjalankan dan Mengecek Perubahan

1. Jalankan server pengembangan untuk melihat perubahan:

   ```sh
   npm run start
   ```

2. Buka browser dan akses `http://localhost:3000/docs/faqs` atau halaman yang telah diedit untuk melihat hasilnya.

Dokumen baru kini tersedia di situs web-docs Anda! 🚀
