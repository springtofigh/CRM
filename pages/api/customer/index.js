import Customer from "../../../models/customer";
import connectDB from "../../../utils/connectDB"


export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: "Failed", message: "Error in connecting to DB" });
        return;
    }

    if (req.method === "POST") {
        const data = req.body.data;
        console.log(data);
        
        if (!data.name || !data.lastName || !data.email) 
            return res
            .status(400).json({ status: "Failed", message: "Invalid data" });

            try {
                const customer = await Customer.create(data);
                res.status(200).json({ status: "Success", message: "Created data", data: customer });
            } catch (error) {
                console.log(error);
                res.status(500).json({ status: "Failed", message: "Error in storing data on DB" });
            }
    }
}