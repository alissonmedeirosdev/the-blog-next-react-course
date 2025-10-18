import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  await drizzleDb.delete(postsTable); // ISSO LIMPA A BASE DE DADOS
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);
    console.log(`${posts.length} posts foram salvos na base de dados.`);
  } catch (e) {
    console.log("Error: ", e);
  }
})();
