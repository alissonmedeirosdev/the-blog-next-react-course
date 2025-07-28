import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

console.log(JSON_POSTS_FILE_PATH);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsontContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const paserdJson = JSON.parse(jsontContent);
    const { posts } = paserdJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Post não encontrado");

    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();

// postRepository.findAll().then((jsonContent) => console.log(jsonContent));
postRepository
  .findById("99f8add4-7684-4c16-a316-616271db199e")
  .then((post) => console.log(post));

// (async () => {
//   const jsonContent = await postRepository.findAll();
//   console.log(jsonContent.posts);
// })();
