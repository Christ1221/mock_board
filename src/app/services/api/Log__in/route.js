

export async function POST(request) {
    
  const { email, password } = await request.json();

  // Perform login logic here

  return NextResponse.json({ message: "Login successful" });


}
