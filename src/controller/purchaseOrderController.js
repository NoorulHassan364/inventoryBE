const purchaseOrder = require("../modals/purchaseOrderModel");

exports.createClientANDPRODUCT = async (req, res, next) => {
    try {
      const createClientsAndProduct = await purchaseOrder.create(req.body)
      res.status(200).send(createClientsAndProduct);
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.findClientAndProduct = async (req, res, next) => {
    try { 
      const findClientsAndProduct = await purchaseOrder.find({}).populate(["client","productType","itemName","points"]);
      res.status(200).send(findClientsAndProduct);
    } catch (error) {
      console.log(error);
    }
  };

  exports.deleteClient = async (req, res, next) => {
    try {
      const removeClient = await purchaseOrder.findByIdAndDelete(req.params.id);
      if (removeClient == null) {
        res.status(400).send("Client not Deleted");
      } else {
        res.status(200).send("Client Delete Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
