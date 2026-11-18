# Kampüs Etkinlik API (Sprint 8)

MongoDB ve Mongoose kullanan etkinlik API'si. İstenen akış: önce MongoDB bağlantısı kurulur, ardından Express sunucusu açılır.

## Kurulum

1. `backend` klasöründe `npm install` çalıştırın.
2. `.env.example` dosyasını `.env` olarak kopyalayıp Atlas bağlantı adresinizi `MONGODB_URI` alanına yazın. Gerçek URI'yi GitHub'a yüklemeyin.
3. Atlas Network Access bölümünde bağlandığınız IP'ye izin verin; Database Access kullanıcısının parolasını kontrol edin.
4. `npm run seed` ile veritabanını temizleyip altı örnek etkinlik ekleyin.
5. `npm run dev` ile API'yi başlatın. Sunucu `http://localhost:3000` adresinde çalışır.

## Uçlar

| İstek | Başarılı yanıt | Açıklama |
|---|---:|---|
| `GET /health` | 200 | `status`, `time`, `student` döndürür (`STUDENT_ID` boş bırakılabilir). |
| `GET /events` | 200 | Etkinlikleri tarihe göre listeler. `?category=Seminer` filtresi desteklenir. |
| `GET /events/:id` | 200 | Etkinliği getirir; geçersiz veya bulunmayan id için 404. |
| `POST /events` | 201 | Doğrulamadan geçen etkinliği oluşturur; schema hatası için 400. |

POST gövdesi örneği:

```json
{
  "title": "Kariyer Semineri",
  "category": "Seminer",
  "capacity": 80,
  "date": "2026-12-20",
  "time": "14:00",
  "location": "Merkez Amfi",
  "description": "Mezunlarla kariyer buluşması"
}
```

Gerekli alanlar `title` (3–100 karakter), `category` (`Seminer`, `Atölye`, `Söyleşi`, `Yarışma`), `date`, `time` ve `location` (en az 3 karakter). `capacity` en az 0, varsayılanı 0; `description` en fazla 500 karakter, varsayılanı boş metindir. Mongoose `createdAt` ve `updatedAt` alanlarını otomatik ekler.

## Teslim öncesi

- `.env`, Atlas kullanıcı adı/parolası ve gerçek URI depoya eklenmemelidir.
- `GET /health`, liste, var olan/geçersiz id, başarılı POST ve eksik alanlı POST isteklerini Postman'de kontrol edin.
- Arayüz klasörü başlangıç çalışma alanında olmadığı için bu teslim API/backend'i içerir; mevcut frontend'inize dokunmaz.
