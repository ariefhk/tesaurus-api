# Tesaurus API

## Resource Data

[Tesaurus Data - Victoria](https://github.com/victoriasovereigne/tesaurus/blob/master/dict.json)

## How To Run

1. Install Library

```bash
npm i
```

2. Running Project on Development

```bash
npm run dev
```

2. Running Project on Production

```bash
npm run start
```

## Route

### - Search Sinonim

Endpoint : GET /api/dictionary

Query Parameter :

- sinonim : string, required

Example : GET /api/dictionary?sinonim=makan

Response Body (Success) :

```json
{
  "status": true,
  "message": "Sukses mendapatkan sinonim kata makan",
  "data": ["dahar", "mamah", "santap"]
}
```

Response Body (Failed Not Found) :

```json
{
  "errors": "Kata m tidak ditemukan dalam kamus!"
}
```

Response Body (Validation Error) :

```json
{
  "errors": "Validation Error : {\"issues\":[{\"code\":\"invalid_type\",\"expected\":\"string\",\"received\":\"undefined\",\"path\":[\"sinonim\"],\"message\":\"Required\"}],\"name\":\"ZodError\"}"
}
```
