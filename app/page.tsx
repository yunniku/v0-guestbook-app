import { GuestbookForm } from "@/components/guestbook-form"
import { GuestbookEntries } from "@/components/guestbook-entries"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Welcome to Our Guestbook</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Leave your mark and share your thoughts with our community
          </p>
        </div>

        <GuestbookForm />
        <GuestbookEntries />
      </div>
    </main>
  )
}
