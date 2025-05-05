"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsUpdates() {
  const [activeTab, setActiveTab] = useState("news")

  const newsItems = [
    {
      title: "New Educational Center Opens in Southern Cox's Bazar",
      date: "March 15, 2023",
      category: "Education",
      excerpt:
        "The new center will provide educational resources to over 500 children in the region, offering modern facilities and trained educators.",
      link: "#",
    },
    {
      title: "Coastal Cleanup Initiative Removes 5 Tons of Plastic",
      date: "February 28, 2023",
      category: "Environment",
      excerpt:
        "Volunteers from across the district participated in the largest coastal cleanup event, focusing on preserving marine ecosystems.",
      link: "#",
    },
    {
      title: "Digital Literacy Program Reaches 10,000 Students Milestone",
      date: "January 20, 2023",
      category: "Technology",
      excerpt:
        "The program has successfully trained 10,000 students in essential digital skills, preparing them for the modern workforce.",
      link: "#",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual Education Conference",
      date: "April 15-17, 2023",
      location: "Cox's Bazar Convention Center",
      description:
        "Join educators, policymakers, and community leaders to discuss the future of education in Cox's Bazar.",
      link: "#",
    },
    {
      title: "Community Health Workshop",
      date: "May 5, 2023",
      location: "Central Community Hall",
      description: "Learn about preventive healthcare measures and wellness practices for families and communities.",
      link: "#",
    },
    {
      title: "Youth Leadership Summit",
      date: "June 10-12, 2023",
      location: "Cox's Bazar University",
      description: "Empowering young leaders with skills and knowledge to drive positive change in their communities.",
      link: "#",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our recent activities, news, and upcoming events
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="news">News & Announcements</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm line-clamp-3">{item.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={item.link} className="flex items-center">
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/news">View All News</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="text-sm text-gray-500 mt-1">{event.location}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm line-clamp-3">{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={event.link} className="flex items-center">
                        Event details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

