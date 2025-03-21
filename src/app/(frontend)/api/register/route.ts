import { NextResponse } from 'next/server'
import payload from 'payload'
import { User } from '@/types/payload-types'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, name, userType, department, batch, designation } = body

    // Validate required fields
    if (!email || !password || !name || !userType || !department) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate userType
    if (!['faculty', 'student', 'alumni'].includes(userType)) {
      return NextResponse.json({ error: 'Invalid user type' }, { status: 400 })
    }

    // Validate additional fields based on userType
    if ((userType === 'student' || userType === 'alumni') && !batch) {
      return NextResponse.json(
        { error: 'Batch is required for students and alumni' },
        { status: 400 },
      )
    }

    if (userType === 'faculty' && !designation) {
      return NextResponse.json({ error: 'Designation is required for faculty' }, { status: 400 })
    }

    // Create user with default role as 'user'
    const user = await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        name,
        userType,
        department,
        batch,
        designation,
        role: 'user',
        isActive: true,
      } as unknown as User,
    })

    return NextResponse.json({ message: 'User registered successfully', user }, { status: 201 })
  } catch (error: any) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: error.message || 'Registration failed' }, { status: 500 })
  }
}
