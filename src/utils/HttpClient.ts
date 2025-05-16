type HttpClientUrlType = RequestInfo | string

type HttpClientProps = {
  get<T = unknown>(url: HttpClientUrlType, options?: RequestInit): Promise<T>
  put: (url: HttpClientUrlType, options?: RequestInit) => Promise<unknown>
  post: (url: HttpClientUrlType, options?: RequestInit) => Promise<unknown>
  patch: (url: HttpClientUrlType, options?: RequestInit) => Promise<unknown>
  delete: (url: HttpClientUrlType, options?: RequestInit) => Promise<unknown>
}

class BaseHttpClient {
  private readonly baseOptions?: RequestInit

  public constructor(options?: RequestInit) {
    this.baseOptions = options
  }

  public async jsonRequest<TData>(url: RequestInfo | string, options: RequestInit): Promise<TData> {
    try {
      const response = await fetch(url, {
        ...this.baseOptions,
        ...options,
      })

      if (response.ok) {
        const responseText = await response.text()

        if (responseText != null) {
          return JSON.parse(responseText)
        }

        return {} as unknown as TData
      }

      const responseJson = await response.json()

      throw {
        ...responseJson,
        status: response.status,
        statusText: response.statusText,
      }
    } catch (e) {
      const error = e as Error & {status: number}

      throw error
    }
  }
}

export class HttpClient extends BaseHttpClient implements HttpClientProps {
  public async get<TData = unknown>(
    url: RequestInfo | string,
    options?: RequestInit,
  ): Promise<TData> {
    return await this.jsonRequest(url, {...options, method: 'GET'})
  }

  public async post<TData = unknown>(
    url: RequestInfo | string,
    options?: RequestInit,
  ): Promise<TData> {
    return await this.jsonRequest(url, {...options, method: 'POST'})
  }

  public async put<TData = unknown>(
    url: RequestInfo | string,
    options?: RequestInit,
  ): Promise<TData> {
    return await this.jsonRequest(url, {...options, method: 'PUT'})
  }

  public async patch<TData = unknown>(
    url: RequestInfo | string,
    options?: RequestInit,
  ): Promise<TData> {
    return await this.jsonRequest(url, {...options, method: 'PATCH'})
  }

  public async delete<TData = unknown>(
    url: RequestInfo | string,
    options?: RequestInit,
  ): Promise<TData> {
    return await this.jsonRequest(url, {...options, method: 'DELETE'})
  }
}
