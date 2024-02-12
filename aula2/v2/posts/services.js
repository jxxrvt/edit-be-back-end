const data = require("./data");

async function create(newPost) {
  const newProdutsId = await data.insert({
    ...newPost,
    createdAt: new Date().getUTCMilliseconds(),
  });

  return data.getById(newProdutsId);
}

module.exports = {
  create,
};
