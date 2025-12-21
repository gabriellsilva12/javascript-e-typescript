import app from "./app";
const port = 3001

app.listen(port, function() {
  console.log(`Listen port: ${port}`)
  console.log(`access: http://localhost:${port}`)
})
