(function () {

    /* =================================
       GET PDF URL
    ================================= */

    var urlParams =
        new URLSearchParams(
            window.location.search
        );

    var fileName =
        urlParams.get("link");


    /* =================================
       ELEMENTS
    ================================= */

    var countdown =
        document.getElementById(
            "pdfCountdown"
        );

    var progress =
        document.getElementById(
            "pdfProgressBar"
        );

    var status =
        document.getElementById(
            "pdfStatus"
        );

    var downloadButton =
        document.getElementById(
            "pdfDownloadButton"
        );


    /* =================================
       SET PDF LINK
    ================================= */

    if (fileName) {
        downloadButton.href = fileName;
    }


    /* =================================
       COUNTDOWN
    ================================= */

    var seconds = 15;

    var timer =
        setInterval(function () {

            seconds--;

            /* Countdown */
            countdown.textContent = seconds;

            /* Progress */
            var percentage =
                ((15 - seconds) / 15) * 100;

            progress.style.width =
                percentage + "%";

            /* Status */
            if (seconds === 12) {
                status.textContent =
                    "Searching for the requested PDF...";
            }

            if (seconds === 8) {
                status.textContent =
                    "Preparing your download...";
            }

            if (seconds === 4) {
                status.textContent =
                    "Almost ready...";
            }


            /* =================================
               AUTO REDIRECT
            ================================= */

            if (seconds <= 0) {

                clearInterval(timer);

                countdown.textContent = "✓";
                progress.style.width = "100%";
                status.textContent = "Your PDF is ready!";

                if (fileName) {
                    window.location.href = fileName;
                }

            }

        }, 1000);

})();
