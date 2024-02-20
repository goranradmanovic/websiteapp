export function useGetFileName(
    url: string
) : string {
    if(!url) 
        return "";

    const urlObject = new URL(url);
    const pathname = urlObject?.pathname;

    if(!pathname) 
        return "";

    const fileNameWithExtension = pathname?.split('/');

    if(!fileNameWithExtension?.length)
        return "";

    return fileNameWithExtension
        ?.pop()
        .split('.')
        .shift() || "";
}