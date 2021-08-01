import express from 'express';

const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" }
  res.render('index',{blog});
});



const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
