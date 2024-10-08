export const fetcher = async (slug: string, data: any = undefined) => {
  return fetch(`${window.location.origin}/api/${slug}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res);
};
