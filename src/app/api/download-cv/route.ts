import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'Harsh-Wardhan-CV.pdf')
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Harsh-Wardhan-CV.pdf"',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    return new NextResponse('File not found', { status: 404 })
  }
}
