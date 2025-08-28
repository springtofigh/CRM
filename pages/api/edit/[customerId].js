import Customer from '../../../models/Customer';
import connectDB from './../../../utils/connectDB';

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: "Failed", message: "Error in connecting to DB" });
        return;
    }

    if (req.method === "PATCH") {
        const id = req.query.customerId;
        const data = req.body.data

        try {
            const customer = await Customer.findOne({ _id: id })
            customer.name = data.name;
            customer.lastName = data.lastName;
            customer.email = data.email;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.postalCode = data.postalCode;
            customer.products = data.products;
            customer.updatedAt = Date.now();
            customer.save();
            res.status(200).json({ status: "Success", message: "Data updated successfully" })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ status: "Failed", message: "Error in retriving data from database" });
        }
    }
}