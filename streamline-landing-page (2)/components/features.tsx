import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "Versenyek",
    description: "Az első verseny 1870-ben. A versenyeken a résztvevők célja a legnagyobb sebesség és pontosság elérése volt, miközben egy adott szöveget kellett leírniuk. A gépírás versenyek népszerűsége a 20. században nőtt, és ma is léteznek, sok esetben online formában. A versenyek a gyors és pontos gépelési készségek fejlesztésére szolgálnak.",
    icon: Brain,
  },
  {
    name: "Története",
    description: "A gépírás története az 1860-as évek végére nyúlik vissza, amikor az első írógép, a Sholes és Glidden féle gép megjelent 1868-ban. Az írógépek gyors elterjedésével a 20. század elején megkezdődtek az első gépírás-versenyek is ahogy az látható ez a szöveg fölött.",
    icon: Cloud,
  },
  {
    name: "Gyakorló weboldalak",
    description: "Pingtest;typeonline;typingzone; stb. ",
    icon: Shield,
  },
  {
    name: "Hogyan lehetsz te a legjobb?",
    description: "Nagyon sok gyakorlással. És a lényeg hogy gyors és pontos legyél.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Amit kell tudni a gépírásról</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          1870-től számíthatjuk népszerűnek és elterjedtnek.
          Azonban csak 20. évszázad elején lett igazán fontos irodai munkák miatt.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
