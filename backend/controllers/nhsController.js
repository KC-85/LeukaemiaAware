// backend/controllers/nhsController.js
const nhsApi = require("../utils/nhsApi");

exports.getHealthTopic = async (req, res) => {
  try {
    const topicId = req.params.topic; // e.g., "pancreatic-cancer"
    const modulesOnly = req.query.modules === "true"; // Parse the modules parameter

    // Make the API call to the NHS Health Topic endpoint
    const response = await nhsApi.get(`/conditions/${topicId}`, {
      params: { modules: modulesOnly },
    });

    // Send the API response data to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching health topic:", error);
    res.status(500).json({ message: "Failed to retrieve health topic information" });
  }
};
