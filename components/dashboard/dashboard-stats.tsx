import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

interface DashboardStatsProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: {
    value: string
    percentage: string
    label: string
    positive: boolean
  }
}

export function DashboardStats({ title, value, description, icon, trend }: DashboardStatsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h4 className="text-3xl font-bold">{value}</h4>
          </div>
          <div className="p-2 bg-muted rounded-full">{icon}</div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && (
            <div className="flex items-center mt-1">
              <div className={`flex items-center ${trend.positive ? "text-green-500" : "text-red-500"}`}>
                {trend.positive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                <span className="text-xs font-medium">{trend.value}</span>
                <span className="text-xs ml-1">({trend.percentage})</span>
              </div>
              <span className="text-xs text-muted-foreground ml-1">{trend.label}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

