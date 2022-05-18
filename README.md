# Make Your Burger API

This project is a website to manage burger orders for a burger delivery company. Made as a product of the Vue.js 3 Youtube course taught by @matheusbattisti .
The original project was made with a fake API using the JSON server package.
Here I wrote a real backend API for this project that I also wrote my own version of the frontend.


## Hosted on:
<a href="https://vagnerecomp-test-api.herokuapp.com/">->>Heroku<<-<a>

## Project setup
```
npm install
```

### Run backend
```
npm start
```


### Burguer Model

```
{
   "_id":"6283f03eddaf8b1cbf917847",
   "name":"Malaquias",
   "meat":"Picanha",
   "bread":"Parmesão e Orégano",
   "status":"Solicitado",
   "alternatives":[
      "Bacon",
      "Salame",
      "Cebola roxa",
      "Cheddar",
      "Tomate",
      "Pepino"
   ],
   "__v":0
}
```








### Endpoints

POST:

```
http://localhost:3000/burgers
```

GET:

```
http://localhost:3000/
```

```
http://localhost:3000/ingredients
```

```
http://localhost:3000/burgers
```

```
http://localhost:3000/burgers/<id> switch to the wanted burger id
```

```
http://localhost:3000/status
```


PATCH:

```
http://localhost:3000/burgers
```

```
http://localhost:3000/burgers/<id> switch to the wanted burger id
```

DELETE:

```
http://localhost:3000/burgers  
```

```
http://localhost:3000/burgers/<id> switch to the wanted burger id
```

If you want test or use the hosted API, switch the alias <http://localhost:3000> for <https://vagnerecomp-test-api.herokuapp.com/>

### Dependencies

```
express
```

```
mongoose
```

```
dotenv
```

```
nodemon
```