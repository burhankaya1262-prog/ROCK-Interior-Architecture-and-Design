import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const now = new Date().toISOString()
    const entry = { ...body, receivedAt: now }

    let existing: any[] = []
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const raw = fs.readFileSync(SUBMISSIONS_FILE, 'utf8')
      existing = JSON.parse(raw || '[]')
    }
    existing.push(entry)
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2))

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
