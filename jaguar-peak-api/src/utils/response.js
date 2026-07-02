const successResponse = (res, data, message = 'OK', status = 200) => {
    return res.status(status).json({
        ok: true,
        message,
        data
    });
};

const errorResponse = (res, message = 'Error interno', status = 500) => {
    return res.status(status).json({
        ok: false,
        message
    });
};

module.exports = { successResponse, errorResponse };
