module.exports = class DbHelper {
  static handleOk(res, promise) {
    promise
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(error.status || 400);
        res.send(error);
      });
  }

  static aggregate(Model, aggregateArray, onDataCallback) {
    return new Promise((resolve, reject) => {
      try {
        const data = [];
        Model.aggregate(aggregateArray)
          .cursor({})
          .exec()
          .on('data', doc => data.push(onDataCallback(doc)))
          .on('end', () => resolve(data));
      } catch (e) {
        reject(e);
      }
    });
  }
};
