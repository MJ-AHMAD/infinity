import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, FileText, MessageCircle, HelpCircle, Book, Mail, Map } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"

export default function HelpPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Help & Support</h2>
        <Link href="/sitemap" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
          <Map className="h-4 w-4" />
          View Sitemap
        </Link>
      </div>

      <div className="relative w-full max-w-xl mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for help topics..."
          className="pl-10 pr-4 py-6 text-base rounded-md border focus:ring-2"
        />
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="faq">
            <div className="flex flex-col items-center gap-1">
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="guides">
            <div className="flex flex-col items-center gap-1">
              <Book className="h-4 w-4" />
              <span>Guides</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="docs">
            <div className="flex flex-col items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Documentation</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="sitemap">
            <div className="flex flex-col items-center gap-1">
              <Map className="h-4 w-4" />
              <span>Sitemap</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="contact">
            <div className="flex flex-col items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>Contact</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions and answers to help you quickly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">How do I add new content to a hub?</h3>
                <p className="text-sm text-muted-foreground">
                  Go to the Content Manager section, click on "Add New Content" and select the hub where you want to
                  publish. Fill in the required fields and click "Publish" when ready.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">How do I manage user permissions?</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate to User Management, select the user you want to modify, and click on "Edit Permissions". You
                  can then assign or revoke specific roles and capabilities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">How do I create a new hub?</h3>
                <p className="text-sm text-muted-foreground">
                  Go to Hub Management, click "Create New Hub", provide the necessary details, and configure the
                  structure. Once saved, it will be available in the main navigation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">How do I track activity on the platform?</h3>
                <p className="text-sm text-muted-foreground">
                  The Analytics section provides comprehensive data about user engagement, content performance, and
                  other metrics. You can also set up custom reports from the Dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sitemap" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Sitemap</CardTitle>
              <CardDescription>Complete overview of all pages and sections in the management system.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Main Dashboard</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <Link href="/" className="hover:underline">
                        Dashboard Home
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <Link href="/analytics" className="hover:underline">
                        Analytics
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <Link href="/settings" className="hover:underline">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Hub Management</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <Link href="/hub-management" className="hover:underline">
                        Hub Overview
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <Link href="/hub-management/create" className="hover:underline">
                        Create Hub
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Content Management</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <Link href="/content-manager" className="hover:underline">
                        Content Overview
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <Link href="/content-manager/create" className="hover:underline">
                        Create Content
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">User Management</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <Link href="/user-management" className="hover:underline">
                        User Overview
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <Link href="/user-management/create" className="hover:underline">
                        Create User
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Administration</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <Link href="/director-general" className="hover:underline">
                        Director General Dashboard
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <Link href="/core-team" className="hover:underline">
                        Core Team
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <Link href="/task-management" className="hover:underline">
                        Task Management
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Support</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                      <Link href="/help" className="hover:underline">
                        Help & Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Reach out to our team for personalized help with your issues.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your issue about?" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    rows={5}
                    className="w-full p-2 border rounded-md"
                    placeholder="Please describe your issue in detail..."
                  ></textarea>
                </div>
                <div className="grid gap-2">
                  <Label>Priority</Label>
                  <select className="p-2 rounded-md border">
                    <option>Low</option>
                    <option selected>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Submit Ticket
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

