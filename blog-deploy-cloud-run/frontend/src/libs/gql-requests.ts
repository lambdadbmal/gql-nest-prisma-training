import { initUrqlClient } from "next-urql";
import { Client } from "urql";

const GRAPTHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPTHQL_ENDPOINT,
      },
      false,
    );

    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}