const Fabrics = require("../models/Fabrics");

const getFabrics = (req, res) => {
  const foundFabrics = Fabrics.getFabrics();
  if (foundFabrics) {
    res.status(200).json(foundFabrics);
  } else {
    res.status(400).json({ errorMessage: `Fabrics not found` });
  }
};

const getFabricInfo = (req, res) => {
  const { fabricId } = req.params;
  const foundFabric = Fabrics.getFabricInfo(fabricId);
  if (foundFabric) {
    res.status(200).json(foundFabric);
  } else {
    res.status(400).json({ errorMessage: `Fabric not found` });
  }
};
module.exports = {
  getFabrics,
  getFabricInfo,
};
