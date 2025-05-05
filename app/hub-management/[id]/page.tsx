import type React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Compass, GraduationCap, Building, Cloud, Users, ArrowLeft, Edit, Clock, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Hub {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  status: "active" | "draft" | "archived"
  contentCount: number
  lastUpdated: string
  createdAt: string
  owner: string
  fullDescription: string
}

// This would typically come from a database, but for demo we'll use a static array
const hubs: Record<string, Hub> = {
  "1": {
    id: "1",
    name: "Tourist Hub",
    icon: <Compass className="h-5 w-5" />,
    description: "Explore the beautiful beaches and attractions",
    fullDescription:
      "The Tourist Hub provides comprehensive information about Cox's Bazar's beautiful beaches, attractions, accommodations, and activities for visitors. It showcases the rich cultural heritage, natural beauty, and hospitality services available in the region to promote sustainable tourism.",
    status: "active",
    contentCount: 124,
    lastUpdated: "2023-11-12",
    createdAt: "2022-05-10",
    owner: "Tourism Department",
  },
  "2": {
    id: "2",
    name: "Education Hub",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Educational institutions and initiatives",
    fullDescription:
      "The Education Hub centralizes information about all educational institutions, programs, scholarships, and learning resources in Cox's Bazar district. It aims to improve access to quality education for all residents through coordination between schools, colleges, universities, and non-formal education providers.",
    status: "active",
    contentCount: 87,
    lastUpdated: "2023-11-10",
    createdAt: "2022-06-15",
    owner: "Education Department",
  },
  "3": {
    id: "3",
    name: "Economic Hub",
    icon: <Building className="h-5 w-5" />,
    description: "Economic activities and development",
    fullDescription:
      "The Economic Hub facilitates information about local businesses, industries, investment opportunities, and economic development initiatives in Cox's Bazar. It provides market insights, connects entrepreneurs with resources, and promotes sustainable economic growth across various sectors of the local economy.",
    status: "active",
    contentCount: 65,
    lastUpdated: "2023-11-08",
    createdAt: "2022-07-22",
    owner: "Commerce Department",
  },
  "4": {
    id: "4",
    name: "Climate Hub",
    icon: <Cloud className="h-5 w-5" />,
    description: "Climate information and initiatives",
    fullDescription:
      "The Climate Hub offers comprehensive information on local climate patterns, environmental protection initiatives, and climate resilience projects in Cox's Bazar. It serves as a knowledge center for climate adaptation strategies, early warning systems, and environmental conservation efforts.",
    status: "active",
    contentCount: 42,
    lastUpdated: "2023-11-05",
    createdAt: "2022-08-30",
    owner: "Environmental Affairs",
  },
  // More hubs would be defined here in a real application
}

// Sample content items for demonstration
const contentItems = [
  {
    id: "1",
    title: "Beach Resorts Overview",
    type: "Article",
    author: "Tourism Team",
    date: "2023-10-15",
    status: "Published",
  },
  {
    id: "2",
    title: "Marine Drive Tour Guide",
    type: "Guide",
    author: "Local Experts",
    date: "2023-09-22",
    status: "Published",
  },
  {
    id: "3",
    title: "Seasonal Tourist Attractions",
    type: "List",
    author: "Tourism Team",
    date: "2023-10-05",
    status: "Draft",
  },
  {
    id: "4",
    title: "Hotels and Accommodations",
    type: "Directory",
    author: "Hospitality Association",
    date: "2023-08-18",
    status: "Published",
  },
  {
    id: "5",
    title: "Local Cuisine Guide",
    type: "Article",
    author: "Food Critics",
    date: "2023-09-30",
    status: "Review",
  },
]

export default function HubDetails({ params }: { params: { id: string } }) {
  const hub = hubs[params.id]

  if (!hub) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-50 text-green-700 border-green-200"
      case "draft":
        return "bg-amber-50 text-amber-700 border-amber-200"
      case "archived":
        return "bg-gray-50 text-gray-700 border-gray-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8 gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/hub-management">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <span className="mr-2">{hub.icon}</span>
            {hub.name}
          </h1>
          <p className="text-muted-foreground">{hub.description}</p>
        </div>
        <div className="ml-auto">
          <Button variant="outline" className="mr-2" asChild>
            <Link href={`/hub-management/${hub.id}/edit`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Hub
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className={getStatusColor(hub.status)}>
              {hub.status.charAt(0).toUpperCase() + hub.status.slice(1)}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Content Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{hub.contentCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>{hub.lastUpdated}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Hub Information</CardTitle>
          <CardDescription>Detailed information about the {hub.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{hub.fullDescription}</p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Created On</h3>
                <p className="text-muted-foreground flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {hub.createdAt}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Managed By</h3>
                <p className="text-muted-foreground flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {hub.owner}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Content Types</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="secondary">Articles</Badge>
                  <Badge variant="secondary">Guides</Badge>
                  <Badge variant="secondary">Images</Badge>
                  <Badge variant="secondary">Maps</Badge>
                  <Badge variant="secondary">Videos</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="content">
        <TabsList className="mb-4">
          <TabsTrigger value="content">Content Items</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Content Items</CardTitle>
                <Button size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Add Content
                </Button>
              </div>
              <CardDescription>Manage content items in this hub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="py-3 px-4 text-left font-medium">Title</th>
                      <th className="py-3 px-4 text-left font-medium">Type</th>
                      <th className="py-3 px-4 text-left font-medium">Author</th>
                      <th className="py-3 px-4 text-left font-medium">Date</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                      <th className="py-3 px-4 text-left font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-3 px-4">{item.title}</td>
                        <td className="py-3 px-4">{item.type}</td>
                        <td className="py-3 px-4">{item.author}</td>
                        <td className="py-3 px-4">{item.date}</td>
                        <td className="py-3 px-4">
                          <Badge
                            variant="outline"
                            className={
                              item.status === "Published"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : item.status === "Draft"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-blue-50 text-blue-700 border-blue-200"
                            }
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Hub Analytics</CardTitle>
              <CardDescription>View analytics data for this hub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6">
                <p className="text-muted-foreground">Analytics data will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Hub Settings</CardTitle>
              <CardDescription>Configure settings for this hub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6">
                <p className="text-muted-foreground">Hub settings options will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

