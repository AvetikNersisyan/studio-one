export interface INewsSlice {
    author: string
    title: string,
    description: string
    url: string
    publishedAt: string
    content: string,
    urlToImage: string
    source: {
        id: string
        name:string
    }
}
