const config = require('./config.json');

function joinBaseUrl(baseUrl, path) {
    if (!path) return (baseUrl || '').replace(/\/+$/, '') || '';
    if (/^https?:\/\//i.test(path)) return path;
    const base = (baseUrl || '').replace(/\/+$/, '');
    const relative = String(path).replace(/^\/+/, '');
    return `${base}/${relative}`;
}

/**
 * Resolve a DB-stored file path against config.api.fileUrl.
 * Absolute http(s) URLs are returned as-is.
 */
function getFileUrl(path) {
    return joinBaseUrl(config.api.fileUrl, path);
}

/**
 * Resolve an HTML document path against config.api.httpUrl.
 * Absolute http(s) URLs are returned as-is.
 */
function getHttpUrl(path) {
    return joinBaseUrl(config.api.httpUrl, path);
}

/**
 * Resolve a PDF path against config.api.pdfUrl.
 * Absolute http(s) URLs are returned as-is.
 */
function getPdfUrl(path) {
    return joinBaseUrl(config.api.pdfUrl, path);
}

module.exports = { getFileUrl, getHttpUrl, getPdfUrl };
