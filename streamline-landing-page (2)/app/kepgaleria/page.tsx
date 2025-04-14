import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Gallery categories and images
const galleryCategories = [
  {
    id: "vintage",
    name: "Vintage írógépek",
    images: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Régi írógép az 1920-as évekből",
        caption: "Remington írógép, 1920-as évek",
      },
      { src: "/placeholder.svg?height=400&width=600", alt: "Underwood írógép", caption: "Underwood No. 5, 1915" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Royal írógép", caption: "Royal KMM, 1940" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Olivetti írógép", caption: "Olivetti Lettera 22, 1950" },
      { src: "/placeholder.svg?height=400&width=600", alt: "IBM Selectric írógép", caption: "IBM Selectric, 1961" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Hermes írógép", caption: "Hermes 3000, 1958" },
    ],
  },
  {
    id: "modern",
    name: "Modern billentyűzetek",
    images: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Mechanikus billentyűzet",
        caption: "Mechanikus gaming billentyűzet RGB világítással",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Ergonomikus billentyűzet",
        caption: "Ergonomikus osztott billentyűzet",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Kompakt billentyűzet",
        caption: "60%-os kompakt billentyűzet",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Vezeték nélküli billentyűzet",
        caption: "Vékony vezeték nélküli billentyűzet",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Egyedi billentyűzet",
        caption: "Egyedi keycap-ekkel ellátott billentyűzet",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Professzionális billentyűzet",
        caption: "Professzionális irodai billentyűzet",
      },
    ],
  },
  {
    id: "events",
    name: "Gépírás versenyek",
    images: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Gépírás verseny",
        caption: "Nemzetközi gépírás bajnokság, 2023",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Iskolai gépírás verseny",
        caption: "Középiskolai gépírás verseny",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Gyorsasági verseny",
        caption: "Gyorsasági gépírás verseny",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Online gépírás verseny",
        caption: "Online gépírás verseny résztvevői",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Történelmi gépírás verseny",
        caption: "Gépírás verseny az 1950-es években",
      },
      { src: "/placeholder.svg?height=400&width=600", alt: "Díjátadó", caption: "Gépírás verseny díjátadó ceremónia" },
    ],
  },
]

export default function KepgaleriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Képgaléria</h1>
          <p className="text-center text-muted-foreground mb-12">
            Fedezze fel a gépírás világát képekben - az írógépek történetétől a modern billentyűzetekig
          </p>

          <Tabs defaultValue="vintage" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {galleryCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images.map((image, index) => (
                    <div key={index} className="group">
                      <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-muted-foreground">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 bg-primary/5 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Szeretné megosztani saját képeit?</h2>
            <p className="mb-4">
              Ha van érdekes képe régi írógépekről, különleges billentyűzetekről vagy gépírással kapcsolatos
              eseményekről, küldje el nekünk, és megjelenítjük a galériánkban!
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                Küldje el képeit a <span className="font-medium">galeria@gepiras.hu</span> címre
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
