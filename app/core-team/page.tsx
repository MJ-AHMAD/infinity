import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowUpRight } from "lucide-react"

export default function CoreTeamPage() {
  const coreTeamMembers = [
    {
      id: 1,
      name: "Sarah Rahman",
      role: "Deputy Director",
      department: "Tourism Hub",
      email: "sarah.rahman@trustedally.gov.bd",
      phone: "+880 1712 345679",
      responsibilities: [
        "Oversee tourism development initiatives",
        "Coordinate with local tourism stakeholders",
        "Implement sustainable tourism practices",
      ],
      projects: ["Beach Tourism Enhancement", "Eco-Tourism Development", "Cultural Tourism Promotion"],
    },
    {
      id: 2,
      name: "Kamal Hossain",
      role: "Hub Manager",
      department: "Education Hub",
      email: "kamal.hossain@trustedally.gov.bd",
      phone: "+880 1712 345680",
      responsibilities: [
        "Manage educational programs and initiatives",
        "Coordinate with educational institutions",
        "Implement educational technology integration",
      ],
      projects: ["Digital Classroom Initiative", "Teacher Training Program", "Educational Infrastructure Development"],
    },
    {
      id: 3,
      name: "Fatima Begum",
      role: "Hub Manager",
      department: "Health Hub",
      email: "fatima.begum@trustedally.gov.bd",
      phone: "+880 1712 345681",
      responsibilities: [
        "Oversee healthcare facilities and services",
        "Coordinate public health initiatives",
        "Implement health awareness programs",
      ],
      projects: ["Community Health Worker Program", "Mobile Medical Units", "Maternal and Child Health Initiative"],
    },
    {
      id: 4,
      name: "Rafiq Islam",
      role: "Hub Manager",
      department: "Climate Hub",
      email: "rafiq.islam@trustedally.gov.bd",
      phone: "+880 1712 345682",
      responsibilities: [
        "Monitor climate change impacts",
        "Develop adaptation strategies",
        "Implement environmental conservation programs",
      ],
      projects: ["Coastal Erosion Prevention", "Mangrove Restoration", "Climate Resilient Infrastructure"],
    },
    {
      id: 5,
      name: "Masud Khan",
      role: "System Administrator",
      department: "IT",
      email: "masud.khan@trustedally.gov.bd",
      phone: "+880 1712 345683",
      responsibilities: [
        "Maintain IT infrastructure",
        "Ensure data security and privacy",
        "Provide technical support to all hubs",
      ],
      projects: ["Digital Transformation Initiative", "Data Center Modernization", "Cybersecurity Enhancement"],
    },
    {
      id: 6,
      name: "Sabina Yasmin",
      role: "Financial Manager",
      department: "Finance",
      email: "sabina.yasmin@trustedally.gov.bd",
      phone: "+880 1712 345684",
      responsibilities: [
        "Manage district budget allocation",
        "Oversee financial reporting",
        "Ensure compliance with financial regulations",
      ],
      projects: [
        "Financial Management System Implementation",
        "Budget Optimization Initiative",
        "Financial Transparency Program",
      ],
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Core Team</h1>
        <p className="text-muted-foreground">
          Key personnel supporting the Director General in managing Cox's Bazar district initiatives
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Team Structure</CardTitle>
          <CardDescription>Organizational structure of the core management team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-primary">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="MJ Ahmad"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="font-bold">MJ Ahmad</h3>
                  <p className="text-sm text-muted-foreground">Director General</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {coreTeamMembers.slice(0, 3).map((member) => (
                  <div key={member.id} className="flex flex-col items-center">
                    <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary/50">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt={member.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Link href="/director-general">View Director General's Dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coreTeamMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
                <Badge>{member.department}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Key Responsibilities:</h4>
                  <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                    {member.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Current Projects:</h4>
                  <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                    {member.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <span>View full profile</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

