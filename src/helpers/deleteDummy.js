export default async function deleteDummy(meetupId) {
  const response = await fetch("/api/delete-meetup", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ meetupId }),
  });

  return response.json();
};
