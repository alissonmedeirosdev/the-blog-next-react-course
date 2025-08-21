import { PostCoverImage } from "../PostCoverImage";
import { PostSumary } from "../PostSumary";

export function PostFeatured() {
  const postLink = `/post/`;

  return (
    <section className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: "/images/bryen_2.png",
          width: 1200,
          height: 720,
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <PostSumary
        postHeading="h2"
        postLink="#"
        title="10 hábitos para aumentar sua produtividade"
        excerpt="o Next.js já vem com várias decisões prontas, permitindo que você comece a desenvolver mais rapidamente."
        createdAt="2025-04-07T00:24:38.616Z"
      />
    </section>
  );
}
