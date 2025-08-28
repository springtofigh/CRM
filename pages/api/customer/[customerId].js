import Customer from '../../../models/Customer';
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: "Failed", message: "Error in connecting to DB" });
        return;
    }

    if (req.method === "GET") {
        const id = req.query.customerId;

        try {
            const customer = await Customer.findOne({ _id: id })
            res.status(200).json({ status: "Success", data: customer })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ status: "Failed", message: "Error in retriving data from database" });
        }
    }
}