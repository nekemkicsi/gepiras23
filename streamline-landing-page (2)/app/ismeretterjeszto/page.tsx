import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Play, BookOpen, Award, Clock } from "lucide-react"

export default function IsmeretterjesztoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Video */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Ismerje meg a gépírás művészetét</h1>
              <p className="text-xl text-muted-foreground">
                Fedezze fel a hatékony gépírás technikáit és történetét oktató videóinkon keresztül
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              {/* Video Player Placeholder - Will be replaced with actual video */}
              <div className="aspect-video bg-black/90 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/90 text-white mb-4 cursor-pointer hover:bg-primary transition-colors">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                  <p className="text-white">Kattintson a lejátszáshoz</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="bg-background p-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">A gépírás története és technikái</h3>
                    <p className="text-sm text-muted-foreground">Oktatóvideó • 12:34</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Jegyzet
                    </Button>
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Lejátszás
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-16 container">
          <Tabs defaultValue="history" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="history">Történet</TabsTrigger>
              <TabsTrigger value="techniques">Technikák</TabsTrigger>
              <TabsTrigger value="exercises">Gyakorlatok</TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>A gépírás története</CardTitle>
                  <CardDescription>Az írógéptől a modern billentyűzetig</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    A gépírás története az 1860-as évek végére nyúlik vissza, amikor az első írógép, a Sholes és Glidden
                    féle gép megjelent 1868-ban. Ez a találmány forradalmasította az irodai munkát és a dokumentumok
                    készítését.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">1868</h4>
                      <p className="text-sm">Az első kereskedelmi írógép megjelenése</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">1870-es évek</h4>
                      <p className="text-sm">Az első gépírás versenyek megrendezése</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">1930-as évek</h4>
                      <p className="text-sm">Elektromos írógépek elterjedése</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="techniques" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gépírási technikák</CardTitle>
                  <CardDescription>Hatékony módszerek a gyors és pontos gépeléshez</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Helyes kéztartás</h4>
                          <p className="text-sm text-muted-foreground">
                            Az ujjak megfelelő pozicionálása az alap billentyűkön (ASDF JKL;)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Vakon gépelés</h4>
                          <p className="text-sm text-muted-foreground">
                            Gépelés a billentyűzetre nézés nélkül, a hatékonyság növelése érdekében
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ritmus és folyamatosság</h4>
                          <p className="text-sm text-muted-foreground">Egyenletes tempó fenntartása a gépelés során</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ergonómia</h4>
                          <p className="text-sm text-muted-foreground">
                            Helyes testtartás és környezet kialakítása a hosszú távú gépeléshez
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exercises" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gyakorlatok kezdőknek</CardTitle>
                  <CardDescription>Egyszerű feladatok a gépírási készség fejlesztéséhez</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Alap ujjgyakorlat</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>5 perc</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">Ismételd a következő karaktereket: asdf jkl; asdf jkl;</p>
                      <Button variant="outline" size="sm">
                        Gyakorlat indítása
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Szógyakorlat</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10 perc</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">Egyszerű szavak gépelése: az, ez, kék, piros, zöld, sárga...</p>
                      <Button variant="outline" size="sm">
                        Gyakorlat indítása
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  )
}
