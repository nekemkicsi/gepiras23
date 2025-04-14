import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Készen állsz hogy fejleszd magad?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Akkor csatlakozz hozzánk most csak 4.99-ért kapsz egy saját promociós pólót.
          Egy bögrét és meg premium vip fejlesztést a weboldalunkon.
          Ha menő akarsz lenni akkor csatlakozz hozzánk.
        </p>
        <Button size="lg" className="mt-4">
          Lássunk is hozzá
        </Button>
      </div>
    </section>
  )
}
