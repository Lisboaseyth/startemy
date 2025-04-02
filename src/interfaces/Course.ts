export interface Course {
  name: string;
  description: string;
  image: string;
  content: Array<{
    name: string;
    steps: Array<string>;
  }>;
  value: number;
  warranty_time: number;
  total_hours: number;
  total_classes: number;
  type: string;
  students: number;
  amount_students: number;
  author: {
    name: string;
    image: string;
    description: string;
  };
  reviews: Array<{
    evaluation_note: number;
    review_text: string;
    date_review: string;
    evaluator_name: string;
  }>;
}
