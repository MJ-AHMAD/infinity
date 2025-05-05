import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  MoreHorizontal,
  Plus,
  Search,
  FileText,
  ImageIcon,
  FileCode,
  FileSpreadsheet,
  Video,
  LinkIcon,
  ChevronDown,
  Eye,
  Pencil,
  Copy,
  Trash,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContentItem {
  id: string
  title: string
  type: "page" | "article" | "image" | "document" | "data" | "video" | "link"
  hub: string
  author: string
  status: "published" | "draft" | "review" | "archived"
  lastUpdated: string
}

const contentItems: ContentItem[] = [
  {
    id: "1",
    title: "Tourist Hub Homepage",
    type: "page",
    hub: "Tourist Hub",
    author: "Admin User",
    status: "published",
    lastUpdated: "2023-11-15",
  },
  {
    id: "2",
    title: "Popular Beach Attractions",
    type: "article",
    hub: "Tourist Hub",
    author: "Content Editor",
    status: "published",
    lastUpdated: "2023-11-14",
  },
  {
    id: "3",
    title: "Beach Aerial View",
    type: "image",
    hub: "Tourist Hub",
    author: "Media Manager",
    status: "published",
    lastUpdated: "2023-11-13",
  },
  {
    id: "4",
    title: "Educational Institutions Directory",
    type: "data",
    hub: "Education Hub",
    author: "Data Analyst",
    status: "published",
    lastUpdated: "2023-11-12",
  },
  {
    id: "5",
    title: "Scholarship Programs",
    type: "article",
    hub: "Education Hub",
    author: "Content Editor",
    status: "draft",
    lastUpdated: "2023-11-11",
  },
  {
    id: "6",
    title: "Climate Change Impact Report",
    type: "document",
    hub: "Climate Hub",
    author: "Research Team",
    status: "review",
    lastUpdated: "2023-11-10",
  },
  {
    id: "7",
    title: "Monthly Weather Statistics",
    type: "data",
    hub: "Climate Hub",
    author: "Data Analyst",
    status: "published",
    lastUpdated: "2023-11-09",
  },
  {
    id: "8",
    title: "Marine Conservation Efforts",
    type: "article",
    hub: "Marine Resource Hub",
    author: "Content Editor",
    status: "published",
    lastUpdated: "2023-11-08",
  },
  {
    id: "9",
    title: "Healthcare Facilities Map",
    type: "page",
    hub: "Health Hub",
    author: "Admin User",
    status: "published",
    lastUpdated: "2023-11-07",
  },
  {
    id: "10",
    title: "Tourism Promotional Video",
    type: "video",
    hub: "Tourist Hub",
    author: "Media Manager",
    status: "published",
    lastUpdated: "2023-11-06",
  },
  {
    id: "11",
    title: "School Enrollment Stats",
    type: "data",
    hub: "Education Hub",
    author: "Data Analyst",
    status: "draft",
    lastUpdated: "2023-11-05",
  },
  {
    id: "12",
    title: "Community Center Locations",
    type: "page",
    hub: "Community Hub",
    author: "Admin User",
    status: "review",
    lastUpdated: "2023-11-04",
  },
]

const getTypeIcon = (type: ContentItem["type"]) => {
  switch (type) {
    case "page":
      return <FileText className="h-4 w-4" />
    case "article":
      return <FileText className="h-4 w-4" />
    case "image":
      return <ImageIcon className="h-4 w-4" />
    case "document":
      return <FileCode className="h-4 w-4" />
    case "data":
      return <FileSpreadsheet className="h-4 w-4" />
    case "video":
      return <Video className="h-4 w-4" />
    case "link":
      return <LinkIcon className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

export default function ContentManager() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Content Manager</h1>
          <p className="text-muted-foreground">Manage all content across the Cox's Bazar District Management System</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Content
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="review">In Review</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <div className="flex gap-2 items-center">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search content..."
                className="w-full rounded-md border border-input pl-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  Hub
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Hubs</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Tourist Hub</DropdownMenuItem>
                <DropdownMenuItem>Education Hub</DropdownMenuItem>
                <DropdownMenuItem>Climate Hub</DropdownMenuItem>
                <DropdownMenuItem>Health Hub</DropdownMenuItem>
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  Content Type
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Types</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Pages</DropdownMenuItem>
                <DropdownMenuItem>Articles</DropdownMenuItem>
                <DropdownMenuItem>Images</DropdownMenuItem>
                <DropdownMenuItem>Documents</DropdownMenuItem>
                <DropdownMenuItem>Data</DropdownMenuItem>
                <DropdownMenuItem>Videos</DropdownMenuItem>
                <DropdownMenuItem>Links</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="all">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>All Content</CardTitle>
              <CardDescription>Manage content items across all hubs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Hub</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contentItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getTypeIcon(item.type)}
                            <span className="capitalize">{item.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{item.hub}</TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>
                          {item.status === "published" ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Published
                            </Badge>
                          ) : item.status === "draft" ? (
                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                              Draft
                            </Badge>
                          ) : item.status === "review" ? (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              In Review
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                              Archived
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="h-4 w-4 mr-2" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="h-4 w-4 mr-2" />
                                Delete
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
                Showing <strong>12</strong> out of <strong>120</strong> content items
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardHeader>
              <CardTitle>Published Content</CardTitle>
              <CardDescription>View and manage all published content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Published content list will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardHeader>
              <CardTitle>Draft Content</CardTitle>
              <CardDescription>View and manage content in draft status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Draft content list will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>Content In Review</CardTitle>
              <CardDescription>View and manage content pending review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Content in review will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle>Archived Content</CardTitle>
              <CardDescription>View and manage archived content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                Archived content list will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

