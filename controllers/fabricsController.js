const Fabrics = require("../models/Fabrics");

const getFabrics = (req, res) => {
  const foundFabrics = Fabrics.getFabrics();
  if (foundFabrics) {
    res.status(200).json(foundFabrics);
  } else {
    res.status(400).json({ errorMessage: `Fabrics not found` });
  }
};

// const getFabricInfo = (req, res) => {
//   const { fabricName } = req.params;
//   const foundFabric = Fabrics.getFabricInfo(fabricName);
//   if (foundFabric) {
//     res.status(200).json(foundFabric);
//   } else {
//     res.status(400).json({ errorMessage: `Fabric not found` });
//   }
// };

// const getFabricNames = (_req, res) => {
//   const foundNames = Fabrics.getFabricNames();
//   if (foundNames) {
//     res.status(200).json(foundNames);
//   } else {
//     res.status(400).json({ errorMessage: `Names not found` });
//   }
// };

module.exports = {
  getFabrics,
  // getFabricInfo,
  // getFabricNames,
};
