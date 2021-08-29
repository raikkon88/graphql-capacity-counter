**Query**

mutation ExampleQuery($content: InscriptionInput) {
createInscription(content: $content) {
name,
phone,
email,
numberOfPeople
}
}

**Variables**

```
{
    "content": {
        "name": "marc",
        "phone": "654654654",
        "email": "msanxes@gmail.com ",
        "numberOfPeople": 10
    }
}
```

**Query**

```
query getInscription($inscriptionId: String!) {
    inscription(id: $inscriptionId) {
        name
    }
}
```

**Variables**

```
{
    "inscriptionId": "612bff3bd77ccc5ac42fe731"
}
```
