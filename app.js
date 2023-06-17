import BDD from "./BD.json" assert { type: "json" };

import express from "express"

const app = express()

const productos = BDD


app.get("/", (request, response) => {
    let limit = request.query.limit
    console.log(limit)
    if (limit) {
        limit = limit.toLocaleLowerCase()
        const ProdFilter = productos.filter(e => e.id <= limit)
        return response.send(ProdFilter)
    }
})

app.get("/:productos", (request, response) => {
    response.send(productos)
})

app.get("/productos/:id", (request, response) => {
    const id = parseInt(request.params.id)
    const prod = productos.find(e => e.id === id)

    if (!prod) response.send({error:"Prodcuto no encontrado"})
    else response.send(prod)
})



app.listen(8080, () => console.log("Running on 8080..."))