import Wrapper from "@/app/_components/ui/Wrapper";

export async function generateMetadata({ params }) {
  return { title: `Jordan- ${params.jordanId}` };
}
export default function JordanDetails({ params }) {
  console.log(params);

  return (
    <Wrapper>
      <div className="py-[20px]">{params.jordanId}</div>
    </Wrapper>
  );
}
