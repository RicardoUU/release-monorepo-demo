'use client'

import { useFormStatus } from 'react-dom';
import { requestUsername } from './actions';


function Submit() {
  const { pending } = useFormStatus();
  console.log('pending test', pending);
  return (
    <button aria-disabled={pending} type="submit">{pending? 'pending' : 'submit'}</button>
  );

}

export default function Page() {
  const str = "dasdsdada";
  return (
    <>
      <form action={requestUsername} >
        <input type="text" name="username" />
        <Submit />
      </form>
    </>
  );
}