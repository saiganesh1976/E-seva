import Grievances from "../Models/grievences.js";

export const submitGrievance = async (req, res) => {
    try {
        const newEntry = new Grievances(req.body);
        await newEntry.save();
        res.status(201).json({ message: "Grievance submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving grievance." });
    }
};
