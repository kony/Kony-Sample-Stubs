[
  '{{repeat(40, 100)}}',
  {
    "id": "{{objectId()}}",
    "index": "{{index()}}",
    "guid": "{{guid()}}",
    "stockAvailable": "{{bool()}}",
    "cost": "{{concat("$",float(10, 2000, "%.2f"))}}",
    "variants": "{{random("black","red","blue", "brown", "green")}}",
    "company": "{{company().toUpperCase()}}",
    "productName":"{{random("Bomber Jacket", "Hermes Scarf", "Plain Crew Neck T-Shirt", "Wool Mittens", "Argyle Socks", "Leather Belt", "Cashmere Sweater", "Trench Coat")}}",
    "productRating":"{{integer(0,5)}}",
    "productDescription":  "{{lorem(30, "words")}}"
  }
]