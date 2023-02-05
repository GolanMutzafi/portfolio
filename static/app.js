// Connect to the MongoDB database
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db("test");
});

// Get the planes data from the database
async function getPlanes() {
  let planes = [];
  try {
    const result = await db.collection("planes").find({}).toArray();
    result.forEach(plane => {
      planes.push(plane);
    });
  } catch (err) {
    console.log(err);
  }
  return planes;
}

// Get the fuel supplies data from the database
async function getFuelSupplies() {
  let fuelSupplies = [];
  try {
    const result = await db.collection("fuel_supplies").find({}).toArray();
    result.forEach(fuelSupply => {
      fuelSupplies.push(fuelSupply);
    });
  } catch (err) {
    console.log(err);
  }
  return fuelSupplies;
}

// Get the maintenance parts/tools data from the database
async function getMaintenanceParts() {
  let maintenanceParts = [];
  try {
    const result = await db.collection("maintenance_parts").find({}).toArray();
    result.forEach(maintenancePart => {
      maintenanceParts.push(maintenancePart);
    });
  } catch (err) {
    console.log(err);
  }
  return maintenanceParts;
}

// Insert a new plane into the database
async function insertPlane(plane) {
  try {
    await db.collection("planes").insertOne(plane);
  } catch (err) {
    console.log(err);
  }
}

// Insert a new fuel supply into the database
async function insertFuelSupply(fuelSupply) {
  try {
    await db.collection("fuel_supplies").insertOne(fuelSupply);
  } catch (err) {
    console.log(err);
  }
}

// Insert a new maintenance part/tool into the database
async function insertMaintenancePart(maintenancePart) {
  try {
    await db.collection("maintenance_parts").insertOne(maintenancePart);
  } catch (err) {
    console.log(err);
  }
}

// Update a plane in the database
async function updatePlane(id, newPlane) {
  try {
    await db.collection("planes").updateOne({_id: id}, {$set: newPlane});
  } catch (err) {
    console.log(err);
  }
}

// Update a fuel supply in the database
async function updateFuelSupply(id, newFuelSupply) {
  try {
    await db.collection("fuel_supplies").updateOne({_id});
  }
  finally{}
}
