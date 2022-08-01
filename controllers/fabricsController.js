const Fabrics = require("../models/Fabrics");

const getFabricInfo = (req, res) => {
  const { fabricId } = req.params;
  const foundFabric = Fabrics.getFabricInfo(fabricId);
  if (foundFabric) {
    res.status(200).json(foundFabric);
  } else {
    res.status(400).json({ errorMessage: `Item not found` });
  }
};

module.exports = {
  getFabricInfo,
};
