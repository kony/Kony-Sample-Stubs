[
  '{{repeat(150, 160)}}',
   {
   "id": "{{concat("EMP",index())}}",
    "onBoarded": "{{bool()}}",
    "salary": "{{concat("$",float(20000, 50000, "%.2f"))}}",
    "age": "{{integer(20, 40)}}",
    "name": "{{firstName()}} {{surname()}}",
    "manager": "{{firstName()}} {{surname()}}",
    "gender": "{{gender()}}",
    "designation":"{{random("Associate Engineer","VP Operations","Director Of HR","Lead HR Officer","Senior Manager","Associate Manager")}}",
    "company": "{{toUpperCase(company())}}",
    "email": "{{email()}}",
    "phone": "+1 {{phone()}}",
    "address": "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    "location":"{{city()}}",
    "about": "{{lorem(30, "words")}}",
    "date_of_joining": "{{date("01-01-2014 12:00:00", "01-01-2018 12:00:00", "yyyy-MM-dd'T'HH:mm:ss Z")}}"
  }
]