import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class BaseAPI {
  private client: AxiosInstance;
  private config: AxiosRequestConfig = {};

  constructor(apiURL: string) {
    this.client = axios.create({
      baseURL: apiURL,
      timeout: 30000, // Set timeout for requests
    });
  }

  async authToGetCookie() {
    // async authAPI -> to get cookie
    const cookie = '';
    // set config
    this.config = {
      headers: {
        accept: "application/json",
        cookie: cookie
      }
    }
  }

  async get(endpoint: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.get(endpoint, config ? config : this.config);
  }

  async post(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.post(endpoint, data, config ? config : this.config);
  }

  async put(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.put(endpoint, data, config ? config : this.config);
  }

  async delete(endpoint: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.delete(endpoint, config ? config : this.config);
  }
}
