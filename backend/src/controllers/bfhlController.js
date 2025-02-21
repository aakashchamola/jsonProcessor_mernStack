const { processData } = require('../utils/helpers');

const handlePostRequest = (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input. Data should be an array."
            });
        }

        const processedData = processData(data);

        return res.status(200).json({
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            ...processedData
        });

    } catch (error) {
        return res.status(500).json({
            is_success: false,
            message: "Internal Server Error"
        });
    }
};

const handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

module.exports = { handlePostRequest, handleGetRequest };
