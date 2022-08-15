const saveRequestsToJson = (string) => {
  const pathName = path.join(__dirname, "../data/fabricRequests.json");
  fs.writeFile(pathName, JSON.stringify(string), (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  saveRequestsToJson,
};
