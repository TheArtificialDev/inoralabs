import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fog-gray px-4">
      <div className="text-center">
        <h1 className="font-satoshi-bold font-bold text-8xl text-quantum-blue mb-6">
          404
        </h1>
        <h2 className="font-satoshi-bold font-bold text-2xl md:text-3xl text-quantum-blue mb-4">
          Page Not Found
        </h2>
        <p className="font-satoshi-regular text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link href="/">
          <Button>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
