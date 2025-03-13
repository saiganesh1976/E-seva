import Fastag from "../Models/fasttagModel.js";

const generateRandomFastagID = () => "IND-" + Math.random().toString(36).substr(2, 9).toUpperCase();

export const applyFastag = async (req, res) => {
    try {
        const fasttagID = generateRandomFastagID();
        const fastagData = new Fastag({ ...req.body, fasttagID });
        await fastagData.save();
        res.status(200).json({ message: "Fastag Applied Successfully!", fasttagID });
    } catch (error) {
        res.status(500).json({ message: "Error applying Fastag." });
    }
};

export const rechargeFastag = async (req, res) => {
    try {
        const { email, vechilenumber, amount } = req.body;
        const user = await Fastag.findOne({ email, vechilenumber });

        if (!user) return res.status(404).json({ message: "User not found" });

        user.amount += parseFloat(amount);
        await user.save();
        res.status(200).json({ message: "Recharge successful", newBalance: user.amount });
    } catch (error) {
        res.status(500).json({ message: "Error recharging Fastag." });
    }
};
