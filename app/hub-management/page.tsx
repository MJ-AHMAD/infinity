import type React from "react"
import Link from "next/link"
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
import {
  Compass,
  GraduationCap,
  Building,
  Cloud,
  Heart,
  Stethoscope,
  Anchor,
  RouteIcon as Road,
  BookOpen,
  Droplet,
  Users,
  Leaf,
  MoreHorizontal,
  Plus,
  Search,
  FilterX,
  ChevronDown,
} from "lucide-react"

interface Hub {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  status: "active" | "draft" | "archived"
  contentCount: number
  lastUpdated: string
}

const hubs: Hub[] = [
  {
    id: "1",
    name: "Tourist Hub",
    icon: <Compass className="h-5 w-5" />,
    description: "Explore the beautiful beaches and attractions",
    status: "active",
    contentCount: 124,
    lastUpdated: "2023-11-12",
  },
  {
    id: "2",
    name: "Education Hub",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Educational institutions and initiatives",
    status: "active",
    contentCount: 87,
    lastUpdated: "2023-11-10",
  },
  {
    id: "3",
    name: "Economic Hub",
    icon: <Building className="h-5 w-5" />,
    description: "Economic activities and development",
    status: "active",
    contentCount: 65,
    lastUpdated: "2023-11-08",
  },
  {
    id: "4",
    name: "Climate Hub",
    icon: <Cloud className="h-5 w-5" />,
    description: "Climate information and initiatives",
    status: "active",
    contentCount: 42,
    lastUpdated: "2023-11-05",
  },
  {
    id: "5",
    name: "Social Initiatives",
    icon: <Heart className="h-5 w-5" />,
    description: "Community welfare programs",
    status: "draft",
    contentCount: 18,
    lastUpdated: "2023-11-02",
  },
  {
    id: "6",
    name: "Health Hub",
    icon: <Stethoscope className="h-5 w-5" />,
    description: "Healthcare facilities and services",
    status: "active",
    contentCount: 56,
    lastUpdated: "2023-10-28",
  },
  {
    id: "7",
    name: "Marine Resource Hub",
    icon: <Anchor className="h-5 w-5" />,
    description: "Marine resources and conservation",
    status: "active",
    contentCount: 35,
    lastUpdated: "2023-10-25",
  },
  {
    id: "8",
    name: "Infrastructure Hub",
    icon: <Road className="h-5 w-5" />,
    description: "Infrastructure development projects",
    status: "active",
    contentCount: 29,
    lastUpdated: "2023-10-20",
  },
  {
    id: "9",
    name: "Research Hub",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Research activities and findings",
    status: "draft",
    contentCount: 14,
    lastUpdated: "2023-10-15",
  },
  {
    id: "10",
    name: "Water Resources Hub",
    icon: <Droplet className="h-5 w-5" />,
    description: "Water management and conservation",
    status: "archived",
    contentCount: 8,
    lastUpdated: "2023-09-30",
  },
  {
    id: "11",
    name: "Community Hub",
    icon: <Users className="h-5 w-5" />,
    description: "Community engagement and activities",
    status: "active",
    contentCount: 47,
    lastUpdated: "2023-10-10",
  },
  {
    id: "12",
    name: "Sustainable Development Hub",
    icon: <Leaf className="h-5 w-5" />,
    description: "Sustainable development initiatives",
    status: "active",
    contentCount: 32,
    lastUpdated: "2023-10-05",
  },
]

export default function HubManagement() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Hub Management</h1>
          <p className="text-muted-foreground">
            Manage all information hubs in the Cox's Bazar District Management System
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Hub
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Hub Overview</CardTitle>
          <CardDescription>View and manage all information hubs in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4 justify-between">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search hubs..."
                className="w-full rounded-md border border-input pl-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    <FilterX className="h-4 w-4 mr-2" />
                    Filter
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All</DropdownMenuItem>
                  <DropdownMenuItem>Active</DropdownMenuItem>
                  <DropdownMenuItem>Draft</DropdownMenuItem>
                  <DropdownMenuItem>Archived</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hub</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Content Items</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hubs.map((hub) => (
                  <TableRow key={hub.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className="mr-2">{hub.icon}</div>
                        {hub.name}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{hub.description}</TableCell>
                    <TableCell>
                      {hub.status === "active" ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Active
                        </Badge>
                      ) : hub.status === "draft" ? (
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Draft
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                          Archived
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{hub.contentCount}</TableCell>
                    <TableCell>{hub.lastUpdated}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/hub-management/${hub.id}`}>View Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/hub-management/${hub.id}/edit`}>Edit Hub</Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Archive Hub</DropdownMenuItem>
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
            Showing <strong>12</strong> out of <strong>12</strong> hubs
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
    </div>
  )
}

