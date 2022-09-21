# assignment2-hacktiv8
Repositori untuk assignment kedua Hacktiv8

Untuk menjalankan project ini lakukan git clone terlebih dahulu untuk mendownload repository ini

kemudian pada didalam directory buka terminal atau cmd dan jalankan 
### `npm install`

jalankan apikasi menggunkan 
### `npm run dev`

masuk ke postman buat new request lalu masukkan url [http://localhost:3000/api/v1/signin] dengan method POST, kemudian isikan body dengan data users yang terdapat pada file user.json

selelah berhasil login akan tergenerate token lalu copy token dan buat request baru untuk get data notes masukkan url [http://localhost:3000/api/v1/notes] dengan method GET kemudian pada postman pilih authorization pilih type 'Bearer Token' lalu pastekan token dari endpoint signin ke dalam Bearer Token
