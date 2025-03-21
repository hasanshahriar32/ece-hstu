import type { CollectionConfig } from 'payload'
import { User } from '../types/payload-types'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'userType',
      type: 'select',
      required: true,
      options: [
        { label: 'Faculty', value: 'faculty' },
        { label: 'Student', value: 'student' },
        { label: 'Alumni', value: 'alumni' },
      ],
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Super Admin', value: 'superadmin' },
        { label: 'General Admin', value: 'general_admin' },
        { label: 'Faculty Admin', value: 'faculty_admin' },
        { label: 'Alumni Admin', value: 'alumni_admin' },
        { label: 'User', value: 'user' },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'department',
      type: 'text',
      required: true,
    },
    {
      name: 'batch',
      type: 'text',
      admin: {
        condition: (data) => data.userType === 'student' || data.userType === 'alumni',
      },
    },
    {
      name: 'designation',
      type: 'text',
      admin: {
        condition: (data) => data.userType === 'faculty',
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        // If this is the first user being created, make them superadmin
        const users = await req.payload.find({
          collection: 'users',
          limit: 1,
        })

        if (users.totalDocs === 0) {
          data.role = 'superadmin'
        }

        return data
      },
    ],
  },
  access: {
    // Only superadmin can create other admins
    create: async ({ req: { user } }) => {
      if (!user) return false
      const typedUser = user as unknown as User
      if (typedUser.role === 'superadmin') return true
      return false
    },
    // Users can read their own data, admins can read all
    read: async ({ req: { user } }) => {
      if (!user) return false
      const typedUser = user as unknown as User
      if (typedUser.role === 'superadmin' || typedUser.role.includes('admin')) return true
      return {
        id: {
          equals: user.id,
        },
      }
    },
    // Only superadmin can update user roles
    update: async ({ req: { user } }) => {
      if (!user) return false
      const typedUser = user as unknown as User
      if (typedUser.role === 'superadmin') return true
      return false
    },
    // Only superadmin can delete users
    delete: async ({ req: { user } }) => {
      if (!user) return false
      const typedUser = user as unknown as User
      if (typedUser.role === 'superadmin') return true
      return false
    },
  },
}
