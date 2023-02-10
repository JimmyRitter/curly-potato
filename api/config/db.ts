export enum DbCollections {
  USERS = "users",
}

export const dbConfig = {
  connectionString: process.env.COSMOS_CONNECTION_STRING!,
  dbName: "curly-potato-db",
};

export default { dbConfig, DbCollections };
