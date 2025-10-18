import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";

export const drizzleDb = drizzle("", {
  schema: {
    posts: postsTable,
  },
  logger: true,
});
