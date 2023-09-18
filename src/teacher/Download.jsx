import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Axios from 'axios';

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
            <Document file="http://madeinbrain.net/axebug/pdf/l_p_w_1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>

            <button onClick={() => download("http://madeinbrain.net/axebug/pdf/l_p_w_1.pdf", "aa.pdf")}>cccccc</button>
        </div>
    );
}
