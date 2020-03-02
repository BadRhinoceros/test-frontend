import request from '@/utils/request'

export function getContactInfo() {
    return request({
        url: '/about/contactInfo',
        method: 'get'
    })
}

export function getTeam() {
    return request({
        url: '/about/team',
        method: 'get'
    })
}

export function getPartners() {
    return request({
        url: '/about/partners',
        method: 'get'
    })
}

export function getRawMaterials() {
    return request({
        url: '/about/rawMaterials',
        method: 'get'
    })
}

export function getRawMaterialsInfo() {
    return request({
        url: '/about/rawMaterialsInfo',
        method: 'get'
    })
}

export function getCertificates() {
    return request({
        url: '/about/certificates',
        method: 'get'
    })
}

export function getFranchasee() {
    return request({
        url: '/about/franchasee',
        method: 'get'
    })
}