export type ErrorResponseType = {
  error: {
    errors?: string[];
    code?: number;
    exception?: string;
    message: string;
    type?: string;
  };
  status?: number;
};

export type ErrorType = {
  code: number;
  messages: string[];
};

export default interface ErrorsType {
  errors: ErrorType;
  links?: {
    href?: string;
    label: string;
    onClick?: () => void;
  }[];
  response: ErrorResponseType;
}
