import { NextResponse } from 'next/server'
import payload from 'payload'
import { isSuperAdmin } from '@/lib/middleware/checkRole'
import { User } from '@/types/payload-types'

export async function PUT(req: Request) {
  try {
    const user = (req as any).user as User

    // Check if user is superadmin
    if (!isSuperAdmin({ req: { user } })) {
      return NextResponse.json(
        { error: 'Unauthorized. Only superadmin can manage roles.' },
        { status: 403 },
      )
    }

    const body = await req.json()
    const { userId, newRole } = body

    if (!userId || !newRole) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate role
    const validRoles = ['general_admin', 'faculty_admin', 'alumni_admin', 'user']
    if (!validRoles.includes(newRole)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
    }

    // Get user to update
    const userToUpdate = await payload.findByID({
      collection: 'users',
      id: userId,
    })

    if (!userToUpdate) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Update user role
    const updatedUser = await payload.update({
      collection: 'users',
      id: userId,
      data: {
        role: newRole,
      } as unknown as User,
    })

    return NextResponse.json(
      { message: 'User role updated successfully', user: updatedUser },
      { status: 200 },
    )
  } catch (error: any) {
    console.error('Role update error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to update user role' },
      { status: 500 },
    )
  }
}

export async function GET(req: Request) {
  try {
    const user = (req as any).user as User

    // Check if user is superadmin
    if (!isSuperAdmin({ req: { user } })) {
      return NextResponse.json(
        { error: 'Unauthorized. Only superadmin can view users.' },
        { status: 403 },
      )
    }

    // Get all users except superadmin
    const users = await payload.find({
      collection: 'users',
      where: {
        role: {
          not_equals: 'superadmin',
        },
      },
    })

    return NextResponse.json({ users }, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: error.message || 'Failed to fetch users' }, { status: 500 })
  }
}
