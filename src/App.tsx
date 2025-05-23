import { useQuery } from '@tanstack/react-query'

export default function App() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['joke'],
        queryFn: async () => {
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            return res.json()
        },
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong!</p>

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-green-600">Random Joke</h1>
            <p className="mt-4 bg-gray-100 p-4 rounded">{data.value}</p>
        </div>
    )
}
