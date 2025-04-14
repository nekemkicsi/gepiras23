import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function JelentkezesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Jelentkezés</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Registration Form */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Regisztrációs űrlap</CardTitle>
              <CardDescription>Töltsd ki az alábbi űrlapot a gépírás kurzusra való jelentkezéshez.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Teljes név</Label>
                <Input id="name" placeholder="Add meg a neved" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email cím</Label>
                <Input id="email" type="email" placeholder="pelda@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefonszám</Label>
                <Input id="phone" placeholder="+36 30 123 4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Gépírási szint</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Válassz szintet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Kezdő</SelectItem>
                    <SelectItem value="intermediate">Középhaladó</SelectItem>
                    <SelectItem value="advanced">Haladó</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Egyéb megjegyzés</Label>
                <Textarea id="message" placeholder="Ha van bármilyen kérdésed vagy megjegyzésed..." />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Jelentkezés elküldése</Button>
            </CardFooter>
          </Card>

          {/* QR Code Section */}
          <div className="flex flex-col items-center space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Jelentkezz QR kóddal</CardTitle>
                <CardDescription>Olvasd be a QR kódot a gyors jelentkezéshez mobilodon.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-8">
                <div className="relative w-64 h-64 border-8 border-primary/10 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=250"
                    alt="Jelentkezési QR kód"
                    width={250}
                    height={250}
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center text-center text-sm text-muted-foreground">
                A QR kód beolvasása után közvetlenül a mobil jelentkezési felületre jutsz.
              </CardFooter>
            </Card>

            <Card className="w-full bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Miért érdemes jelentkezni?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Professzionális oktatók vezetésével tanulhatsz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Rugalmas időbeosztás, online és személyes órák</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Személyre szabott fejlesztési terv</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Hivatalos tanúsítvány a kurzus elvégzéséről</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
