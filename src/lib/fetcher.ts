export const fetcher = async (slug: string, data = undefined) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${slug}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res.json());
};
