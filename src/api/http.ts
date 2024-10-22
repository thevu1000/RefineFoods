import { StatusResult } from '@/contants/enum'
import { getRefreshToken, setAccessToken, setRefreshToken } from '@/lib/utils'
import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// number of time reqquest when error
const MAX_RETRY_ATTEMPTS = 3

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  __retryCount?: number
}

// Request Interceptor: add logic before request
axiosInstance.interceptors.request.use(
  (config: RetryAxiosRequestConfig) => {
    // Example: Add token to header if needed
    // config.headers['Authorization'] = `Bearer ${yourToken}`;
    // Set retry count
    config.__retryCount = 0

    console.log('Sending request to:', config.url)
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

//Handle response or error after request
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response

    if (data && data.StatusResult !== StatusResult.statusResultSuccess) {
      return {
        ...response,
        data: {
          Data: [],
          Messages: data.Messages || 'No data available'
        }
      }
    }

    return response
  },
  async (error: AxiosError) => {
    const config = error.config as RetryAxiosRequestConfig

    if (error.response && error.response.status === 401) {
      const refreshToken = getRefreshToken()
      if (refreshToken) {
        try {
          // Gửi yêu cầu làm mới token
          const { data } = await axios.post('/auth/refresh-token', { token: refreshToken })
          const newToken = data?.Token
          const newRefreshToken = data?.RefreshToken

          // Lưu token mới
          setAccessToken(newToken)
          setRefreshToken(newRefreshToken)

          // Cập nhật lại header Authorization và thử lại yêu cầu cũ
          config.headers['Authorization'] = `Bearer ${newToken}`
          return axiosInstance(config)
        } catch (refreshError) {
          console.error('Refresh token failed, redirecting to login...')
          // Chuyển hướng về trang đăng nhập nếu làm mới token thất bại
          // redirect to login logic here
        }
      } else {
        console.error('No refresh token, redirecting to login...')
        // Nếu không có refresh token thì chuyển hướng về trang đăng nhập
        // redirect to login logic here
      }
    }

    // Handle errors due to timeout or network error and try again
    if (error.code === 'ECONNABORTED' || error.message.includes('Network Error')) {
      if (config && config.__retryCount! < MAX_RETRY_ATTEMPTS) {
        config.__retryCount = (config.__retryCount || 0) + 1
        console.log(`Retrying request... (${config.__retryCount}/${MAX_RETRY_ATTEMPTS})`)

        // Add delay before retrying
        const delay = new Promise((resolve) => setTimeout(resolve, 1000))
        await delay

        // Make a retry request
        return axiosInstance(config)
      }
    }
    // Handling 401 (Unauthorized) errors
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...')
      // You can perform actions such as redirecting to the login page here
    }

    return Promise.reject(error)
  }
)

// Global Error Handling
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Bad Request:', error.response.data)
          break
        case 404:
          console.error('Resource Not Found:', error.response.data)
          break
        case 500:
          console.error('Internal Server Error:', error.response.data)
          break
        default:
          console.error('Error:', error.response.data)
      }
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Error setting up request:', error.message)
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
