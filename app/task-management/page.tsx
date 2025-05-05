"use client"

import { useState } from "react"
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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  MoreHorizontal,
  Plus,
  CheckCircle2,
  Circle,
  AlarmClock,
  XCircle,
  Calendar,
  ChevronDown,
  Clock,
  CalendarDays,
} from "lucide-react"

type TaskStatus = "todo" | "in-progress" | "review" | "completed" | "cancelled"
type TaskPriority = "low" | "medium" | "high" | "urgent"

interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  assignee: {
    name: string
    avatar?: string
  }
  hub: string
  dueDate: string
  created: string
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Update Tourist Hub homepage content",
    description: "Refresh the main banner images and update the seasonal attractions section",
    status: "completed",
    priority: "high",
    assignee: {
      name: "Content Editor",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Tourist Hub",
    dueDate: "2023-11-10",
    created: "2023-11-05",
  },
  {
    id: "2",
    title: "Publish monthly climate data report",
    description: "Compile and publish the climate statistics for October 2023",
    status: "review",
    priority: "medium",
    assignee: {
      name: "Climate Analyst",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Climate Hub",
    dueDate: "2023-11-15",
    created: "2023-11-01",
  },
  {
    id: "3",
    title: "Create educational institutions directory",
    description: "Compile a comprehensive list of schools and colleges in Cox's Bazar district",
    status: "in-progress",
    priority: "medium",
    assignee: {
      name: "Education Hub Manager",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Education Hub",
    dueDate: "2023-11-20",
    created: "2023-11-03",
  },
  {
    id: "4",
    title: "Update healthcare facilities map",
    description: "Add new clinics and update the information for existing hospitals",
    status: "todo",
    priority: "high",
    assignee: {
      name: "Health Hub Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Health Hub",
    dueDate: "2023-11-25",
    created: "2023-11-08",
  },
  {
    id: "5",
    title: "Fix broken links on Marine Resources page",
    description: "Identify and fix all broken links in the marine conservation section",
    status: "todo",
    priority: "urgent",
    assignee: {
      name: "Web Admin",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Marine Resource Hub",
    dueDate: "2023-11-12",
    created: "2023-11-09",
  },
  {
    id: "6",
    title: "Create social initiatives impact report",
    description: "Compile data and create a report on the impact of community programs",
    status: "in-progress",
    priority: "high",
    assignee: {
      name: "Social Initiatives Coordinator",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Social Initiatives",
    dueDate: "2023-11-30",
    created: "2023-11-07",
  },
  {
    id: "7",
    title: "Update infrastructure project timelines",
    description: "Review and update the completion timelines for ongoing projects",
    status: "review",
    priority: "medium",
    assignee: {
      name: "Infrastructure Hub Manager",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Infrastructure Hub",
    dueDate: "2023-11-18",
    created: "2023-11-04",
  },
  {
    id: "8",
    title: "Archive outdated community event listings",
    description: "Review and archive past community events that are no longer relevant",
    status: "cancelled",
    priority: "low",
    assignee: {
      name: "Content Editor",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    hub: "Community Hub",
    dueDate: "2023-11-05",
    created: "2023-10-28",
  },
]

const getStatusBadge = (status: TaskStatus) => {
  switch (status) {
    case "todo":
      return (
        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 flex items-center gap-1">
          <Circle className="h-3 w-3" />
          <span>To Do</span>
        </Badge>
      )
    case "in-progress":
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
          <AlarmClock className="h-3 w-3" />
          <span>In Progress</span>
        </Badge>
      )
    case "review":
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>In Review</span>
        </Badge>
      )
    case "completed":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" />
          <span>Completed</span>
        </Badge>
      )
    case "cancelled":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
          <XCircle className="h-3 w-3" />
          <span>Cancelled</span>
        </Badge>
      )
    default:
      return null
  }
}

const getPriorityBadge = (priority: TaskPriority) => {
  switch (priority) {
    case "low":
      return (
        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
          Low
        </Badge>
      )
    case "medium":
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Medium
        </Badge>
      )
    case "high":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          High
        </Badge>
      )
    case "urgent":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          Urgent
        </Badge>
      )
    default:
      return null
  }
}

export default function TaskManagement() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Task Management</h1>
          <p className="text-muted-foreground">
            Manage and track tasks across the Cox's Bazar District Management System
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="all">All Tasks</TabsTrigger>
                <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Filter
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All Hubs</DropdownMenuItem>
                  <DropdownMenuItem>Priority</DropdownMenuItem>
                  <DropdownMenuItem>Assignee</DropdownMenuItem>
                  <DropdownMenuItem>Due Date</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>All Tasks</CardTitle>
                  <CardDescription>View and manage all tasks across the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <Card
                        key={task.id}
                        className={`cursor-pointer hover:border-primary/50 transition-colors ${
                          selectedTask?.id === task.id ? "border-primary" : ""
                        }`}
                        onClick={() => setSelectedTask(task)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <h4 className="font-medium">{task.title}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">{task.description}</p>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                <DropdownMenuItem>Change Status</DropdownMenuItem>
                                <DropdownMenuItem>Reassign</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Delete Task</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                                <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">{task.hub}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {getPriorityBadge(task.priority)}
                              {getStatusBadge(task.status)}
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-3 w-3" />
                              <span>Due: {task.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Created: {task.created}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>8</strong> out of <strong>24</strong> tasks
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

            <TabsContent value="my-tasks">
              <Card>
                <CardHeader>
                  <CardTitle>My Tasks</CardTitle>
                  <CardDescription>Tasks assigned to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                    Your assigned tasks will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks with upcoming deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                    Upcoming tasks will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Tasks</CardTitle>
                  <CardDescription>Tasks that have been completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                    Completed tasks will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
              <CardDescription>View and edit task information</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedTask ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">{selectedTask.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{selectedTask.description}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-sm">
                      <span className="font-medium">Status:</span> {getStatusBadge(selectedTask.status)}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Priority:</span> {getPriorityBadge(selectedTask.priority)}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Hub:</span> <span>{selectedTask.hub}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Assignee:</span>{" "}
                      <div className="flex items-center gap-2 mt-1">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={selectedTask.assignee.avatar} alt={selectedTask.assignee.name} />
                          <AvatarFallback>{selectedTask.assignee.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{selectedTask.assignee.name}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Due Date:</span> <span>{selectedTask.dueDate}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Created:</span> <span>{selectedTask.created}</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {selectedTask.status === "completed"
                          ? "100%"
                          : selectedTask.status === "review"
                            ? "75%"
                            : selectedTask.status === "in-progress"
                              ? "50%"
                              : selectedTask.status === "todo"
                                ? "0%"
                                : "0%"}
                      </span>
                    </div>
                    <Progress
                      value={
                        selectedTask.status === "completed"
                          ? 100
                          : selectedTask.status === "review"
                            ? 75
                            : selectedTask.status === "in-progress"
                              ? 50
                              : selectedTask.status === "todo"
                                ? 0
                                : 0
                      }
                      className="h-2"
                    />
                  </div>

                  <div className="pt-4 flex gap-2">
                    <Button className="w-full">Edit Task</Button>
                    <Button variant="outline" className="w-full">
                      Change Status
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center text-muted-foreground">
                  <p>Select a task to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

