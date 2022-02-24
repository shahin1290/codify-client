export interface Course {
  _id: string;
  category: string;
  name: string;
  price: number;
  published: boolean;
  img_path: string;
  seats: number;
  video_path: string;
  weeks: number
}