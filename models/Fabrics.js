let fabricsData = require("../data/fabrics.json");

class Fabrics {
  static getFabricsInfo = (id) => {
    const foundFabric = fabricsData.find((fabric) => {
      return fabric.id === id;
    });
    return foundFabric;
  };
}
module.exports = Fabrics;
