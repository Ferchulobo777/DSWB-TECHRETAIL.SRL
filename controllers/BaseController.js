class BaseController {
    /**
     * Send a success response
     */
    sendSuccess(res, data, status = 200) {
        return res.status(status).json(data);
    }

    /**
     * Send an error response
     */
    sendError(res, error, status = 500) {
        console.error("ERROR:", error);
        return res.status(status).json({
            error: error.message || "Internal Server Error",
            details: error
        });
    }

    /**
     * Render a pug view
     */
    renderView(res, view, data = {}) {
        return res.render(view, data);
    }
}

module.exports = BaseController;
