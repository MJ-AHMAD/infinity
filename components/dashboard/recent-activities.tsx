import { CalendarClock, FileText, Edit, PlusCircle, Trash2 } from "lucide-react"

type ActivityType = "create" | "update" | "delete" | "publish"

interface Activity {
  id: string
  type: ActivityType
  user: string
  item: string
  hub: string
  time: string
}

const recentActivities: Activity[] = [
  {
    id: "1",
    type: "create",
    user: "Admin User",
    item: "New climate data report",
    hub: "Climate Hub",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "update",
    user: "Editor",
    item: "Tourist attraction details",
    hub: "Tourist Hub",
    time: "4 hours ago",
  },
  {
    id: "3",
    type: "publish",
    user: "Content Manager",
    item: "Marine conservation guidelines",
    hub: "Marine Resource Hub",
    time: "6 hours ago",
  },
  {
    id: "4",
    type: "delete",
    user: "Admin User",
    item: "Outdated event listing",
    hub: "Community Hub",
    time: "8 hours ago",
  },
  {
    id: "5",
    type: "update",
    user: "Editor",
    item: "Healthcare facility information",
    hub: "Health Hub",
    time: "10 hours ago",
  },
]

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "create":
      return <PlusCircle className="h-4 w-4 text-green-500" />
    case "update":
      return <Edit className="h-4 w-4 text-blue-500" />
    case "delete":
      return <Trash2 className="h-4 w-4 text-red-500" />
    case "publish":
      return <FileText className="h-4 w-4 text-purple-500" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

export function RecentActivities() {
  return (
    <div className="space-y-4">
      {recentActivities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user}{" "}
              <span className="text-muted-foreground font-normal">
                {activity.type === "create"
                  ? "created"
                  : activity.type === "update"
                    ? "updated"
                    : activity.type === "delete"
                      ? "deleted"
                      : "published"}
              </span>{" "}
              {activity.item}
            </p>
            <p className="text-xs text-muted-foreground">
              In <span className="font-medium">{activity.hub}</span>
            </p>
            <div className="flex items-center pt-1">
              <CalendarClock className="h-3 w-3 text-muted-foreground mr-1" />
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

