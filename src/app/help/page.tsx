import { redirect } from 'next/navigation';

export default function Feedback() {
  redirect('/wip');

  //TODO
  // return <>Feedback</>;
}

export const runtime = "edge";
