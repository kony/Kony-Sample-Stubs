{
    "id": "{{objectId()}}",
    "index": "{{index()}}",
    "isActive": "{{bool()}}",
    "age": "{{integer(20, 40)}}",
    "name": "{{firstName()}} {{surname()}}",
    "gender": "{{gender()}}",
    "company": "{{company().toUpperCase()}}",
    "email": "{{email()}}",
    "phone": "+1 {{phone()}}",
    "address": "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    "about": "{{lorem(30, "words")}}",
    "latitude": "{{float(-90.000001, 90)}}",
    "longitude": "{{float(-180.000001, 180)}}"
  }