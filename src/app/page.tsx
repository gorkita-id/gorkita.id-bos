import Link from "next/link"

export default function Page() {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen">
            <h1>Hello, Next.js!</h1>
            <button className="btn"><Link href={`/login`}>Go to Login</Link></button>
        </main>
    )
}