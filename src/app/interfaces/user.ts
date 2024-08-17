export interface User {
   id:string,
   email: string,
   first_name: string,
   last_name: string,
   avatar: string
}

export interface support{
   url:string,
   text: string
}

export interface userDetails {
   data: User,
   support: support
}




export interface Users{
   page: number,
   per_page: number,
   total: number,
   total_pages: number,
   data: User[],
   support: support
}
