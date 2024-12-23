export default async function handler(req, res) {
    if (req.method === 'POST') {
        

        try {
            const { error } = req.body;
            const response = await fetch("http://localhost:5000/generate",{
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({error})
            });

            if (!response.ok) {
                throw new Error("Failed to fetch from Flask backend");
            }
            const data = await response.json();
            res.status(200).json(data);
            console.log("Response from Flask backend:", data);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch solution" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}