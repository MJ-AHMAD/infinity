"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Eye,
  Settings,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DirectorGeneralPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Director General Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive oversight of all district management activities</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>MJ Ahmad</CardTitle>
            <CardDescription>Director General</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/10">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="MJ Ahmad"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Leading the Cox's Bazar District Management System since 2020
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>

              <div className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Hub Oversight</span>
                  <Badge>12/12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Team Management</span>
                  <Badge>24 Members</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Projects</span>
                  <Badge>18 Active</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
            <CardDescription>Comprehensive status of all district management activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 rounded-lg border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Total Staff</p>
                    <p className="text-2xl font-bold">248</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Active Projects</p>
                    <p className="text-2xl font-bold">18</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Pending Approvals</span>
                  </div>
                  <Badge variant="outline">12</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Completed Tasks</span>
                  </div>
                  <Badge variant="outline">87</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Upcoming Deadlines</span>
                  </div>
                  <Badge variant="outline">5</Badge>
                </div>
              </div>

              <div className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/core-team" className="flex items-center justify-center">
                    <Eye className="mr-2 h-4 w-4" />
                    View Core Team
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="hubs" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hubs">Hub Status</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="hubs" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hub Performance Overview</CardTitle>
              <CardDescription>Status and performance metrics for all district hubs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Hub performance metrics would go here */}
                <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                  <BarChart className="h-16 w-16" />
                  <span className="ml-2">Hub performance visualization</span>
                </div>

                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <span>View detailed hub reports</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Status</CardTitle>
              <CardDescription>Overview of all district projects and initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Project status would go here */}
                <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                  <BarChart className="h-16 w-16" />
                  <span className="ml-2">Project status visualization</span>
                </div>

                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <span>View all projects</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
              <CardDescription>Financial overview and budget allocation across hubs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Budget allocation would go here */}
                <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                  <BarChart className="h-16 w-16" />
                  <span className="ml-2">Budget allocation visualization</span>
                </div>

                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <span>View financial reports</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Executive Reports</CardTitle>
              <CardDescription>Comprehensive reports for executive decision making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Executive reports would go here */}
                <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                  <FileText className="h-16 w-16" />
                  <span className="ml-2">Executive reports will appear here</span>
                </div>

                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <span>Generate new report</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

