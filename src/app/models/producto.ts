export interface Producto {
    accountInformation: {
        accountIdentifier: string,
        productType: string,
        currencyCode?: string,
        bank: string
    },
    locked: boolean,
    id: string,
    typeAccount: string,
    status?: string,
    openedDate?: string,
    closedDate?: string,
    dueDate?: string,
    lastTransactionDate?: string,
    overDraftDays?: number,
    term?: {
        count: number,
        units: string
    },
    periodicityOfPayment?: {
        count: number,
        units: string
    },
    productAccountBalances?: {
        pago_total_pesos?: {
            amount: number,
            currencyCode: string
        },
        cupo_disponible_avances_pesos?: {
            amount: number,
            currencyCode: string
        },
        saldo_mora_pesos?: {
            amount: number,
            currencyCode: string
        },
        saldo_canje?: {
            amount: number
        },
        cupo_aprobado_remesas?: {
            amount: number
        },
        cupos_aprobado_sobregiro?: {
            amount: number
        },
        saldo_disponible?: {
            amount: number
        },
        cupo_disponible_sobregiro?: {
            amount: number
        },
        saldo_canje_48_horas?: {
            amount: number
        },
        saldo_canje_72_horas?: {
            amount: number
        },
        saldo_canje_24_horas?: {
            amount: number
        },
        saldo_ayer?: {
            amount: number
        },
        saldo_actual?: {
            amount: number,
            currencyCode?: string
        },
        cupo_disponible_compras_pesos?: {
            amount: number,
            currencyCode: string
        },
        valor_pago_minimo?: {
            amount: number,
            currencyCode: string
        },
        cupo_total?: {
            amount: number,
            currencyCode: string
        },
        saldo_pendiente_pago?: {
            amount: number
        },
        tasa_nominal?: {
            amount: number,
            rate: number
        },
        interes_pagado?: {
            amount: number
        },
        valor_constitucion?: {
            amount: number
        },
        intereses_causados?: {
            amount: number
        },
        retefuente?: {
            amount: number
        }
    },
    capacity?: number
}
