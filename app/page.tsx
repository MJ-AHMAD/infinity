"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  BarChart3,
  Users,
  ArrowUpRight,
  Inbox,
  CheckCheck,
} from "lucide-react"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { ProjectProgress } from "@/components/dashboard/project-progress"
import { LoginForm } from "@/components/auth/login-form"

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)

  const handleLoginSuccess = (userData: any) => {
    setCurrentUser(userData)
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Admin Dashboard</CardTitle>
              <CardDescription className="text-center">Cox's Bazar District Management System</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm onSuccess={handleLoginSuccess} />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Content area */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome, {currentUser?.name} ({currentUser?.role})
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardStats
              title="Total Hubs"
              value="12"
              description="Active information hubs"
              icon={<BarChart className="h-5 w-5 text-muted-foreground" />}
              trend={{
                value: "+2",
                percentage: "20%",
                label: "vs. last quarter",
                positive: true,
              }}
            />
            <DashboardStats
              title="Active Users"
              value="1,248"
              description="Last 30 days"
              icon={<Users className="h-5 w-5 text-muted-foreground" />}
              trend={{
                value: "+189",
                percentage: "18%",
                label: "vs. last month",
                positive: true,
              }}
            />
            <DashboardStats
              title="Content Updates"
              value="324"
              description="Last 30 days"
              icon={<BarChart3 className="h-5 w-5 text-muted-foreground" />}
              trend={{
                value: "-12",
                percentage: "4%",
                label: "vs. last month",
                positive: false,
              }}
            />
            <DashboardStats
              title="Tasks Completed"
              value="85%"
              description="Team efficiency"
              icon={<CheckCheck className="h-5 w-5 text-muted-foreground" />}
              trend={{
                value: "+7%",
                percentage: "9%",
                label: "vs. last month",
                positive: true,
              }}
            />
          </div>

          <Tabs defaultValue="overview" className="mt-8 space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Hub Activity</CardTitle>
                    <CardDescription>Content updates and user interactions across hubs</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[240px] w-full flex items-center justify-center text-muted-foreground">
                      <AreaChart className="h-16 w-16" />
                      <span className="ml-2 text-sm">Analytics visualization</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Hub Usage Distribution</CardTitle>
                    <CardDescription>Traffic distribution by hub</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[240px] w-full flex items-center justify-center text-muted-foreground">
                      <PieChart className="h-16 w-16" />
                      <span className="ml-2 text-sm">Distribution chart</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest activity across the system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivities />
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full flex items-center gap-1">
                      <span>View all activity</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Project Progress</CardTitle>
                    <CardDescription>Status of ongoing projects and initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectProgress />
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full flex items-center gap-1">
                      <span>View project details</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Detailed performance metrics and user analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                    <LineChart className="h-16 w-16" />
                    <span className="ml-2">Detailed analytics will appear here</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>System reports and exported data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                    <BarChart className="h-16 w-16" />
                    <span className="ml-2">Generated reports will appear here</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>System alerts and important notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex flex-col items-center justify-center text-muted-foreground">
                    <Inbox className="h-16 w-16" />
                    <span className="mt-2">Your notifications will appear here</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

