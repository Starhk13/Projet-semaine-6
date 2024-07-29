const express = require('express')
const app = express()
const cors = require('cors')

const port = 8000

app.use(cors())
app.use(express.json()) ;
app.use(express.urlencoded({ extended : false }))
app.use("/statistiques", require("./routes/statistiques.routes"))
app.use("/people", require("./routes/people.routes"))

app.listen(port, () => console.log("Le serveur a démarrer au port ", + port))
