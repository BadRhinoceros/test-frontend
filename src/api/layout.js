import request from '@/utils/request'

export function getLayoutData() {
    return request({
        url: '/global_site_data',
        method: 'get'
    })
}

export function getIceCreamTypes() {
    return request({
        url: '/products/ice_cream/types',
        method: 'get'
    })
}