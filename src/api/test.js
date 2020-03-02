import request from '@/utils/request'

export function testRequest() {
    return request({
        url: '/global_site_data',
        method: 'get'
    })
}