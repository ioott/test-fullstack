export enum StatusNames {
  INTERNAL_ERROR = 500,
  CREATED = 201 ,
  OK = 200,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  BAD_REQUEST = 400,
  CONFLICT = 409,
  NO_CONTENT = 204,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403
}

export default class ServiceResponse<T = object> {
  public statusCode: number;
  public data: T | { message: string };

  constructor(statusName: StatusNames, data: T |  string ) {
    this.statusCode = statusName
    this.data = typeof data === 'string'? { message: data } : data;
  }

  public changeMessage(newMessage: string) {
    if ((<{ message: string }>this.data).message) {
      (<{ message: string }>this.data).message = newMessage;
    }
  }

  public changeStatusCode(newStatus: StatusNames) {
    this.statusCode = newStatus
  }
}