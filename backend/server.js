require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const port = 8000

app.use(cors())
app.use(express.json()) ;
app.use(express.urlencoded({ extended : false }))
app.use("/statistiques", require("./routes/statistiques.routes"))
app.use("/people", require("./routes/people.routes"))
app.use("/auth", require("./routes/auth.routes"))
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).json({ message: 'Une erreur est survenue, veuillez réessayer plus tard.' });
  });

app.listen(port, () => console.log("Le serveur a démarré au port ", + port))
