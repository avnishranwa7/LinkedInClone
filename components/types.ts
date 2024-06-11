export interface Post {
  id: string;
  author: { name: string; bio: string };
  content: string;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
  tags?: Array<{ id: string; tag: string }>;
}
