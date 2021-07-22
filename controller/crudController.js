// Crud promise

module.exports = {

  // add schema method
  add: (schema, data) => {
    return new Promise(function (resolve, reject) {
      var addSchema = new schema(data);
      addSchema
        .save()
        .then((resData) => {
          resolve(resData);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },

  // get All schema method
  getAll: (schema) => {
    return new Promise(function (resolve, reject) {
      schema
        .find({
          status: {
            $ne: "deleted"
          }
        })
        .then((resData) => {
          resolve(resData);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },
  
// get schema by id method
  getById: (schema, id) => {
    return new Promise(function (resolve, reject) {
      schema
        .findById({
          _id: id,
        })
        .then((resData) => {
          resolve(resData);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },

  // update schema by id
  updateBy: (schema, id, data) => {
    return new Promise(function (resolve, reject) {
      schema
        .findByIdAndUpdate({
            _id: id,
          },
          data, {
            $new: true
          }
        )
        .then((resData) => {
          resolve(resData);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },
 
  // delete schema by id
  delete: (schema, id) => {
    return new Promise(function (resolve, reject) {
      schema
        .findByIdAndRemove({
          _id: id,
        })
        .then((resData) => {
          resolve(resData);
        })
        .catch((error) => {
          console.log("error", error);
          reject(error);
        });
    });
  },
  
};