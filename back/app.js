const express = require('express')
const app = express();
const port = 3006;
const cors = require('cors');
var bodyParser = require('body-parser');
const generateObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

var jsonParser = bodyParser.json()


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(jsonParser);
mongoose.connect('mongodb://localhost:27017/users',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const AppointmentSchema = new mongoose.Schema({
    type: String,
    onsar: String,
    udur: Number,
    tsag: String,
    symptoms: String,
    symptomsOnset: Number,
    createdAt: { type: Date, "default": new Date(Date.now()) }
  });

const Appointment = mongoose.model('Appointment', AppointmentSchema);



// console.log(new Date(Date.now()))
 

app.get('/appointment', async (req, res) => {
    const responde = await Appointment.find({});
    if(responde) return res.json(responde);
    else return res.json({"status": 404});
})

app.get('/appointment/:id', async (req, res) => {
  const objectId = new generateObjectId(req.params.id);
    const responde = await Appointment.find({_id: id});
    if(responde) return res.json(responde);
    else return res.json({"status": 404});
})

app.post('/appointment', jsonParser, async (req, res) => {
    console.log(req.body);
    const responde = await Appointment.create(req.body);
    if(responde) res.json({"status": 200});
    else res.json({"status": 500});
})

app.delete('/appointment/:id', async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid id parameter' });
  }
  try {
    const appointment = await Appointment.findOneAndDelete({_id: id});
    if (!appointment) {
      return res.status(404).json({error: 'Appointment not found'});
    }
    res.json({message: 'Appointment deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'An error occurred while deleting the appointment'});
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

