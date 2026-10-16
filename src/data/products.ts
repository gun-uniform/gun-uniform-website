
export type Product = {
  id: string | number;
  name: string;
  category: string;
  desc: string;
  price: number;
  badge: string;
  image: string;
  spec: {
    outsole?: string;
    insole?: string;
    bahan: string;
    ukuran: string;
    bordir: string;
    fitur: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    id: 1, // ID unik berturut-turut
    name: "Seragam PSH Satpam (Pakaian Sipil Harian)",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Harian/Sipil Harian (PSH) Satpam dengan desain kemeja lengan pendek dan celana formal. Dilengkapi detail placket kancing tertutup, lidah pundak (epaulette), serta saku dada simpel untuk tampilan profesional dan formal.",
    price: 375000, // sesuaikan dengan harga jual Anda
    badge: "Official Issue",
    image: "/images/product/seragam-satpam/PSH SATPAM.jpg",
    spec: {
      bahan: "Tetoron Rayon (TR) / American Drill Premium",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "-",
      fitur: "Kancing Placket Tertutup, Epaulette/Tali Pundak Kancing, Ban Pinggang Cenderung Rapi, Bahan Adem & Tahan Kusut",
    },
  },
  {
    id: 2, // ID unik berturut-turut
    name: "Seragam PDL Satu Satpam",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Lapangan (PDL Satu) Satpam standar resmi Perpol. Setelan kemeja lengan panjang warna krem/cokelat muda dan celana kargo taktikal cokelat tua. Dilengkapi fitur saku kargo fungsional, tempat pin kerah, serta kelengkapan bordir identitas dan emblem resmi.",
    price: 385000, // sesuaikan dengan harga jual Anda
    badge: "Official Issue",
    image: "/images/product/seragam-satpam/PDL SATU.png",
    spec: {
      bahan: "Tetoron Rayon (TR) / American Drill Premium",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Komputer Presisi (Nama, NPK, Logo Dada Satpam, Patch Lengan & Emblem)",
      fitur: "Kemeja Lengan Panjang dengan Epaulette, Celana Kargo Taktikal Saku Samping, Bahan Kuat Tahan Gesekan, Nyaman untuk Tugas Lapangan",
    },
  },
  {
    id: 3, // ID unik berturut-turut
    name: "Seragam PDL Sus Satpam (PDL Khusus)",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Lapangan Khusus (PDL Sus) Satpam standar resmi Perpol. Setelan kemeja lengan panjang warna krem/cokelat muda dengan celana formal lurus warna cokelat tua tanpa saku kargo. Dirancang untuk kombinasi tugas lapangan dan operasional khusus yang membutuhkan tampilan lebih rapi dan fleksibel.",
    price: 375000, // sesuaikan dengan harga jual Anda
    badge: "Official Issue",
    image: "/images/product/seragam-satpam/PDL SUS.jpg",
    spec: {
      bahan: "Tetoron Rayon (TR) / American Drill Premium",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Komputer Presisi (Nama, NPK, Logo Dada Satpam, Patch Lengan & Emblem)",
      fitur: "Kemeja Lengan Panjang dengan Epaulette, Celana Lurus Non-Kargo Rapi, Bahan Adem & Tahan Kusut, Nyaman untuk Aktivitas Seharian",
    },
  },
  {
    id: 4, // ID unik berturut-turut
    name: "Seragam PDH Satpam (Pakaian Dinas Harian)",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Harian (PDH) Satpam standar resmi Perpol. Setelan kemeja lengan pendek warna krem/cokelat muda dengan celana formal lurus warna cokelat tua. Dilengkapi epaulette pundak, tempat pin kerah, serta kelengkapan bordir identitas dan emblem resmi untuk tampilan profesional di area indoor maupun penjagaan harian.",
    price: 350000, // sesuaikan dengan harga jual Anda
    badge: "Best Seller",
    image: "/images/product/seragam-satpam/PDH.jpg",
    spec: {
      bahan: "American Drill Premium / Tetoron Rayon (TR)",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Komputer Presisi (Nama, NPK, Logo Dada Satpam, Patch Lengan & Emblem)",
      fitur: "Kemeja Lengan Pendek dengan Epaulette, Celana Formal Lurus Rapi, Bahan Adem & Tahan Kusut, Nyaman Dipakai Harian",
    },
  },
  {
    id: 5, // ID unik berturut-turut
    name: "Seragam Satpam PDL Naik Level",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Lapangan Naik Level (PDL Naik Level) Satpam standar Perpol. Tersedia dalam pilihan kemeja Lengan Panjang dan Lengan Pendek berwarna krem/cokelat muda dipadukan dengan celana formal lurus warna cokelat tua. Dilengkapi fitur atribut lengkap, bordir presisi, serta desain fleksibel untuk efisiensi operasional dan fleksibilitas tugas di berbagai kondisi.",
    price: 385000, // sesuaikan dengan harga jual Anda
    badge: "New Release",
    image: "/images/product/seragam-satpam/SERAGAM NAIK LEVEL FIX JADI.png",
    spec: {
      bahan: "American Drill Premium / Tetoron Rayon (TR)",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Komputer Presisi (Nama, NPK, Logo Dada Satpam, Patch Lengan & Emblem Gada)",
      fitur: "Tersedia Varian Lengan Panjang & Pendek, Celana Formal Lurus Rapi, Bahan Premium Adem & Tahan Lama, Atribut Lengkap Sesuai Regolasi",
    },
  },
  {
    id: 6, // ID unik berturut-turut
    name: "Seragam PSL Satpam (Pakaian Sipil Lengkap)",
    category: "Seragam Satpam",
    desc: "Setelan Pakaian Sipil Lengkap (PSL) Satpam berdesain jas formal dan elegan untuk tugas protokoler, eksekutif, dan acara resmi. Dibuat dengan potongan tailored presisi, dilengkapi kemeja putih, dasi merah maroon, aksen pocket square, epaulette bahu, serta celana formal yang nyaman.",
    price: 650000, // sesuaikan dengan harga jual Anda
    badge: "Premium Issue",
    image: "/images/product/seragam-satpam/psl.jpg",
    spec: {
      bahan: "Semi Wool Premium / Wool Novus & Furing Dormeuil",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "-",
      fitur: "Setelan Jas & Celana Formal, Kerah Jas Lapel Presisi, Dasi Merah Maroon, Pocket Square Aksosori, Epaulette Bahu Kancing, Furing Dalam Halus & Adem",
    },
  },
  {
    id: 7,
    name: "Sepatu PDL Safety (Toe Cap) Kulit Upper Kulit, Outsole Rubber, Tali Putar.",
    category: "Sepatu",
    desc: "Sepatu PDL safety dengan upper kulit, outsole rubber berstandar SNI, dan sistem tali putar. Cocok untuk aktivitas outdoor, area perkebunan, dan area tambang, dilengkapi besi pengaman pada bagian ujung kaki.",
    price: 400000,
    badge: "Safety SNI",
    image: "/images/product/sepatu-pdl/pdl safety tali putar.jpeg",
    spec: {
      bahan: "Upper Kulit",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Rubber Standar SNI",
      insole: "Besi Pengaman (Toe Cap)",
      fitur: "Tali Putar, Pelindung Ujung Kaki, Cocok untuk Outdoor, Perkebunan, dan Area Tambang",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 8,
    name: "Sepatu PDL Safety (Toe Cap), Upper Kulit Jeruk SNI, Outsole Rubber.",
    category: "Sepatu",
    desc: "Sepatu PDL safety berbahan upper kulit jeruk dengan outsole rubber. Cocok untuk aktivitas outdoor, area perkebunan, dan area tambang, dilengkapi besi pengaman pada bagian ujung kaki.",
    price: 280000,
    badge: "Safety SNI",
    image: "/images/product/sepatu-pdl/pdl safety.jpeg",
    spec: {
      bahan: "Upper Kulit Jeruk SNI",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Rubber",
      insole: "Besi Pengaman (Toe Cap)",
      fitur: "Pelindung Ujung Kaki, Cocok untuk Outdoor, Area Perkebunan, dan Area Tambang",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 9,
    name: "Sepatu PDL Safety (Toe Cap), Upper Kulit Jeruk SNI, Outsole Rubber, Zipper.",
    category: "Sepatu",
    desc: "Sepatu PDL safety berbahan upper kulit jeruk dengan outsole rubber dan resleting (zipper). Cocok untuk aktivitas outdoor, area perkebunan, dan area pertambangan, dilengkapi besi pengaman pada bagian ujung kaki.",
    price: 250000,
    badge: "Safety SNI",
    image: "/images/product/sepatu-pdl/pdl mbj zipper.jpeg",
    spec: {
      bahan: "Upper Kulit Jeruk SNI",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Rubber",
      insole: "Besi Pengaman (Toe Cap)",
      fitur: "Resleting (Zipper), Pelindung Ujung Kaki, Cocok untuk Outdoor, Area Perkebunan, dan Area Pertambangan",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 10,
    name: "Sepatu PDL Safety (Toe Cap), Upper Kulit SNI, Outsole Rubber, Zipper.",
    category: "Sepatu",
    desc: "Sepatu PDL safety berbahan upper kulit dengan outsole rubber dan resleting (zipper). Cocok untuk aktivitas outdoor, area perkebunan, dan area pertambangan, dilengkapi besi pengaman pada bagian ujung kaki.",
    price: 240000,
    badge: "Safety SNI",
    image: "/images/product/sepatu-pdl/pdl safety kulit sni.jpeg",
    spec: {
      bahan: "Upper Kulit Jeruk SNI",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Rubber",
      insole: "Besi Pengaman (Toe Cap)",
      fitur: "Resleting (Zipper), Pelindung Ujung Kaki, Cocok untuk Outdoor, Area Perkebunan, dan Area Pertambangan",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 11,
    name: "Sepatu PDL Non Safety, Upper Kulit Jeruk SNI, Outsole Rubber, Zipper.",
    category: "Sepatu",
    desc: "Sepatu PDL non safety berbahan upper kulit jeruk SNI dengan outsole rubber dan resleting (zipper). Cocok untuk penggunaan outdoor.",
    price: 230000,
    badge: "Non Safety",
    image: "/images/product/sepatu-pdl/pdl baretta non safety.jpeg",
    spec: {
      bahan: "Upper Kulit Jeruk SNI",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Rubber",
      insole: "Tidak menggunakan besi pengaman (Non Safety)",
      fitur: "Resleting (Zipper), Cocok untuk Penggunaan Outdoor",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 12,
    name: "Sepatu PDL Safety (Toe Cap), Upper Sintetis Halus, Outsole Rubber, Zipper.",
    category: "Sepatu",
    desc: "Sepatu PDL Diklat dengan upper sintetis halus, outsole rubber, dan resleting (zipper). Dilengkapi besi pengaman pada bagian ujung kaki.",
    price: 140000,
    badge: "PDL Diklat",
    image: "/images/product/sepatu-pdl/pdl safety diklat.jpeg",
    spec: {
      bahan: "Upper Sintetis Halus",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Rubber",
      insole: "Besi Pengaman (Toe Cap)",
      fitur: "Resleting (Zipper), Pelindung Ujung Kaki, Model PDL Diklat",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 13,
    name: "Sepatu Upper Kulit Jeruk (Recycle), Outsole Sintetis/VPC.",
    category: "Sepatu",
    desc: "Sepatu PDL Diklat berbahan kulit jeruk recycle dengan outsole sintetis/VPC, cocok untuk kebutuhan pendidikan dan pelatihan satpam.",
    price: 125000,
    badge: "PDL Diklat",
    image: "/images/product/sepatu-pdl/pdl diklat kulit jeruk.jpeg",
    spec: {
      bahan: "Upper Kulit Jeruk (Recycle)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Sintetis / VPC",
      insole: "Tidak disebutkan",
      fitur: "Model PDL Diklat, Bahan Kulit Jeruk Recycle",
      bordir: "Tidak Tersedia",
    },
  },
  {
    id: 14,
    name: "Sepatu PDH Upper Kulit Lack, Slip On, Outsole Rubber, Zipper/Tali",
    category: "Sepatu",
    desc: "Tampilan Black Glossy (mengkilap tanpa perlu disemir), cocok dan elegan untuk area indoor maupun kegiatan dinas harian.",
    price: 285000,
    badge: "Premium Quality",
    image: "/images/product/sepatu-pdh/pdh lak.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli Finishing Lak (Patent Leather)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber) Anti-Selip & Jahit Melingkar",
      insole: "Busa Empuk Lapis Merry Mesh (Nyaman & Adem)",
      fitur: "Tali & Resleting Samping (Praktis), Bebas Semir (Cukup Dilap)",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 15,
    name: "Sepatu PDH Upper Kulit, Slip On, Outsole Rubber, Zipper/Tali, Grade A.",
    category: "Sepatu",
    desc: "Tampilan Black Doff/Matte yang dapat disemir, kuat dan tangguh untuk penggunaan area indoor maupun outdoor.",
    price: 240000,
    badge: "Grade A",
    image: "/images/product/sepatu-pdh/pdh doff.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli Grade A Finishing Doff (Matte)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber) Anti-Selip & Jahit Melingkar",
      insole: "Busa Empuk Lapis Merry Mesh",
      fitur: "Bisa Disemir, Resleting Samping (Praktis), Awet Lapangan",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 16,
    name: "Sepatu PDH Upper Kulit, Slip On, Outsole Rubber, Zipper/Tali, Grade B.",
    category: "Sepatu",
    desc: "Tampilan Black Doff/Matte yang cocok untuk area indoor maupun outdoor.",
    price: 180000,
    badge: "Grade B",
    image: "/images/product/sepatu-pdh/pdh doff grade b.jpeg",
    spec: {
      bahan: "Upper Kulit, Finishing Black Doff (Matte), Grade B",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber)",
      insole: "Busa Empuk",
      fitur: "Slip On, Pilihan Resleting Samping atau Tali, Cocok untuk Area Indoor dan Outdoor",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 17,
    name: "Sepatu PDH Upper Synthetic, Slip On, Outsole Rubber, Zipper/Tali.",
    category: "Sepatu",
    desc: "Sepatu PDH berbahan upper synthetic dengan tampilan Black Doff, cocok untuk penggunaan area indoor maupun outdoor.",
    price: 140000,
    badge: "Synthetic",
    image: "/images/product/sepatu-pdh/pdh diklat sintetis.jpeg",
    spec: {
      bahan: "Upper Synthetic, Finishing Black Doff (Matte)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber)",
      insole: "Busa Empuk",
      fitur: "Model Slip On, Pilihan Resleting Samping atau Tali, Cocok untuk Area Indoor dan Outdoor",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 18,
    name: "Rompi Taktis Satpam High-Vis",
    category: "Pakaian Operasional",
    desc: "Rompi taktis Satpam kombinasi warna hitam dan hijau stabilo dengan pita skotlet reflektif High-Visibility serta emblem/patch lengkap untuk tugas patroli dan pengamanan.",
    price: 300000,
    badge: "Safety & Glow",
    image: "/images/product/rompi/rompi satpam.jpeg",
    spec: {
      bahan: "Double Mesh Premium / Jala Tebal",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Pita Skotlet Reflektif & Patch Bordir Satpam / SWABHAKSRA",
      fitur: "Reflektif High-Vis, Kantong Samping Sleting, Patch Perekat / Velcro removable",
    },
  },
  {
    id: 19,
    name: "Lampu Lalin Satpam",
    category: "Atribut & Aksesori",
    desc: "Stik lampu lalu lintas (Traffic Baton LED) oranye merk Graxindo lengkap dengan kemasan dus, baterai, serta stiker reflektif pendukung kegiatan patroli dan pengaturan lalu lintas.",
    price: 150000,
    badge: "Lengkap",
    image: "/images/product/perlengkapan-satpam/lampu lalin.jpeg",
    spec: {
      bahan: "Plastik ABS & Tabung PVC Tahan Banting",
      ukuran: "Panjang ± 54 cm (Menggunakan 2x Baterai Size C / 1.5V)",
      bordir: "-",
      fitur: "Lampu LED High-Visibility, Tali Pegangan/Magnet, Termasuk Baterai & Aksesori Reflektif",
    },
  },
  {
    id: 20,
    name: "Senter LED Rechargeable LUBY L-2682",
    category: "Perlengkapan Lainnya",
    desc: "Senter sorot LED isi ulang (Rechargeable LED Flashlight) 10 Watt dengan tambahan 30 PCS LED SMD penerangan samping. Cocok untuk patroli malam dan kebutuhan darurat operasional.",
    price: 350000,
    badge: "High Power",
    image: "/images/product/perlengkapan-satpam/lampu senter.jpeg",
    spec: {
      bahan: "Plastik ABS Tebal & Reflektor Aluminium",
      ukuran: "Kapasitas Baterai 3000 mAh",
      bordir: "-",
      fitur: "Daya tahan hingga 10 Jam, Cahaya Putih 10W, 30 PCS LED SMD Samping, Pengisian Ulang 7 Jam (110-340V)",
    },
  },
  {
    id: 21,
    name: "Stik Baton Taktis Teleskopik",
    category: "Perlengkapan Lainnya",
    desc: "Tongkat baton taktis teleskopik (expandable baton) berwarna hitam dengan gagang bertekstur anti-slip, lengkap dengan sarung nilon, tali paracord, dan kartu spesifikasi untuk perlengkapan pertahanan diri serta pengamanan operasional.",
    price: 175000,
    badge: "Tactical Gear",
    image: "/images/product/perlengkapan-satpam/stik baton.jpeg",
    spec: {
      bahan: "Baja Paduan / Solid Steel & Pegangan Karet Anti-Slip",
      ukuran: "Standard Teleskopik (Adjustable Extendable Length)",
      bordir: "-",
      fitur: "Mekanisme Teleskopik, Grip Tekstur Kotak Anti-Slip, Termasuk Sarung Pinggang Nilon & Tali Paracord",
    },
  },
  {
    id: 22,
    name: "Tongkat Satpam T-Baton Operasional",
    category: "Perlengkapan Lainnya",
    desc: "Tongkat pentungan T-Baton (tonfa) warna hitam berbahan fiber tebal kokoh dengan pegangan samping berulir anti-slip, dilengkapi sarung nilon, sarung tangan taktis, dan patch velcro Law Enforcement Security.",
    price: 125000,
    badge: "Standard Issue",
    image: "/images/product/perlengkapan-satpam/tongkat satpam.jpeg",
    spec: {
      bahan: "Fiber Polycarbonate / Polimer Tebal & Nilon",
      ukuran: "Panjang Standar Operasional Satpam (± 50-60 cm)",
      bordir: "Patch Velcro Law Enforcement Security",
      fitur: "Desain T-Baton (Tonfa) Ergonomis, Grip Berulir Anti-Slip, Termasuk Sarung Pinggang Nilon & Sarung Tangan Taktis",
    },
  },
  {
    id: 23,
    name: "Borgol Tangan Standar Operasional",
    category: "Perlengkapan Lainnya",
    desc: "Borgol tangan besi baja chrome silver berkualitas tinggi merk Super, dilengkapi dengan 2 anak kunci, kertas petunjuk penggunaan, dan dus kemasan merah untuk perlengkapan pengamanan standar satpam.",
    price: 95000,
    badge: "Standard Issue",
    image: "/images/product/perlengkapan-satpam/borgol.jpeg",
    spec: {
      bahan: "Baja Karbon Chrome / Stainless Steel Anti-Karat",
      ukuran: "Ukuran Pergelangan Standar Operasional (Adjustable Ratchet)",
      bordir: "-",
      fitur: "Mekanisme Penguncian Ganda (Double Lock System), Termasuk 2 Kunci & Kotak Kemasan",
    },
  },
  {
    id: 24,
    name: "Peluit Taktis & Tali Kur Paracord",
    category: "Atribut & Aksesori",
    desc: "Set peluit taktis logam warna hitam matte nyaring lengkap dengan tali kur kalung rajut paracord hitam tebal untuk kebutuhan komando, pengaturan lalu lintas, dan patroli satpam.",
    price: 45000,
    badge: "Tactical Cord",
    image: "/images/product/perlengkapan-satpam/tali kursimpul.jpeg",
    spec: {
      bahan: "Peluit Metal / Aluminium Matte & Tali Paracord 550 Nylon",
      ukuran: "Panjang Tali Kur Standar Kalung Leher / Pengatur Komando",
      bordir: "-",
      fitur: "Suara Nyaring High-Decibel, Rajutan Paracord Kokoh & Tahan Lama, Ring Gantungan Kunci/Pengait Metal",
    },
  },
  {
    id: 25,
    name: "Tali Kur Satpam & Peluit Whistle",
    category: "Atribut & Aksesori",
    desc: "Set tali kur komando/satpam hitam polos dengan klem/ring penyambung logam silver, dilengkapi peluit hitam bertuliskan Security Whistle untuk kelengkapan pakaian dinas dan patroli.",
    price: 35000,
    badge: "Standard Issue",
    image: "/images/product/perlengkapan-satpam/tali kursatu.jpeg",
    spec: {
      bahan: "Tali Nilon Polyester & Peluit ABS / Metal",
      ukuran: "Panjang Tali Kur Standar Seragam PDH / PDL Satpam",
      bordir: "-",
      fitur: "Dilengkapi Klem Ring Metal Silver, Peluit Khusus Security Whistle, Bahan Tali Anyam Halus & Tahan Lama",
    },
  },
  {
    id: 26,
    name: "Sabuk Kopel Set Satpam Premium",
    category: "Atribut & Aksesori",
    desc: "Set sabuk kopel rim Satpam berbahan kulit kilap (patent leather) mengkilap eksklusif dengan timang/gesper kuningan emboss lambang Satpam, dilengkapi 3 dompet/pouch tempat sarung perlengkapan, serta embos plat SATPAM emas.",
    price: 220000,
    badge: "Premium Quality",
    image: "/images/product/perlengkapan-satpam/kopel 1 set.jpeg",
    spec: {
      bahan: "Kulit Sintetis Mengkilap (Patent Leather) & Kepala Gesper Kuningan Aksens Emas",
      ukuran: "Adjustable Belt Size (S, M, L, XL, XXL)",
      bordir: "Emboss Gold Logo & Tulisan SATPAM",
      fitur: "Termasuk 3 Tempat Pouch/Holster (Borgol/HT/HP), Kepala Gesper Kuningan Emboss Lambang Satpam, Tampilan Mengkilap & Mewah",
    },
  },
  {
    id: 27,
    name: "Sabuk Kopel Rim Satpam Taktis",
    category: "Atribut & Aksesori",
    desc: "Sabuk kopel rim taktis berbahan nilon kanvas tebal dengan gesper/timang kuningan lapis emas emboss lambang Satpam, dilengkapi ring mata ayam brass serta klem pengunci samping bertuliskan SATPAM.",
    price: 95000,
    badge: "Standard Issue",
    image: "/images/product/perlengkapan-satpam/kopel rim.jpeg",
    spec: {
      bahan: "Nylon Webbing / Kanvas Tebal & Gesper Kuningan Gold",
      ukuran: "Adjustable Size (Panjang Bebas Disesuaikan)",
      bordir: "-",
      fitur: "Timang Kuningan Emboss Lambang Satpam, Ring Eyelet / Mata Ayam Logam Gold, Klem Pengunci Samping SATPAM, Awet & Tahan Beban Taktis",
    },
  },
  {
    id: 28, // pastikan ID unik jika digabungkan dalam array
    name: "Sabuk Kecil Satpam Harian (Sabuk PDH Satpam)",
    category: "Atribut & Aksesori",
    desc: "Sabuk harian (PDH) berbahan nilon kanvas tebal berwarna hitam dengan gesper/timang kuningan lapis emas emboss lambang Satpam, dilengkapi klem pengunci ujung sabuk berwarna emas.",
    price: 45000, // sesuaikan dengan harga yang diinginkan
    badge: "Standard Issue",
    image: "/images/product/perlengkapan-satpam/sabuk satpam.jpeg",
    spec: {
      bahan: "Nylon Webbing / Kanvas Tebal & Gesper Kuningan Gold",
      ukuran: "Adjustable Size (Panjang Bebas Disesuaikan)",
      bordir: "-",
      fitur: "Timang Kuningan Emboss Lambang Satpam, Klem Ujung Sabuk Warna Emas, Sistem Pengunci Jepit Praktis",
    },
  },
  {
    id: 29, // ID unik berturut-turut
    name: "Topi Lapangan Satpam Jaring Premium",
    category: "Atribut & Aksesori",
    desc: "Topi lapangan Satpam berbahan jaring double mesh tebal yang adem dan nyaman digunakan. Dilengkapi bordir timbul logo Satpam presisi di bagian depan serta variasi lis tali (kuning/putih) di atas pet topi.",
    price: 35000, // sesuaikan dengan harga jual Anda
    badge: "Best Seller",
    image: "/images/product/perlengkapan-satpam/topi satpam.jpeg",
    spec: {
      bahan: "Double Mesh / Jaring Tebal & Busa Nyaman",
      ukuran: "All Size (Pengatur Strap Belakang Adjustable)",
      bordir: "Bordir Komputer Timbul Logo Satpam",
      fitur: "Bahan Jaring Sirkulasi Udara Baik, Lis Tali Variasi (Kuning/Putih), Struktur Mahkota Kokoh, Nyaman Dipakai Seharian",
    },
  },
  {
    id: 30, // ID unik berturut-turut
    name: "Topi Satpam Diklat Jaring Bordir Pet",
    category: "Atribut & Aksesori",
    desc: "Topi khusus diklat / lapangan Satpam berbahan jaring double mesh tebal yang adem dan nyaman. Dilengkapi bordir timbul logo Satpam di bagian depan serta detail bordir tulisan SATPAM dan bendera Merah Putih pada bagian pet (moncong topi).",
    price: 35000, // sesuaikan dengan harga jual Anda
    badge: "Standard Issue",
    image: "/images/product/perlengkapan-satpam/topi satpam diklat.jpeg",
    spec: {
      bahan: "Double Mesh / Jaring Tebal & Busa Nyaman",
      ukuran: "All Size (Pengatur Strap Belakang Adjustable)",
      bordir: "Bordir Komputer Logo Satpam (Depan) + Tulisan SATPAM & Bendera Merah Putih (Pet)",
      fitur: "Bahan Jaring Sirkulasi Udara Maksimal, Detail Bordir Pet Ciri Khas Diklat, Mahkota Kokoh & Awet",
    },
  },
  {
    id: 31, // ID unik berturut-turut
    name: "Topi Pet PDH Satpam Premium",
    category: "Atribut & Aksesori",
    desc: "Topi Pet PDH resmi Satpam berbahan kain berkualitas tinggi dengan bentuk mahkota kokoh dan simetris. Dilengkapi lis lingkar putih, pet mika hitam mengkilap, serta emblem logo Satpam bordir komputer presisi (tersedia variasi emblem emas dan perak/silver).",
    price: 75000, // sesuaikan dengan harga jual Anda
    badge: "Official Issue",
    image: "/images/product/perlengkapan-satpam/topi pdh satpam.jpeg",
    spec: {
      bahan: "Kain Drill/Twill Premium, Mika Pet Mengkilap & Tali Aksesori",
      ukuran: "Nomor 55 - 60 (Ukuran Lingkar Kepala Standard)",
      bordir: "Emblem Logo Satpam Bordir Timbul (Variasi Emas & Silver)",
      fitur: "Konstruksi Mahkota Kokoh Presisi, Pet Mika Glossy, Lis Putih Motif Tenun, Kancing Samping Kuningan, Tampilan Elegan & Resmi",
    },
  },
  {
    id: 32, // ID unik berturut-turut
    name: "Set Patch Bordir & Emblem Atribut Seragam Satpam Custom",
    category: "Atribut & Aksesori",
    desc: "Set atribut bordir komputer lengkap dan pin untuk seragam PDH/PDL Satpam. Terdiri dari papan nama custom, tulisan SATPAM/SECURITY/PT, emblem lokasi Polda & Wilayah (Kota/Kabupaten), logo kewilayahan, kualifikasi Gada Pratama, logo Satpam, serta pin/emblem kolar kerah.",
    price: 25000, // harga per set atau disesuaikan dengan harga jual Anda
    badge: "Custom Order",
    image: "/images/product/perlengkapan-satpam/bordir.jpeg",
    spec: {
      bahan: "Kain Saten/Matador & Benang Bordir Komputer High Density",
      ukuran: "Ukuran Standard Regulasi Perpol (Nama, Polda, Wilayah, Kualifikasi)",
      bordir: "Bordir Komputer Presisi & Rapi dengan Kepadatan Benang Tinggi",
      fitur: "Bisa Custom Nama & Perusahaan, Warna Tajam & Tidak Mudah Blubut, Jahitan Pinggir Lis Rapi, Lengkap dari Name Tag hingga Pin Kerah",
    },
  },
];