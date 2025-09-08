import { findPostBySlugCached } from "@/lib/post/queries";

type singlePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: singlePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
