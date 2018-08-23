[
  '{{repeat(30,40)}}',
  {
    "locationID": "{{index()}}",
    "company": "{{toUpperCase(company())}}",
    "phone": "+1 {{phone()}}",
    "address": "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    "latitude": "{{float(-90.000001, 90)}}",
    "longitude": "{{float(-180.000001, 180)}}",
    "office":"{{random("HR Head Office","Sales Head Office","Marketing Head Office","Development Center")}}"
  }
]