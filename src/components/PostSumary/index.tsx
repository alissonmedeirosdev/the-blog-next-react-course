import { formatDatetime } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSumaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSumary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSumaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time className="block text-slate-300 text-sm/tight" dateTime={createdAt}>
        {formatDatetime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
