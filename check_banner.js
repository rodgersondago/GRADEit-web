async function isBannerVisible() {
    // Send HTTP GET request to decide whether to add the banner
    const endpoint = "https://server.nowa.dev/webpreview/show-banner?projectId=1a234fbe-93c1-4d33-bede-6271853c034f";
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const shouldDisplayBanner = await response.json();
        return shouldDisplayBanner;
    } catch (error) {
        console.error("Error fetching banner decision:", error);
        return true;
    }
}
window.isBannerVisible = isBannerVisible;
