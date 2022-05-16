export interface TodoCombo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": {
    "completed": boolean,
    "inProgres": boolean
  },
  "user": {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    }
  } | "No User";
}