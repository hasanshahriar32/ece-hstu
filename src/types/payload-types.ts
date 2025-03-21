export interface User {
  id: string
  email: string
  password: string
  role: 'superadmin' | 'general_admin' | 'faculty_admin' | 'alumni_admin' | 'user'
  userType: 'faculty' | 'student' | 'alumni'
  name: string
  department: string
  batch?: string
  designation?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}
