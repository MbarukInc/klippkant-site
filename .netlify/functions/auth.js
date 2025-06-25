export async function onRequest(context) {
  return new Response("Placeholder auth route", {
    headers: { "Content-Type": "text/plain" },
  });
}