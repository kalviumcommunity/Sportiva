require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3004;

// Enable CORS
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
   res.send("<h1>server is working</h1>")
})



app.listen(port, async () => {
  try {
    // await connection;
    console.log("connected to DB");
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
