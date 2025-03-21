import { User } from '@/types/payload-types'

type Access = ({ req: { user } }: { req: { user: User | null } }) => boolean

export const isSuperAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'superadmin' || false
}

export const isAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'superadmin' || user?.role?.includes('admin') || false
}

export const isGeneralAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'superadmin' || user?.role === 'general_admin' || false
}

export const isFacultyAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'superadmin' || user?.role === 'faculty_admin' || false
}

export const isAlumniAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'superadmin' || user?.role === 'alumni_admin' || false
}

export const isAuthenticated: Access = ({ req: { user } }) => {
  return !!user
}

export const hasRole = (roles: string[]): Access => {
  return ({ req: { user } }) => {
    if (!user) return false
    return roles.includes(user.role)
  }
}
