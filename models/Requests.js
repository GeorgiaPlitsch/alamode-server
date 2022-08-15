let requestsData = require("../data/fabricRequests.json");
const { saveRequestsToJson } = require("../util/util");

class Requests {
  constructor(id, fabric) {
    this.id = uuid();
    this.fabric = fabric;
  }

  static addFabricRequest = (request) => {
    const { id, fabric } = item;
    const newItem = new Requests(id, fabric);
    requestsData = [...requestsData, newItem];
    saveInventoriesToJson(requestsData);
    return newItem;
  };
}

module.exports = Requests;
