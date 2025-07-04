import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import PreviewImage from './../../assets/NoImage.png'
import axios from "axios"

export default function EditProfile() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState("")
  const [profile,setProfile]=useState([])

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhd2RhMzIwMDRAZ21haWwuY29tIiwiX2lkIjoiNjg1ZTkyMDdjYzU0YWE0ZDIxMDgxZmQ2IiwiaWF0IjoxNzUxMjg2NzA3LCJleHAiOjE3NTEzNzMxMDd9.4ymaDJmYbdfKHdnZnApiGjI_xpA4Au5lolV88j40hZ8"
  useEffect(()=>{
      const getProfile=async()=>{
        const response=await axios.get('https://edu-master-delta.vercel.app/user',
          {headers:{
             'token': token          }}
        )
        console.log(response.data.data)
        setProfile(response.data.data)
      }
      getProfile()
  },[])

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* User Info */}
      <Card>
      
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <Input className=" border-2 py-3 mt-2 border-gray-200 placeholder:text-gray-400" placeholder="John"  />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input className=" border-2 py-3 mt-2 border-gray-200 placeholder:text-gray-400" placeholder="Doe" />
          </div>
          <div>
            <Label>Phone</Label>
            <Input className=" border-2 py-3 mt-2 border-gray-200 placeholder:text-gray-400" type="tel" placeholder="+1 234 567 8901" />
          </div>
          <div>
            <Label>Email</Label>
            <Input className=" border-2 py-3 mt-2 border-gray-200 placeholder:text-gray-400" type="email" placeholder="example@mail.com" />
          </div>
         
        </CardContent>
      </Card>

  

      {/* Save Button */}
      <div className="text-right">
        <Button className="px-6 bg-blue-950 text-white mt-2 hover:bg-blue-900">Save Changes</Button>
      </div>
    </div>
  )
}
