import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Check, X } from "lucide-react"

const features = [
  {
    name: "Core Features",
    items: [
      {
        feature: "Team members",
        starter: "Up to 5",
        professional: "Up to 20",
        enterprise: "Unlimited",
      },
      {
        feature: "Storage",
        starter: "1GB",
        professional: "10GB",
        enterprise: "Unlimited",
      },
      {
        feature: "API Access",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    name: "Analytics",
    items: [
      {
        feature: "Basic analytics",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Advanced analytics",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Custom reports",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    name: "Support",
    items: [
      {
        feature: "24/7 support",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Priority support",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Dedicated account manager",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
]

export default function PricingComparison() {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
        <p className="text-muted-foreground">
          A detailed comparison of what&apos;s included in each plan
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Features</TableHead>
              <TableHead>Starter</TableHead>
              <TableHead>Professional</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((section) => (
              <>
                <TableRow key={section.name}>
                  <TableCell className="font-medium" colSpan={4}>
                    {section.name}
                  </TableCell>
                </TableRow>
                {section.items.map((item) => (
                  <TableRow key={item.feature}>
                    <TableCell className="text-muted-foreground">
                      {item.feature}
                    </TableCell>
                    <TableCell>
                      {typeof item.starter === "boolean" ? (
                        item.starter ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )
                      ) : (
                        item.starter
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.professional === "boolean" ? (
                        item.professional ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )
                      ) : (
                        item.professional
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.enterprise === "boolean" ? (
                        item.enterprise ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )
                      ) : (
                        item.enterprise
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 