import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Axios from 'axios';
const { getPdfUrl } = require('../api/fileUrl');

export default function Download() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const download = (url, filename) => {
        Axios.get(url, {
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, filename);
        });
    }



    var fileDownload = require('js-file-download');

    return (
        <div>
            <Document file={getPdfUrl('l_p_w_1.pdf')} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>

            <button onClick={() => download(getPdfUrl('l_p_w_1.pdf'), "aa.pdf")}>cccccc</button>
        </div>
    );
}
