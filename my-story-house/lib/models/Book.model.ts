export default interface Book {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  imageCoverUrl: string;
  published: boolean;
  likes: number;
  views: number;
  authorId: number;
}
