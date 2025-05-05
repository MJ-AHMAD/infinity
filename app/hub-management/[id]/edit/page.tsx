import type React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Compass, GraduationCap, Building, Cloud, ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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

export default function EditHub({ params }: { params: { id: string } }) {
  const hub = hubs[params.id]

  if (!hub) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8 gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/hub-management/${hub.id}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">Edit Hub</h1>
          <p className="text-muted-foreground">Update information for {hub.name}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hub Details</CardTitle>
          <CardDescription>Update the information for this hub</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Hub Name</Label>
              <Input id="name" defaultValue={hub.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue={hub.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Input id="description" defaultValue={hub.description} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullDescription">Full Description</Label>
            <Textarea id="fullDescription" defaultValue={hub.fullDescription} rows={5} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="icon">Icon</Label>
              <Select defaultValue="default">
                <SelectTrigger>
                  <SelectValue placeholder="Select an icon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Current Icon</SelectItem>
                  <SelectItem value="compass">Compass</SelectItem>
                  <SelectItem value="graduation-cap">Graduation Cap</SelectItem>
                  <SelectItem value="building">Building</SelectItem>
                  <SelectItem value="cloud">Cloud</SelectItem>
                  <SelectItem value="heart">Heart</SelectItem>
                  <SelectItem value="stethoscope">Stethoscope</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="owner">Owner</Label>
              <Input id="owner" defaultValue={hub.owner} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href={`/hub-management/${hub.id}`}>Cancel</Link>
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

