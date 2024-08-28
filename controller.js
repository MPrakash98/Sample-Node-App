const express = require('express');
const router = express.Router();


// Endpoint with filtering and pagination
router.get('/data', (req, res, next) => {
    getDataList(req, res, next)
});

// Function for fetching data from JSON and handling pagination and filter
async function getDataList(req, res, next) {
    try {
        let { page = 1, limit = 5, filterkeyword } = req.query;

        // Convert page and limit to integers
        page = parseInt(page);
        limit = parseInt(limit);

        // Filter the data
        let filteredData = require('./sampledata');
        if (filterkeyword) {
            filteredData = filteredData.filter(item =>
                item.name.toLowerCase().includes(filterkeyword.toLowerCase()) ||
                item.city.toLowerCase().includes(filterkeyword.toLowerCase())
            );
        }

        // Pagination logic
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedData = filteredData.slice(startIndex, endIndex);
        const totalItems = filteredData?.length;
        const totalPages = Math.ceil(filteredData.length / limit);
        const data = paginatedData;

        sendRes(res,page,limit,totalItems,totalPages,data);
    } catch (error) {
        sendErrRes(next,error)
    }
}

// Function to send the successful response
async function sendRes(res,page,limit,totalItems,totalPages,data) {
    // Response
    res.json({
        page,
        limit,
        totalItems: totalItems,
        totalPages: totalPages,
        data: data
    });
}

// Function to send the error response
async function sendErrRes(next, error) {
    return next(error);
}

module.exports = router;