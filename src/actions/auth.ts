"use server";

const adminAuth = async (_: any, formData: FormData) => {
  const code = formData.get("code")?.toString();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_KEY}/teams/enter`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      }
    );
    const data = await res.json();

    return { data };
  } catch (error) {}
};

export { adminAuth };
