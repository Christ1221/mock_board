export default async function Fetch_to(dir, payload = {}, headers = {}) {
  if (!dir || dir === "") {
    if (typeof window !== 'undefined') alert("Invalid API Directory not found");
    return null;
  }

  try {
    const response = await fetch(dir, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      console.error(`Failed to fetch ${dir}: ${response.status}`);
      return data;
    }

  } catch (err) {
    console.error("Fetch_to error:", err);
    return null;
  }
}