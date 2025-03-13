import Donor from "../Models/Donor.js";

export const registerDonor = async (req, res) => {
    try {
        const newDonor = new Donor(req.body);
        await newDonor.save();
        res.status(200).json({ message: "Donor registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving donor data." });
    }
};

export const getDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching donors." });
    }
};
