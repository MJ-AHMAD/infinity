import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, ShieldCheck, Pencil, UserPlus, Mail, Lock, UserX } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "editor" | "viewer" | "manager"
  status: "active" | "inactive" | "pending"
  lastLogin: string
  avatar?: string
}

const users: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-11-15 09:45",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Content Editor",
    email: "editor@example.com",
    role: "editor",
    status: "active",
    lastLogin: "2023-11-14 16:30",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Tourism Manager",
    email: "tourism@example.com",
    role: "manager",
    status: "active",
    lastLogin: "2023-11-13 11:20",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Education Hub Manager",
    email: "education@example.com",
    role: "manager",
    status: "active",
    lastLogin: "2023-11-12 14:45",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Climate Data Viewer",
    email: "climate@example.com",
    role: "viewer",
    status: "active",
    lastLogin: "2023-11-10 10:15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "6",
    name: "Research Analyst",
    email: "research@example.com",
    role: "editor",
    status: "inactive",
    lastLogin: "2023-10-28 09:30",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "7",
    name: "Health Hub Manager",
    email: "health@example.com",
    role: "manager",
    status: "active",
    lastLogin: "2023-11-08 13:15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "8",
    name: "New Team Member",
    email: "newmember@example.com",
    role: "viewer",
    status: "pending",
    lastLogin: "Never",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const getRoleBadge = (role: User["role"]) => {
  switch (role) {
    case "admin":
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          Admin
        </Badge>
      )
    case "manager":
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Manager
        </Badge>
      )
    case "editor":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Editor
        </Badge>
      )
    case "viewer":
      return (
        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
          Viewer
        </Badge>
      )
    default:
      return null
  }
}

const getStatusBadge = (status: User["status"]) => {
  switch (status) {
    case "active":
      return (
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>Active</span>
        </div>
      )
    case "inactive":
      return (
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <span>Inactive</span>
        </div>
      )
    case "pending":
      return (
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          <span>Pending</span>
        </div>
      )
    default:
      return null
  }
}

export default function UserManagement() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage all users and their permissions in the system</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>

          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search users..."
              className="w-full rounded-md border border-input pl-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <TabsContent value="all">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>All Users</CardTitle>
              <CardDescription>Manage all user accounts in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>
                                {user.name.charAt(0)}
                                {user.name.split(" ")[1]?.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getRoleBadge(user.role)}
                          {user.role === "admin" && (
                            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                              <ShieldCheck className="h-3 w-3" />
                              <span>Full access</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="h-4 w-4 mr-2" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Lock className="h-4 w-4 mr-2" />
                                Reset Password
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <UserX className="h-4 w-4 mr-2" />
                                Deactivate
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing <strong>8</strong> out of <strong>8</strong> users
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Users</CardTitle>
              <CardDescription>View and manage all active user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Active users list will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive">
          <Card>
            <CardHeader>
              <CardTitle>Inactive Users</CardTitle>
              <CardDescription>View and manage inactive user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Inactive users list will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Users</CardTitle>
              <CardDescription>Approve or reject pending user registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Pending users list will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

