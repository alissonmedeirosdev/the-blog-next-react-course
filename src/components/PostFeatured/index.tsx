import { PostCoverImage } from "../PostCoverImage";
import { PostSumary } from "../PostSumary";
import { findAllPublicPostsChached } from "@/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPostsChached();

  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 group">
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
        postLink={postLink}
        title={post.title}
        excerpt={post.excerpt}
        createdAt={post.createdAt}
      />
    </section>
  );
}
