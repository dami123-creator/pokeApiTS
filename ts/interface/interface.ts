export interface listPokemon {
    count: number
    next: string | null
    previus: null | string
    results: Array<{
        name: string
        url: string
    }>
}

export interface pokemon {
    id: number
    name: string
    sprites: {
        front_default: string
    }
}