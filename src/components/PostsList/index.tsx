import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostSumary } from "../PostSumary";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
                priority: true,
              }}
            />

            <PostSumary
              postHeading="h2"
              postLink="#"
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
            />
          </div>
        );
      })}
    </div>
  );
}
