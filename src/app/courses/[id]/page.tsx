import CourseByIdComponent from "@/components/Courses/CourseById";

export default function Page({ params }: { params: { id: string } }) {
  return <CourseByIdComponent id={params.id} />;
}
