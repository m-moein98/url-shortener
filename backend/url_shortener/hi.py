import requests
headers = {
    'Content-Type': 'application/json',
}
payload = {
    "my_text": "hipoirjpewoqifrjwoq"
}
r = requests.post("http://127.0.0.1:8000/api/shit/", json=payload, headers=headers)

print(r.text)