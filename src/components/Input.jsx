import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({label,type = "text"}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={label}>{label.charAt(0).toUpperCase() + label.slice(1)}</Label>
      <Input type={type} id={label} placeholder={label} />
    </div>
  )
}
