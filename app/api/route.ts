export async function GET() {
    const data = {
        "api_version": "1.0" 
    }
   
    return Response.json({ data })
  }