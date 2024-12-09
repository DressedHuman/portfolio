export const fileDownloadFunction = (filePath: string, downloadName?: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = downloadName || filePath.substring(filePath.lastIndexOf("/") + 1);
    link.click();
}