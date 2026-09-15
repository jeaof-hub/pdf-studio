# PDF Studio

ชุดเครื่องมือ PDF ภาษาไทยที่ประมวลผลในเบราว์เซอร์ ไม่ส่งเอกสารขึ้นเซิร์ฟเวอร์

รวมและแยก PDF, จัดเรียงหน้า, เพิ่มข้อความและลายเซ็น, ครอป, หมุน, แปลงรูปภาพ, ลายน้ำ และเลขหน้า

## ใช้งาน

https://jeaof-hub.github.io/pdf-studio/

รองรับไฟล์รวมไม่เกิน 50 MB ต่อครั้ง ไม่รองรับ OCR, การแปลง Office และการแก้ข้อความต้นฉบับโดยตรง การย่อขนาดมีโหมดรักษาข้อความ (บีบอัดโครงสร้าง โดยไม่ลดคุณภาพรูป) และโหมดแปลงเป็นภาพ บางไฟล์อาจย่อไม่ได้อีก

## Dependencies

- PDF.js 3.11.174 — Apache-2.0
- pdf-lib 1.17.1 — MIT
- JSZip 3.10.1 — MIT or GPLv3

Third-party libraries are bundled in vendor/ with their license notices.

## เครื่องมือเพิ่มเติม

- ภาพลายเซ็น: PNG/JPG พร้อมปรับขนาดและวางบนหน้า PDF
- กรอกฟอร์ม AcroForm: ข้อความภาษาไทย ช่องติ๊ก รายการและตัวเลือก ช่องอ่านอย่างเดียวคงเดิม ไม่รองรับ XFA และการลงลายเซ็นดิจิทัล
- fontkit 1.1.1 (MIT) และ Noto Sans Thai (SIL Open Font License; ดู vendor/NotoSansThai-LICENSE.txt)
