import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <main className="flex flex-col justify-center items-center min-h-screen">
            <h1>Hello, Next.js!</h1>
            <button className="btn" onClick={() => router.push('/login')}>Go to Login</button>
        </main>
    )
}