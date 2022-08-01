let fabricsData = require("../data/fabrics.json");

class Fabrics {
  static getFabrics = () => {
    return fabricsData;
  };

  static getFabricInfo = (name) => {
    const foundFabric = fabricsData.find((fabric) => {
      return fabric.name === name;
    });
    return foundFabric;
  };

  static getFabricNames = () => {
    const fabricNames = fabricsData.map(() => {
      return fabric.name;
    });
    return fabricNames;
  };
}
module.exports = Fabrics;
