export async function GET() {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice Doe" },
  ];

  return new Response(JSON.stringify(users));
}
