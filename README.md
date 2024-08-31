example-template
|- node_modules/
|- src/
    |- controllers/
        |- user.controller.ts
    |- exceptions/
        |- base.exception.js
    |- interface/  (สำหรับ ts)
        |- user.interface.ts
    |- middleware/
        |- auth.js
    |- models/
        |- model.js
    |- routes/
        |- user.routes.js
    |- schema/
        |- user.schema.js
    |- service/
        |- user.service.js
    |- test/
        |- user.test.js
    |- utils
        |- database.js
|- app.js
|- .env
|- .gitignore
|- package.json
|- README.md


- controllers สำหรับจัดการ logic
- exceptions จัดการ error หรือ message code
- interface จัดการ interface สำหรับ ts
- middleware ใช้สำหรับขั้นกลางก่อนที่จะเรียก controllers
- models เก็บไฟล์ model ของฐานข้อมูล (ถ้าใช้ mongoose หรือ orm)
- routes จัดการ path และเชื่อมต่อกับ controllers
- schema กำหนดรูปแบบที่จะ validate ข้อมูล
- service ใช้สำหรับติดต่อ database เช่น query, insert ที่จะถูกใช้ใน controllers
- test เขียน unit test
- utils เก็บ function ที่ใช้ในหลายๆจุดใน project หรือเก็บ function ที่ช่วยใช้ใน project
- app.js ไฟล์หลักของ project ที่ใช้สำหรับ setup project 

