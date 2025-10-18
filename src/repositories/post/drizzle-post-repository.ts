import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { desc } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {}

  async findAll(): Promise<PostModel[]> {}

  async findById(id: string): Promise<PostModel> {}
}

(async () => {
  const repo = new DrizzlePostRepository();

  const posts = await repo.findAllPublic();

  posts.forEach((post) => console.log(post.slug, post.published));
})();
