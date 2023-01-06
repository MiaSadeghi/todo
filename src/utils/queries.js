import Parse from "parse";

const getAllQuery = async (className) => {
  const ClassName = Parse.Object.extend(className);
  const query = Parse.Query(ClassName);
  const results = await query.find();

  return results;
};

export { getAllQuery };
