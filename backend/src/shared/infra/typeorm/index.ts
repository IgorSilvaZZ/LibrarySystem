import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptionsConnection = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptionsConnection, {
      database:
        process.env.NODE_ENV === "test"
          ? "./database.test.sqlite"
          : defaultOptionsConnection.database,
    })
  );
};
