export interface Course {
  name: string;
  description: string;
  image: string;
  modules: Array<{
    name: string;
    description: string;
    steps: Array<Step>;
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

export interface Step {
  title: string;
  description: string;
  url_video: string;
  url_image: string;
}