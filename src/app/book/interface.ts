

export interface IModalConfig {
    type: string | null;
    data: IDataType | null
}
export interface IDataType {
    id: string;
    bookName: string;
    author: string;
    release_day: string | null;
    price: string;
    description: string | null;
    page: string;
    language: string;
    status: string | null;
    publisher: string,
}

export interface IBook {
    bookName: string;
    author: string;
    price: string;
    description: string;
    language: string;
}