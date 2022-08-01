let fabricsData = require("../data/fabrics.json");

class Fabrics {
  static getFabrics = () => {
    return fabricsData;
  };

  static getFabricInfo = (id) => {
    const foundFabric = fabricsData.find((fabric) => {
      return fabric.id === id;
    });
    return foundFabric;
  };
}
module.exports = Fabrics;
