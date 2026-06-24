import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate the incoming data
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically connect to a database or send an email.
    // Since this is a demonstration of backend capability, we'll log it
    // and return a success response to simulate database insertion.
    console.log("Contact submission received:", data);

    return NextResponse.json(
      { success: true, message: "Transmission received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
