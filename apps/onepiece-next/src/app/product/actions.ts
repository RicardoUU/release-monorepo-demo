'use server';

export async function requestUsername(formData:FormData) {
  const username = formData.get('username');
  console.log(username);
  // ...
}
