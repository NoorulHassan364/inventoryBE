const Client = require("../modals/clientModel");

exports.addClient = async (req, res, next) => {
  try {
    const clientFound = await Client.find({ email: req.body.email });
    if (clientFound.length > 0) {
      res.status(400).send("User Already Exist");
    } else {
      let pinCode = (Math.random() + 1).toString(36).substring(7);
      req.body.pinCode = pinCode;
      const createClient = await Client.create(req.body);
      res.status(201).send(createClient);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getClient = async (req, res, next) => {
  try {
    const allClient = await Client.find({});
    res.status(200).send(allClient);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    const removeClient = await Client.findByIdAndDelete(req.params.id);
    if (removeClient == null) {
      res.status(400).send("Client not Deleted");
    } else {
      res.status(200).send("Client Delete Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateClient = async (req, res, next) => {
  try {
    const upgradeClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (upgradeClient == null) {
      res.status(400).send("Client not Updated");
    } else {
      res.status(200).send(upgradeClient);
    }
  } catch (error) {
    console.log(error);
  }
};
