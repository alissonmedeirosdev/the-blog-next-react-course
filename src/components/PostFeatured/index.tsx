import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="block text-slate-300 text-sm/tight"
          dateTime="2025-08-07"
        >
          07/08/2025 20:00
        </time>
        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet.
        </PostHeading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam
        saepe commodi libero ipsa consequuntur, et ipsam nihil quam illo.
      </div>
    </section>
  );
}
