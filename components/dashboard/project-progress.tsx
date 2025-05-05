import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  name: string
  progress: number
  hub: string
  status: "on-track" | "at-risk" | "behind" | "completed"
  deadline: string
}

const projects: Project[] = [
  {
    id: "1",
    name: "Tourist Hub Digital Transformation",
    progress: 75,
    hub: "Tourist Hub",
    status: "on-track",
    deadline: "Dec 15, 2023",
  },
  {
    id: "2",
    name: "Education Hub Content Update",
    progress: 40,
    hub: "Education Hub",
    status: "at-risk",
    deadline: "Nov 30, 2023",
  },
  {
    id: "3",
    name: "Climate Data Integration",
    progress: 90,
    hub: "Climate Hub",
    status: "on-track",
    deadline: "Dec 5, 2023",
  },
  {
    id: "4",
    name: "Healthcare Facility Mapping",
    progress: 60,
    hub: "Health Hub",
    status: "behind",
    deadline: "Nov 20, 2023",
  },
  {
    id: "5",
    name: "Marine Conservation Initiative",
    progress: 100,
    hub: "Marine Resource Hub",
    status: "completed",
    deadline: "Nov 10, 2023",
  },
]

export function ProjectProgress() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium">{project.name}</p>
              <p className="text-xs text-muted-foreground">{project.hub}</p>
            </div>
            <StatusBadge status={project.status} />
          </div>
          <div className="flex items-center gap-2">
            <Progress value={project.progress} className="h-2" />
            <span className="text-xs font-medium">{project.progress}%</span>
          </div>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Target: {project.deadline}</span>
            <span>{project.progress === 100 ? "Completed" : "In progress"}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function StatusBadge({ status }: { status: Project["status"] }) {
  switch (status) {
    case "on-track":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          On Track
        </Badge>
      )
    case "at-risk":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          At Risk
        </Badge>
      )
    case "behind":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          Behind
        </Badge>
      )
    case "completed":
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Completed
        </Badge>
      )
    default:
      return null
  }
}

