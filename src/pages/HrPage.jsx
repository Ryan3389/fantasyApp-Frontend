import { useState, useEffect } from "react"
function HrPage() {
    const [homeRunCount, setHomeRunCount] = useState(100)
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(`https://fantasyapp-production-253f.up.railway.app/players/totalHomeRuns?homeRuns=${encodeURIComponent(homeRunCount)}`)
                const response = await fetch(`https://fantasyapp-production-56b5.up.railway.app/players/totalHomeRuns?homeRuns=${encodeURIComponent(homeRunCount)}`)

                if (!response.ok) {
                    throw new Error
                }

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error(error)
            }

        }
        fetchData()
    }, [])
    return (
        <h1>Home Runs</h1>
    )
}

export default HrPage
