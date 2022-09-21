# assignment2-hacktiv8
Repositori untuk assignment kedua Hacktiv8

Untuk menjalankan project ini lakukan git clone terlebih dahulu untuk mendownload repository ini

Kemudian pada didalam directory buka terminal atau cmd dan jalankan 
### `npm install`

Jalankan apikasi menggunakan 
### `npm run dev`

Masuk ke postman buat new request lalu masukkan url http://localhost:3000/api/v1/signin dengan method POST, kemudian isikan body dengan data users yang terdapat pada file user.json

Selelah berhasil login akan tergenerate token, lalu copy token dan buat new request untuk get data products masukkan url http://localhost:3000/api/v1/productss dengan method GET kemudian pada postman pilih authorization, pilih type 'Bearer Token' lalu pastekan token dari endpoint signin ke dalam Bearer Token
